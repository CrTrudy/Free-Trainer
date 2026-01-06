"use client";

import { FormEvent, useMemo, useState } from "react";
import { lessons, type Lesson, type WordEntry } from "../data/vocab";

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
    new Set(lessons.map((lesson) => `${lesson.languagePair.from}-${lesson.languagePair.to}`)),
  );
  const [pairKey, setPairKey] = useState(languagePairs[0] ?? "ru-de");

  const lessonsForPair = useMemo(
    () => lessons.filter((l) => `${l.languagePair.from}-${l.languagePair.to}` === pairKey),
    [pairKey],
  );

  const categories = Array.from(new Set(lessonsForPair.map((l) => l.category)));
  const [category, setCategory] = useState<string>(categories[0] ?? "");

  const filteredLessons = lessonsForPair.filter((l) => l.category === category);
  const [lessonId, setLessonId] = useState<string>(filteredLessons[0]?.id ?? "");

  const safeCategory = categories.includes(category) ? category : categories[0] ?? "";
  const lessonsByCategory = lessonsForPair.filter((l) => l.category === safeCategory);
  const safeLessonId = lessonsByCategory.some((l) => l.id === lessonId)
    ? lessonId
    : lessonsByCategory[0]?.id ?? "";
  const activeLesson =
    lessonsByCategory.find((l) => l.id === safeLessonId) ??
    lessonsByCategory[0] ??
    lessonsForPair[0];

  const [direction, setDirection] = useState<Direction>("source-to-target");
  const [lessonStats, setLessonStats] = useState<Record<string, Stat>>({});

  const lessonWords = useMemo(() => {
    if (!activeLesson) return [];
    return [...activeLesson.words].sort((a, b) => a.frequencyRank - b.frequencyRank);
  }, [activeLesson]);

  const categoryStats = useMemo(() => {
    const map: Record<string, Stat> = {};
    lessonsForPair.forEach((lesson) => {
      const stat = lessonStats[lesson.id] ?? { correct: 0, wrong: 0, completed: 0 };
      const prev = map[lesson.category] ?? { correct: 0, wrong: 0, completed: 0 };
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
        const stat = lessonStats[lesson.id] ?? { correct: 0, wrong: 0, completed: 0 };
        return {
          correct: acc.correct + stat.correct,
          wrong: acc.wrong + stat.wrong,
          completed: acc.completed + stat.completed,
        };
      },
      { correct: 0, wrong: 0, completed: 0 },
    );
  }, [lessonStats, lessonsForPair]);

  const updateStats = (lesson: Lesson, isCorrect: boolean) => {
    setLessonStats((prev) => {
      const current = prev[lesson.id] ?? { correct: 0, wrong: 0, completed: 0 };
      const next: Stat = {
        correct: current.correct + (isCorrect ? 1 : 0),
        wrong: current.wrong + (isCorrect ? 0 : 1),
        completed: current.completed,
      };
      return { ...prev, [lesson.id]: next };
    });
  };

  const markLessonCompleted = (lesson: Lesson) => {
    setLessonStats((prev) => {
      const current = prev[lesson.id] ?? { correct: 0, wrong: 0, completed: 0 };
      const next: Stat = {
        ...current,
        completed: current.completed + 1,
      };
      return { ...prev, [lesson.id]: next };
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-100 text-slate-900">
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:px-8">
        <header className="rounded-3xl bg-gradient-to-r from-blue-600 via-sky-600 to-blue-500 px-6 py-8 text-white shadow-lg">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] opacity-80">Vokabel Trainer</p>
              <h1 className="mt-2 text-3xl font-semibold md:text-4xl">
                Lektionen ueben, schreiben, merken
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-blue-100">
                Waehle Kategorie und Lektion (10-15 Woerter), arbeite alle Woerter ab.
                Korrekte Woerter verschwinden bis die Lektion abgeschlossen ist. Mit
                Mehrdeutigkeiten, Transkription und Konjugationshinweisen.
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
                        .filter((l) => `${l.languagePair.from}-${l.languagePair.to}` === v)
                        .map((l) => l.category),
                    ),
                  );
                  const nextCategory = nextCategories[0] ?? "";
                  const nextLessons = lessons.filter(
                    (l) => `${l.languagePair.from}-${l.languagePair.to}` === v && l.category === nextCategory,
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
          <section className="rounded-3xl border border-blue-100 bg-white/90 p-6 shadow-sm backdrop-blur">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => {
                  const stat = categoryStats[cat] ?? { correct: 0, wrong: 0, completed: 0 };
                  return (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                        safeCategory === cat
                          ? "bg-blue-600 text-white shadow"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {cat}
                      <span className="ml-2 text-xs font-medium text-white/80">
                        {stat.correct}/{stat.wrong}
                      </span>
                    </button>
                  );
                })}
              </div>
              <div className="flex flex-wrap gap-2">
                {lessonsByCategory.map((l) => {
                  const stat = lessonStats[l.id] ?? { correct: 0, wrong: 0, completed: 0 };
                  return (
                    <button
                      key={l.id}
                      onClick={() => setLessonId(l.id)}
                      className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                        safeLessonId === l.id
                          ? "bg-emerald-100 text-emerald-800 ring-2 ring-emerald-200"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {l.title}{" "}
                      <span className="text-xs font-medium text-emerald-700">
                        ({stat.correct}/{stat.wrong}, {stat.completed}x)
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_0.45fr]">
              {activeLesson ? (
                <LessonTrainer
                  key={activeLesson.id}
                  lesson={activeLesson}
                  direction={direction}
                  onResult={(isCorrect) => updateStats(activeLesson, isCorrect)}
                  onLessonComplete={() => markLessonCompleted(activeLesson)}
                />
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-200 p-6 text-slate-500">
                  Keine Lektion verfuegbar.
                </div>
              )}

              <div className="space-y-3">
                <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                  <h3 className="text-sm font-semibold text-slate-800">Statistik</h3>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
                    <StatBadge label="Richtig" value={(lessonStats[safeLessonId]?.correct ?? 0).toString()} />
                    <StatBadge label="Falsch" value={(lessonStats[safeLessonId]?.wrong ?? 0).toString()} />
                    <StatBadge label="Abschluesse" value={(lessonStats[safeLessonId]?.completed ?? 0).toString()} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Kategorie-Statistik</h2>
              <div className="mt-3 grid grid-cols-1 gap-2 text-sm">
                {categories.map((cat) => {
                  const stat = categoryStats[cat] ?? { correct: 0, wrong: 0, completed: 0 };
                  return (
                    <div
                      key={cat}
                      className={`flex items-center justify-between rounded-xl border px-3 py-2 ${
                        safeCategory === cat ? "border-blue-200 bg-blue-50" : "border-slate-100 bg-slate-50"
                      }`}
                    >
                      <span className="font-semibold">{cat}</span>
                      <span className="text-xs text-slate-600">
                        {stat.correct} richtig / {stat.wrong} falsch / {stat.completed}x abgeschlossen
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-emerald-100 p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-emerald-900">Gesamt (Sprachpaar)</h2>
              <p className="mt-1 text-sm text-emerald-800">
                Richtig: {totalStats.correct} · Falsch: {totalStats.wrong} · Abgeschlossene Lektionen:{" "}
                {totalStats.completed}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">So funktioniert es</h2>
              <ol className="mt-3 space-y-2 text-sm text-slate-700">
                <li>1. Kategorie und Lektion waehlen.</li>
                <li>2. Richtung einstellen (Quelle ↔ Ziel).</li>
                <li>3. Woerter korrekt schreiben; richtige verschwinden bis Ende der Lektion.</li>
                <li>4. Bei Abschluss neu starten, um erneut zu ueben.</li>
              </ol>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Alle Woerter der Lektion</h2>
              <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
                {lessonWords.map((word) => (
                  <WordExerciseCard key={word.id} entry={word} direction={direction} />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

function LessonTrainer({
  lesson,
  direction,
  onResult,
  onLessonComplete,
}: {
  lesson: Lesson;
  direction: Direction;
  onResult: (isCorrect: boolean) => void;
  onLessonComplete: () => void;
}) {
  const orderedWords = useMemo(
    () => [...lesson.words].sort((a, b) => a.frequencyRank - b.frequencyRank),
    [lesson],
  );
  const [remainingIds, setRemainingIds] = useState<string[]>(orderedWords.map((w) => w.id));
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [completed, setCompleted] = useState(false);

  const currentWord =
    remainingIds.length > 0
      ? orderedWords.find((w) => w.id === remainingIds[0]) ?? orderedWords[0]
      : null;

  const isReverse = direction === "target-to-source";
  const cardFront = isReverse
    ? currentWord?.targets.map((t) => t.text).join(", ")
    : currentWord?.source;
  const cardBack = isReverse
    ? currentWord?.source
    : currentWord?.targets.map((t) => t.text).join(", ");

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (!currentWord) return;

    const expectedList = isReverse
      ? [normalize(currentWord.source)]
      : currentWord.targets.map((t) => normalize(t.text.split("/")[0] ?? t.text));

    const isCorrect = expectedList.some((expected) => normalize(answer) === expected);
    setFeedback(isCorrect ? "correct" : "wrong");
    onResult(isCorrect);

    if (isCorrect) {
      setRemainingIds((prev) => {
        const [, ...rest] = prev;
        if (rest.length === 0) {
          setCompleted(true);
          onLessonComplete();
        }
        return rest;
      });
      setAnswer("");
      setShowAnswer(false);
    } else {
      // Falsche Antwort: Wort ans Ende stellen, damit es spaeter erneut geuebt wird.
      setRemainingIds((prev) => {
        if (prev.length === 0) return prev;
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }
  };

  const resetLesson = () => {
    setRemainingIds(orderedWords.map((w) => w.id));
    setCompleted(false);
    setFeedback(null);
    setAnswer("");
    setShowAnswer(false);
  };

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">
            {isReverse ? "Ziel -> Quelle" : "Quelle -> Ziel"}
          </p>
          <h2 className="text-lg font-semibold text-slate-900">{lesson.title}</h2>
          <p className="text-sm text-slate-600">
            {remainingIds.length} von {orderedWords.length} Woertern uebrig
          </p>
        </div>
        <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          Kategorie: {lesson.category}
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
        {currentWord ? (
          <>
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-sm text-slate-500">{isReverse ? "Uebersetze nach Russisch" : "Uebersetze nach Deutsch"}</p>
                <p className="mt-1 text-2xl font-semibold text-slate-900">{cardFront}</p>
                {currentWord.translit && (
                  <p className="text-sm text-slate-600">Translit: {currentWord.translit}</p>
                )}
                {currentWord.usage && <p className="text-sm text-slate-600">{currentWord.usage}</p>}
              </div>
              <div className="text-xs font-medium text-slate-600">#{currentWord.frequencyRank}</div>
            </div>

            {showAnswer && (
              <div className="mt-3 rounded-lg bg-white px-3 py-2 text-sm text-slate-800 shadow-inner">
                <p className="font-semibold text-emerald-700">{cardBack}</p>
                {currentWord.targets.some((t) => t.note) && (
                  <ul className="mt-1 space-y-1 text-slate-600">
                    {currentWord.targets.map(
                      (t) => t.note && (
                        <li key={t.text}>
                          {t.text}: {t.note}
                        </li>
                      ),
                    )}
                  </ul>
                )}
                {currentWord.forms && (
                  <div className="mt-1 text-slate-600">
                    {currentWord.forms.irregular && <div>Unregelmaessig: {currentWord.forms.irregular}</div>}
                    {currentWord.forms.missing && currentWord.forms.missing.length > 0 && (
                      <div>Nicht ueblich: {currentWord.forms.missing.join(", ")}</div>
                    )}
                  </div>
                )}
              </div>
            )}
          </>
        ) : completed ? (
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-lg font-semibold text-emerald-700">Lektion abgeschlossen!</p>
              <p className="text-sm text-slate-600">Starte erneut, um alles noch einmal zu ueben.</p>
            </div>
            <button
              onClick={resetLesson}
              className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
            >
              Neu starten
            </button>
          </div>
        ) : (
          <p className="text-slate-500">Keine Woerter in dieser Lektion.</p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <label className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-500">
          Deine Antwort
          {feedback && (
            <span
              className={`rounded-full px-3 py-1 text-xs ${
                feedback === "correct" ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"
              }`}
            >
              {feedback === "correct" ? "Richtig" : "Falsch"}
            </span>
          )}
        </label>
        <input
          value={answer}
          onChange={(evt) => setAnswer(evt.target.value)}
          placeholder={isReverse ? "Russisch eingeben..." : "Deutsch eingeben..."}
          className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
          autoComplete="off"
          disabled={!currentWord}
        />
        <div className="flex gap-2">
          <button
            type="submit"
            className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
            disabled={!currentWord}
          >
            Pruefen
          </button>
          <button
            type="button"
            onClick={() => setShowAnswer((prev) => !prev)}
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            disabled={!currentWord}
          >
            {showAnswer ? "Verbergen" : "Zeigen"}
          </button>
        </div>
      </form>
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
      <p className="text-[11px] uppercase tracking-wide text-slate-500">{label}</p>
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
      <span className="uppercase tracking-wide text-[11px] text-blue-100">{label}</span>
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
            {entry.translit && <span className="text-slate-500">({entry.translit})</span>}
          </p>
          <p className="text-sm text-slate-700">{entry.targets.map((t) => t.text).join(", ")}</p>
          {entry.targets.some((t) => t.note) && (
            <p className="text-xs text-slate-500">
              {entry.targets
                .filter((t) => t.note)
                .map((t) => `${t.text}: ${t.note}`)
                .join(" • ")}
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

function WordExerciseCard({ entry, direction }: { entry: WordEntry; direction: Direction }) {
  const isReverse = direction === "target-to-source";
  const prompt = isReverse ? "Uebersetze nach Russisch" : "Uebersetze nach Deutsch";
  const front = isReverse ? entry.targets.map((t) => t.text).join(", ") : entry.source;
  const inputPlaceholder = isReverse ? "Russisch eingeben..." : "Deutsch eingeben...";
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{prompt}</p>
      <div className="mt-1 flex items-start justify-between gap-2">
        <div>
          <p className="text-xl font-semibold text-slate-900">{front}</p>
          {entry.translit && <p className="text-sm text-slate-600">Translit: {entry.translit}</p>}
        </div>
        <div className="text-xs font-semibold text-slate-600">#{entry.frequencyRank}</div>
      </div>
      <label className="mt-3 block text-xs font-semibold uppercase tracking-wide text-slate-500">
        Deine Antwort
      </label>
      <input
        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
        placeholder={inputPlaceholder}
        aria-label="Antwortfeld Vorschau"
        disabled
      />
      <div className="mt-2 flex gap-2">
        <button className="flex-1 rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white shadow-sm" disabled>
          Pruefen
        </button>
        <button className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700" disabled>
          Zeigen
        </button>
      </div>
    </div>
  );
}
