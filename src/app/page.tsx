"use client";

import { FormEvent, useMemo, useState } from "react";
import { lessons, type Lesson, type WordEntry } from "../data/vocab";

type Direction = "source-to-target" | "target-to-source";

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

  // Fallbacks wenn sich Pair ändert: keine setState-Aufrufe im Effekt nötig.
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
  const [answer, setAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [stats, setStats] = useState({ correct: 0, wrong: 0, streak: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = useMemo(() => {
    if (!activeLesson) return [];
    return [...activeLesson.words].sort((a, b) => a.frequencyRank - b.frequencyRank);
  }, [activeLesson]);

  // Kategorie/Lektion werden direkt in den Handlern gewechselt; keine Effekte nötig.

  const currentCard = cards[currentIndex % (cards.length || 1)];

  const isReverse = direction === "target-to-source";
  const cardFront = isReverse
    ? currentCard?.targets.map((t) => t.text).join(", ")
    : currentCard?.source;
  const cardBack = isReverse
    ? currentCard?.source
    : currentCard?.targets.map((t) => t.text).join(", ");

  const translit = currentCard?.translit;

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (!currentCard) return;

    const expectedList = isReverse
      ? [normalize(currentCard.source)]
      : currentCard.targets.map((t) => normalize(t.text.split("/")[0] ?? t.text));

    const isCorrect = expectedList.some((expected) => normalize(answer) === expected);

    setFeedback(isCorrect ? "correct" : "wrong");
    setStats((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      wrong: prev.wrong + (isCorrect ? 0 : 1),
      streak: isCorrect ? prev.streak + 1 : 0,
    }));

    setTimeout(() => {
      setShowAnswer(false);
      setAnswer("");
      setFeedback(null);
      setCurrentIndex((idx) => (cards.length > 0 ? (idx + 1) % cards.length : 0));
    }, isCorrect ? 500 : 800);
  };

  const changeLesson = (nextLesson: Lesson) => {
    setLessonId(nextLesson.id);
    setCurrentIndex(0);
    setFeedback(null);
    setAnswer("");
    setShowAnswer(false);
  };

  const changeCategory = (nextCategory: string) => {
    setCategory(nextCategory);
    const firstLesson = lessonsForPair.find((l) => l.category === nextCategory);
    if (firstLesson) {
      changeLesson(firstLesson);
    } else {
      setLessonId("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-100 text-slate-900">
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:px-8">
        <header className="rounded-3xl bg-gradient-to-r from-blue-600 via-sky-600 to-blue-500 px-6 py-8 text-white shadow-lg">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] opacity-80">Vokabel Trainer</p>
              <h1 className="mt-2 text-3xl font-semibold md:text-4xl">
                Russisch schreiben & verstehen
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-blue-100">
                Lektionen mit 10–15 Wörtern, sortiert nach Wichtigkeit und Häufigkeit. Mit
                kyrillischer Schrift, Mehrdeutungen, Konjugationshinweisen und Hinweisen zu unüblichen
                Formen.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <SelectPill
                label="Sprachpaar"
                value={pairKey}
                onChange={(v) => {
                  // Reset abhängig vom neuen Sprachpaar, ohne Effekt-Reset.
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
                  setCurrentIndex(0);
                  setFeedback(null);
                  setAnswer("");
                  setShowAnswer(false);
                }}
                options={languagePairs.map((pk) => ({
                  label: pk.toUpperCase(),
                  value: pk,
                }))}
              />
              <SelectPill
                label="Richtung"
                value={direction}
                onChange={(value) => {
                  setDirection(value as Direction);
                  setFeedback(null);
                  setAnswer("");
                  setShowAnswer(false);
                }}
                options={[
                  { label: "Quelle → Ziel", value: "source-to-target" },
                  { label: "Ziel → Quelle", value: "target-to-source" },
                ]}
              />
            </div>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-3xl border border-blue-100 bg-white/90 p-6 shadow-sm backdrop-blur">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => changeCategory(cat)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      category === cat
                        ? "bg-blue-600 text-white shadow"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {lessonsByCategory.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => changeLesson(l)}
                    className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                      lessonId === l.id
                        ? "bg-emerald-100 text-emerald-800 ring-2 ring-emerald-200"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {l.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-[1fr_0.45fr] md:items-start">
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-6 text-white shadow-xl">
                <div className="flex items-center justify-between text-xs uppercase tracking-wide text-blue-200">
                  <span>
                    {isReverse ? "Antwort auf Deutsch → Russisch" : "Antwort auf Russisch → Deutsch"}
                  </span>
                  <span>Häufigkeit #{currentCard?.frequencyRank ?? "–"}</span>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-3xl font-semibold leading-tight">{cardFront || "Keine Karte"}</p>
                  {translit && <p className="text-sm text-blue-200">Translit: {translit}</p>}
                  {currentCard?.usage && <p className="text-sm text-blue-100">{currentCard.usage}</p>}
                </div>

                {showAnswer && currentCard && (
                  <div className="mt-5 rounded-xl bg-white/10 p-4 backdrop-blur">
                    <p className="text-xs uppercase tracking-wide text-blue-200">Lösung & Hinweise</p>
                    <p className="mt-1 text-xl font-semibold text-emerald-200">{cardBack}</p>
                    {currentCard.targets.some((t) => t.note) && (
                      <ul className="mt-2 space-y-1 text-sm text-blue-100">
                        {currentCard.targets.map(
                          (t) => t.note && (
                            <li key={t.text}>
                              • {t.text}: {t.note}
                            </li>
                          ),
                        )}
                      </ul>
                    )}
                    {currentCard.forms && (
                      <div className="mt-2 text-sm text-blue-100">
                        {currentCard.forms.irregular && (
                          <div>Unregelmäßig: {currentCard.forms.irregular}</div>
                        )}
                        {currentCard.forms.missing && currentCard.forms.missing.length > 0 && (
                          <div>Nicht üblich: {currentCard.forms.missing.join(", ")}</div>
                        )}
                      </div>
                    )}
                    {currentCard.examples && (
                      <div className="mt-2 text-sm text-blue-100">
                        Beispiel:
                        <ul className="list-disc pl-4">
                          {currentCard.examples.map((ex) => (
                            <li key={ex}>{ex}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                  <label className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Deine Antwort
                    {feedback && (
                      <span
                        className={`rounded-full px-3 py-1 text-xs ${
                          feedback === "correct"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-rose-100 text-rose-700"
                        }`}
                      >
                        {feedback === "correct" ? "Richtig" : "Falsch"}
                      </span>
                    )}
                  </label>
                  <input
                    value={answer}
                    onChange={(evt) => setAnswer(evt.target.value)}
                    placeholder={isReverse ? "Russisch eingeben…" : "Deutsch eingeben…"}
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-base shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                    autoComplete="off"
                  />
                  <div className="mt-3 flex gap-2">
                    <button
                      type="submit"
                      className="flex-1 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                      disabled={!currentCard}
                    >
                      Prüfen
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAnswer((prev) => !prev)}
                      className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                    >
                      {showAnswer ? "Verbergen" : "Zeigen"}
                    </button>
                  </div>
                </form>

                <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                  <h3 className="text-sm font-semibold text-slate-800">Statistik</h3>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <StatBadge label="Richtig" value={stats.correct} tone="success" />
                    <StatBadge label="Falsch" value={stats.wrong} tone="warn" />
                    <StatBadge label="Streak" value={stats.streak} tone="info" />
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                  <h3 className="text-sm font-semibold text-slate-800">
                    Lektion ({cards.length} Wörter, 10–15 empfohlen)
                  </h3>
                  <div className="mt-3 grid max-h-56 grid-cols-1 gap-2 overflow-y-auto">
                    {cards.map((word) => (
                      <LessonWord key={word.id} entry={word} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-emerald-100 p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-emerald-900">Übungstypen</h2>
              <ul className="mt-3 space-y-2 text-sm text-emerald-800">
                <li>• Schreibübung mit Klartext und Transkription.</li>
                <li>• Hinweise bei Mehrdeutigkeiten zwischen Russisch und Deutsch.</li>
                <li>• Konjugationshinweise, wenn Formen fehlen oder unüblich sind.</li>
                <li>• Frequenzbasierte Sortierung je Kategorie/Lektion.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">So nutzt du es</h2>
              <ol className="mt-3 space-y-2 text-sm text-slate-700">
                <li>1. Wähle Kategorie & Lektion (10–15 Wörter).</li>
                <li>2. Stelle die Richtung ein (Quelle ↔ Ziel).</li>
                <li>3. Schreibe die Übersetzung, prüfe, wiederhole.</li>
                <li>4. Achte auf Hinweise zu Bedeutungen und Formen.</li>
              </ol>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

type StatBadgeProps = {
  label: string;
  value: number;
  tone: "success" | "warn" | "info";
};

function StatBadge({ label, value, tone }: StatBadgeProps) {
  const tones: Record<StatBadgeProps["tone"], string> = {
    success: "bg-emerald-50 text-emerald-700",
    warn: "bg-rose-50 text-rose-700",
    info: "bg-blue-50 text-blue-700",
  };

  return (
    <div className={`rounded-xl px-3 py-2 text-center text-sm font-semibold shadow-sm ${tones[tone]}`}>
      <p className="text-[11px] uppercase tracking-wide">{label}</p>
      <p className="text-xl">{value}</p>
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
    <div className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-semibold text-slate-900">
            {entry.source}{" "}
            <span className="text-slate-500">{entry.translit && `(${entry.translit})`}</span>
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
