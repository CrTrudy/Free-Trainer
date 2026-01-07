"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import {
  lessons,
  type Lesson,
  type Tense,
  type WordEntry,
} from "../data/vocab";

type Direction = "source-to-target" | "target-to-source";

type Stat = {
  correct: number;
  wrong: number;
  completed: number;
};

const normalize = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[.,;:!?]/g, "");

export default function Home() {
  const languagePairs = Array.from(
    new Set(
      lessons.map(
        (lesson) => `${lesson.languagePair.from}-${lesson.languagePair.to}`
      )
    )
  );
  const [pairKey, setPairKey] = useState(languagePairs[0] ?? "ru-de");

  const lessonsForPair = useMemo(
    () =>
      lessons.filter(
        (l) => `${l.languagePair.from}-${l.languagePair.to}` === pairKey
      ),
    [pairKey]
  );

  const categories = Array.from(new Set(lessonsForPair.map((l) => l.category)));
  const [category, setCategory] = useState<string>(categories[0] ?? "");

  const filteredLessons = lessonsForPair.filter((l) => l.category === category);
  const [lessonId, setLessonId] = useState<string>(
    filteredLessons[0]?.id ?? ""
  );

  const safeCategory = categories.includes(category)
    ? category
    : categories[0] ?? "";
  const lessonsByCategory = lessonsForPair.filter(
    (l) => l.category === safeCategory
  );
  const safeLessonId = lessonsByCategory.some((l) => l.id === lessonId)
    ? lessonId
    : lessonsByCategory[0]?.id ?? "";
  const activeLesson =
    lessonsByCategory.find((l) => l.id === safeLessonId) ??
    lessonsByCategory[0] ??
    lessonsForPair[0];

  const [direction, setDirection] = useState<Direction>("source-to-target");
  const [tense, setTense] = useState<Tense>("present");
  const [lessonStats, setLessonStats] = useState<Record<string, Stat>>({});

  const categoryStats = useMemo(() => {
    const map: Record<string, Stat> = {};
    lessonsForPair.forEach((lesson) => {
      const stat = lessonStats[lesson.id] ?? {
        correct: 0,
        wrong: 0,
        completed: 0,
      };
      const prev = map[lesson.category] ?? {
        correct: 0,
        wrong: 0,
        completed: 0,
      };
      map[lesson.category] = {
        correct: prev.correct + stat.correct,
        wrong: prev.wrong + stat.wrong,
        completed: prev.completed + stat.completed,
      };
    });
    return map;
  }, [lessonStats, lessonsForPair]);

  const totalStats = useMemo(() => {
    return lessonsForPair.reduce(
      (acc, lesson) => {
        const stat = lessonStats[lesson.id] ?? {
          correct: 0,
          wrong: 0,
          completed: 0,
        };
        return {
          correct: acc.correct + stat.correct,
          wrong: acc.wrong + stat.wrong,
          completed: acc.completed + stat.completed,
        };
      },
      { correct: 0, wrong: 0, completed: 0 }
    );
  }, [lessonStats, lessonsForPair]);

  const activeCategoryStat = categoryStats[safeCategory] ?? {
    correct: 0,
    wrong: 0,
    completed: 0,
  };

  const updateStats = (
    lessonKey: string,
    isCorrect: boolean,
    isCompleted: boolean
  ) => {
    setLessonStats((prev) => {
      const current = prev[lessonKey] ?? { correct: 0, wrong: 0, completed: 0 };
      const next: Stat = {
        correct: current.correct + (isCorrect ? 1 : 0),
        wrong: current.wrong + (isCorrect ? 0 : 1),
        completed: current.completed + (isCompleted ? 1 : 0),
      };
      return { ...prev, [lessonKey]: next };
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-100 text-slate-900">
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:px-8">
        <header className="rounded-3xl bg-gradient-to-r from-blue-600 via-sky-600 to-blue-500 px-6 py-8 text-white shadow-lg">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] opacity-80">
                Vokabel Trainer
              </p>
              <h1 className="mt-2 text-3xl font-semibold md:text-4xl">
                Lektionen ueben, schreiben, merken
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-blue-100">
                Waehle Kategorie und Lektion (10-15 Woerter), arbeite alle
                Woerter ab. Korrekte Woerter verschwinden bis die Lektion
                abgeschlossen ist. Mit Mehrdeutigkeiten, Transkription und
                Konjugationshinweisen.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <SelectPill
                label="Sprachpaar"
                value={pairKey}
                onChange={(v) => {
                  const nextCategories = Array.from(
                    new Set(
                      lessons
                        .filter(
                          (l) =>
                            `${l.languagePair.from}-${l.languagePair.to}` === v
                        )
                        .map((l) => l.category)
                    )
                  );
                  const nextCategory = nextCategories[0] ?? "";
                  const nextLessons = lessons.filter(
                    (l) =>
                      `${l.languagePair.from}-${l.languagePair.to}` === v &&
                      l.category === nextCategory
                  );
                  setPairKey(v);
                  setCategory(nextCategory);
                  setLessonId(nextLessons[0]?.id ?? "");
                }}
                options={languagePairs.map((pk) => ({
                  label: pk.toUpperCase(),
                  value: pk,
                }))}
              />
              <SelectPill
                label="Richtung"
                value={direction}
                onChange={(value) => setDirection(value as Direction)}
                options={[
                  { label: "Quelle -> Ziel", value: "source-to-target" },
                  { label: "Ziel -> Quelle", value: "target-to-source" },
                ]}
              />
            </div>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-4">
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-slate-50 via-white to-blue-50 p-4 shadow-inner">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Kategorien
                  </p>
                  <p className="text-sm text-slate-700">
                    Waehle eine Kategorie, um passende Lektionen zu sehen.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => {
                    const stat = categoryStats[cat] ?? {
                      correct: 0,
                      wrong: 0,
                      completed: 0,
                    };
                    return (
                      <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`group rounded-full border px-4 py-2 text-sm font-semibold shadow-sm transition ${
                          safeCategory === cat
                            ? "border-blue-300 bg-white text-blue-700 ring-2 ring-blue-100"
                            : "border-slate-200 bg-white/80 text-slate-700 hover:border-blue-200 hover:text-blue-700"
                        }`}
                      >
                        {cat}
                        <span
                          className={`ml-2 text-xs font-medium ${
                            safeCategory === cat
                              ? "text-blue-600"
                              : "text-slate-500"
                          }`}
                        >
                          {stat.correct}/{stat.wrong}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                    {safeCategory}
                  </span>
                  <span className="text-xs text-slate-500">
                    {lessonsByCategory.length} Lektion
                    {lessonsByCategory.length === 1 ? "" : "en"} Â·{" "}
                    {activeLesson?.words.length ?? 0} Vokabeln
                  </span>
                </div>
                {safeCategory === "Verben" && (
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                    <span className="uppercase tracking-wide text-[10px] text-slate-500">
                      Zeitform
                    </span>
                    <select
                      value={tense}
                      onChange={(e) => setTense(e.target.value as Tense)}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    >
                      <option value="present">Gegenwart</option>
                      <option value="past">Vergangenheit</option>
                      <option value="future">Zukunft</option>
                    </select>
                  </div>
                )}
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <StatBadge
                  label="Richtig"
                  value={`${activeCategoryStat.correct}`}
                />
                <StatBadge
                  label="Falsch"
                  value={`${activeCategoryStat.wrong}`}
                />
                <StatBadge
                  label="Abgeschlossen"
                  value={`${activeCategoryStat.completed}`}
                />
              </div>

              <div className="mt-5">
                <LessonTrainer
                  lessons={lessonsByCategory}
                  selectedLessonId={safeLessonId}
                  onSelectLesson={(id) => setLessonId(id)}
                  direction={direction}
                  selectedTense={safeCategory === "Verben" ? tense : undefined}
                  onResult={(lessonKey, isCorrect, isCompleted) =>
                    updateStats(lessonKey, isCorrect, isCompleted)
                  }
                />
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Kategorie-Statistik
              </h2>
              <div className="mt-3 grid grid-cols-1 gap-2 text-sm">
                {categories.map((cat) => {
                  const stat = categoryStats[cat] ?? {
                    correct: 0,
                    wrong: 0,
                    completed: 0,
                  };
                  return (
                    <div
                      key={cat}
                      className={`flex items-center justify-between rounded-xl border px-3 py-2 ${
                        safeCategory === cat
                          ? "border-blue-200 bg-blue-50"
                          : "border-slate-100 bg-slate-50"
                      }`}
                    >
                      <span className="font-semibold">{cat}</span>
                      <span className="text-xs text-slate-600">
                        {stat.correct} richtig / {stat.wrong} falsch /{" "}
                        {stat.completed}x abgeschlossen
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-emerald-100 p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-emerald-900">
                Gesamt (Sprachpaar)
              </h2>
              <p className="mt-1 text-sm text-emerald-800">
                Richtig: {totalStats.correct} Â· Falsch: {totalStats.wrong} Â·
                Abgeschlossene Lektionen: {totalStats.completed}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                So funktioniert es
              </h2>
              <ol className="mt-3 space-y-2 text-sm text-slate-700">
                <li>1. Kategorie und Lektion waehlen.</li>
                <li>2. Richtung einstellen (Quelle â†” Ziel).</li>
                <li>
                  3. Woerter korrekt schreiben; richtige verschwinden bis Ende
                  der Lektion.
                </li>
                <li>4. Bei Abschluss neu starten, um erneut zu ueben.</li>
              </ol>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

function LessonTrainer({
  lessons,
  selectedLessonId,
  onSelectLesson,
  direction,
  selectedTense,
  onResult,
}: {
  lessons: Lesson[];
  selectedLessonId: string;
  onSelectLesson: (lessonId: string) => void;
  direction: Direction;
  selectedTense?: Tense;
  onResult: (
    lessonId: string,
    isCorrect: boolean,
    isCompleted: boolean
  ) => void;
}) {
  const orderedLessons = useMemo(
    () =>
      lessons.map((l) => ({
        ...l,
        words: [...l.words].sort((a, b) => a.frequencyRank - b.frequencyRank),
      })),
    [lessons]
  );
  const activeLesson =
    orderedLessons.find((l) => l.id === selectedLessonId) ??
    orderedLessons[0] ??
    null;
  const [activeWordId, setActiveWordId] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [answer, setAnswer] = useState("");
  const [conjAnswers, setConjAnswers] = useState<Record<string, string[]>>({});
  const [hiddenIds, setHiddenIds] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [prefilled, setPrefilled] = useState(false);

  useEffect(() => {
    setActiveWordId(null);
    setShowAnswer(false);
    setFeedback(null);
    setAnswer("");
    setHiddenIds([]);
    setConjAnswers({});
    setPrefilled(false);
  }, [activeLesson?.id]);

  useEffect(() => {
    if (activeWordId && !showAnswer && inputRef.current) {
      inputRef.current.focus();
    }
  }, [activeWordId, showAnswer]);

  const isReverse = direction === "target-to-source";

  const handleSelectWord = (wordId: string, word: WordEntry) => {
    if (activeWordId === wordId) {
      setActiveWordId(null);
      setShowAnswer(false);
      setFeedback(null);
      setAnswer("");
      setPrefilled(false);
    } else {
      setActiveWordId(wordId);
      setShowAnswer(false);
      setFeedback(null);
      setAnswer("");
      setPrefilled(false);
      if (
        word.partOfSpeech === "verb" &&
        selectedTense &&
        word.forms?.conjugations?.[selectedTense]
      ) {
        const count = word.forms.conjugations[selectedTense]!.length;
        setConjAnswers((prev) => ({
          ...prev,
          [wordId]: Array(count).fill(""),
        }));
      }
    }
  };

  const handleDoubleClickWord = (wordId: string, word: WordEntry) => {
    setActiveWordId(wordId);
    setShowAnswer(true);
    setFeedback(null);
    setAnswer("");
    setPrefilled(false);
    if (
      word.partOfSpeech === "verb" &&
      selectedTense &&
      word.forms?.conjugations?.[selectedTense]
    ) {
      const count = word.forms.conjugations[selectedTense]!.length;
      setConjAnswers((prev) => ({ ...prev, [wordId]: Array(count).fill("") }));
    }
  };

  const activeWord =
    activeLesson?.words.find((w) => w.id === activeWordId) ?? null;

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (!activeLesson || !activeWord) return;
    let expectedList: string[] = [];
    if (
      activeWord.partOfSpeech === "verb" &&
      selectedTense &&
      activeWord.forms?.conjugations?.[selectedTense]
    ) {
      expectedList = (activeWord.forms.conjugations[selectedTense] ?? []).map(
        (f) => normalize(f)
      );
    } else {
      expectedList = isReverse
        ? [normalize(activeWord.source)]
        : activeWord.targets.map((t) =>
            normalize(t.text.split("/")[0] ?? t.text)
          );
    }
    const isVerbWithConj =
      activeWord.partOfSpeech === "verb" &&
      selectedTense &&
      activeWord.forms?.conjugations?.[selectedTense];

    let isCorrect = false;
    if (isVerbWithConj) {
      const answers = conjAnswers[activeWord.id] ?? [];
      isCorrect =
        expectedList.length > 0 &&
        expectedList.length === answers.length &&
        expectedList.every(
          (expected, idx) => normalize(answers[idx] ?? "") === expected
        );
    } else {
      isCorrect = expectedList.some(
        (expected) => normalize(answer) === expected
      );
    }
    setFeedback(isCorrect ? "correct" : "wrong");
    const willBeHiddenCount =
      hiddenIds.includes(activeWord.id) || !isCorrect
        ? hiddenIds.length
        : hiddenIds.length + 1;
    const isLessonCompleted =
      isCorrect && willBeHiddenCount >= (activeLesson?.words.length ?? 0);
    onResult(activeLesson.id, isCorrect, isLessonCompleted);

    if (isCorrect) {
      setActiveWordId(null);
      setShowAnswer(false);
      setAnswer("");
      setConjAnswers((prev) => ({ ...prev, [activeWord.id]: [] }));
      setHiddenIds((prev) => {
        const next = prev.includes(activeWord.id)
          ? prev
          : [...prev, activeWord.id];
        if (next.length >= activeLesson.words.length) {
          // Reset, alle wieder sichtbar machen
          setTimeout(() => {
            setHiddenIds([]);
            setActiveWordId(null);
            setShowAnswer(false);
            setFeedback(null);
            setAnswer("");
          }, 0);
        }
        return next;
      });
    }
  };

  const visibleWords =
    activeLesson?.words.filter((w) => !hiddenIds.includes(w.id)) ?? [];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {orderedLessons.map((l) => (
          <button
            key={l.id}
            onClick={() => {
              onSelectLesson(l.id);
              setActiveWordId(null);
              setShowAnswer(false);
              setFeedback(null);
              setAnswer("");
            }}
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
              activeLesson?.id === l.id
                ? "bg-emerald-100 text-emerald-800 ring-2 ring-emerald-200"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {l.title}
          </button>
        ))}
      </div>

      {activeLesson ? (
        <div className="">
          <h2 className="text-lg font-semibold text-slate-900">
            {activeLesson.title}
          </h2>

          <div className="mt-4 flex flex-wrap gap-3">
            {visibleWords.length === 0 ? (
              <div className="w-full rounded-xl border border-dashed border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                Alle Woerter korrekt! Die Lektion wurde zurueckgesetzt.
              </div>
            ) : null}
            {visibleWords.map((word) => {
              const isActive = activeWordId === word.id;
              const front = isReverse
                ? word.targets.map((t) => t.text).join(", ")
                : word.source;
              const back = isReverse
                ? word.source
                : word.targets.map((t) => t.text).join(", ");
              const longestSide = front.length >= back.length ? front : back;
              const estimatedWidth = Math.min(
                Math.max(longestSide.length * 9 + 60, 200),
                420
              );
              const baseExpected = isReverse
                ? word.source
                : word.targets
                    .map((t) => t.text.split("/")[0] ?? t.text)
                    .join(", ");
              const estimatedInputWidth = Math.min(
                Math.max(baseExpected.length * 9 + 80, 200),
                420
              );
              const inputMax = Math.max(160, estimatedWidth - 24);
              const clampedInputWidth = Math.max(
                160,
                Math.min(estimatedInputWidth, inputMax)
              );
              const conjugationWidths =
                selectedTense && word.forms?.conjugations?.[selectedTense]
                  ? word.forms.conjugations[selectedTense]!.map((form) =>
                      Math.max(
                        160,
                        Math.min(Math.max(form.length * 9 + 80, 200), inputMax)
                      )
                    )
                  : [];
              const handleLeft = () => {
                if (activeWordId === word.id && !showAnswer) {
                  setActiveWordId(null);
                  setFeedback(null);
                  setAnswer("");
                } else {
                  setActiveWordId(word.id);
                  setShowAnswer(false);
                  setFeedback(null);
                  setAnswer("");
                  if (
                    word.partOfSpeech === "verb" &&
                    selectedTense &&
                    word.forms?.conjugations?.[selectedTense]
                  ) {
                    const count =
                      word.forms.conjugations[selectedTense]!.length;
                    setConjAnswers((prev) => ({
                      ...prev,
                      [word.id]: Array(count).fill(""),
                    }));
                  }
                }
              };
              const handleRight = () => {
                setActiveWordId(word.id);
                setShowAnswer(true);
                setFeedback(null);
                const isVerbWithConj =
                  word.partOfSpeech === "verb" &&
                  selectedTense &&
                  word.forms?.conjugations?.[selectedTense];
                if (isVerbWithConj) {
                  const forms = word.forms?.conjugations?.[selectedTense] ?? [];
                  setConjAnswers((prev) => ({
                    ...prev,
                    [word.id]: [...forms],
                  }));
                  setAnswer("");
                } else {
                  const expected = isReverse
                    ? word.source
                    : word.targets
                        .map((t) => t.text.split("/")[0] ?? t.text)
                        .join(", ");
                  setAnswer(expected);
                  setConjAnswers((prev) => ({ ...prev, [word.id]: [] }));
                }
                setPrefilled(true);
              };
              return (
                <div
                  key={word.id}
                  className={`w-auto rounded-xl bg-white px-4 py-3 shadow-sm ${
                    isActive ? "ring-2 ring-blue-200 bg-blue-50/60" : "bg-white"
                  }`}
                  style={{ width: `${estimatedWidth}px`, maxWidth: "100%" }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div
                      className="cursor-pointer text-center"
                      onClick={handleLeft}
                      onDoubleClick={(e) => {
                        e.stopPropagation();
                        handleLeft();
                      }}
                    >
                      <p className="text-xl font-semibold text-slate-900">
                        {front}
                      </p>
                      {isActive && showAnswer && (
                        <>
                          {word.translit && (
                            <p className="text-sm text-slate-600">
                              Translit: {word.translit}
                            </p>
                          )}
                          {word.partOfSpeech === "verb" &&
                            selectedTense &&
                            word.forms?.conjugations?.[selectedTense] && (
                              <div className="mt-1 text-sm text-slate-700">
                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                  {selectedTense === "present"
                                    ? "Gegenwart"
                                    : selectedTense === "past"
                                    ? "Vergangenheit"
                                    : "Zukunft"}
                                </p>
                                <ul className="mt-1 space-y-1">
                                  {word.forms.conjugations[selectedTense]!.map(
                                    (form) => (
                                      <li key={form}>{form}</li>
                                    )
                                  )}
                                </ul>
                              </div>
                            )}
                          <div className="text-sm text-slate-700">
                            {word.targets.some((t) => t.note) && (
                              <ul className="mt-1 space-y-1">
                                {word.targets.map(
                                  (t) =>
                                    t.note && (
                                      <li key={t.text}>
                                        {t.text}: {t.note}
                                      </li>
                                    )
                                )}
                              </ul>
                            )}
                            {word.forms && (
                              <div className="mt-1">
                                {word.forms.irregular && (
                                  <div>
                                    Unregelmaessig: {word.forms.irregular}
                                  </div>
                                )}
                                {word.forms.missing &&
                                  word.forms.missing.length > 0 && (
                                    <div>
                                      Nicht ueblich:{" "}
                                      {word.forms.missing.join(", ")}
                                    </div>
                                  )}
                              </div>
                            )}
                            {word.examples && (
                              <ul className="mt-1 list-disc pl-4">
                                {word.examples.map((ex) => (
                                  <li key={ex}>{ex}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                    <div
                      className="flex cursor-pointer items-center gap-2 text-xs font-semibold text-slate-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRight();
                      }}
                    >
                      #{word.frequencyRank}
                    </div>
                  </div>

                  {isActive && !showAnswer && (
                    <form
                      onSubmit={handleSubmit}
                      className="mt-3 flex flex-col items-center space-y-3"
                      onClick={(e) => e.stopPropagation()}
                      onDoubleClick={(e) => e.stopPropagation()}
                    >
                      {feedback && (
                        <div
                          className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold ${
                            feedback === "correct"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-rose-100 text-rose-700"
                          }`}
                        >
                          {feedback === "correct" ? "Richtig" : "Falsch"}
                        </div>
                      )}
                      {word.partOfSpeech === "verb" &&
                      selectedTense &&
                      word.forms?.conjugations?.[selectedTense] ? (
                        <div className="flex w-full flex-col items-start gap-2">
                          {word.forms.conjugations[selectedTense]!.map(
                            (_, idx) => {
                              const labels =
                                selectedTense === "past"
                                  ? ["муж", "жен", "множ"]
                                  : [
                                      "я",
                                      "ты",
                                      "он/она\nоно",
                                      "мы",
                                      "вы",
                                      "они",
                                    ];
                              const label = labels[idx] ?? `Form ${idx + 1}`;
                              return (
                                <label
                                  key={idx}
                                  className="flex w-full max-w-[340px] flex-col text-base text-slate-700"
                                >
                                  <input
                                    value={conjAnswers[word.id]?.[idx] ?? ""}
                                    onChange={(evt) =>
                                      setConjAnswers((prev) => {
                                        const next = [...(prev[word.id] ?? [])];
                                        next[idx] = evt.target.value;
                                        return { ...prev, [word.id]: next };
                                      })
                                    }
                                    className="rounded-lg border border-slate-200 px-3 py-2 text-left text-base shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 overflow-hidden text-ellipsis whitespace-nowrap"
                                    style={{
                                      width: `${conjugationWidths[idx] ?? clampedInputWidth}px`,
                                      maxWidth: "100%",
                                    }}
                                    autoComplete="off"
                                    onClick={(e) => e.stopPropagation()}
                                    onDoubleClick={(e) => e.stopPropagation()}
                                    ref={
                                      isActive && idx === 0 ? inputRef : null
                                    }
                                  />
                                </label>
                              );
                            }
                          )}
                        </div>
                      ) : (
                        <>
                          {prefilled && (
                            <div className="text-xs text-slate-500">
                              Vorgabe eingetragen – zum Ueben anpassen oder
                              direkt abschicken.
                            </div>
                          )}
                          <input
                            ref={isActive ? inputRef : null}
                            value={answer}
                            onChange={(evt) => setAnswer(evt.target.value)}
                            placeholder={
                              isReverse
                                ? "Russisch eingeben..."
                                : "Deutsch eingeben..."
                            }
                            className="mx-auto rounded-lg border border-slate-200 px-3 py-2 text-left text-base shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                            style={{ width: `${clampedInputWidth}px`, maxWidth: "100%" }}
                            autoComplete="off"
                            onClick={(e) => e.stopPropagation()}
                            onDoubleClick={(e) => e.stopPropagation()}
                          />
                        </>
                      )}
                      <input type="submit" className="hidden" />
                    </form>
                  )}

                  {isActive && showAnswer && (
                    <div
                      className="mt-3 rounded-lg bg-white px-3 py-2 text-sm text-slate-800 shadow-inner text-center"
                      onClick={(e) => e.stopPropagation()}
                      onDoubleClick={(e) => e.stopPropagation()}
                    >
                      <p className="font-semibold text-emerald-700">{back}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-200 p-6 text-slate-500">
          Keine Lektion verfuegbar.
        </div>
      )}
    </div>
  );
}

type StatBadgeProps = {
  label: string;
  value: string;
};

function StatBadge({ label, value }: StatBadgeProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-center shadow-sm">
      <p className="text-[11px] uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className="text-lg font-semibold text-slate-900">{value}</p>
    </div>
  );
}

function SelectPill({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { label: string; value: string }[];
}) {
  return (
    <label className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow">
      <span className="uppercase tracking-wide text-[11px] text-blue-100">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-full bg-white/20 px-3 py-1 text-sm font-semibold text-white outline-none backdrop-blur"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="text-slate-900">
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function LessonWord({ entry }: { entry: WordEntry }) {
  return (
    <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-semibold text-slate-900">
            {entry.source}{" "}
            {entry.translit && (
              <span className="text-slate-500">({entry.translit})</span>
            )}
          </p>
          <p className="text-sm text-slate-700">
            {entry.targets.map((t) => t.text).join(", ")}
          </p>
          {entry.targets.some((t) => t.note) && (
            <p className="text-xs text-slate-500">
              {entry.targets
                .filter((t) => t.note)
                .map((t) => `${t.text}: ${t.note}`)
                .join(" â€¢ ")}
            </p>
          )}
        </div>
        <div className="rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-600 shadow-sm">
          #{entry.frequencyRank}
        </div>
      </div>
    </div>
  );
}
