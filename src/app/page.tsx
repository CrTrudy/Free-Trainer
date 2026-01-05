"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type Card = {
  id: number;
  front: string; // z. B. Englisch
  back: string; // z. B. Deutsch
  hint?: string;
  example?: string;
};

const starterCards: Card[] = [
  {
    id: 1,
    front: "to improve",
    back: "verbessern",
    hint: "Verb",
    example: "I want to improve my German.",
  },
  {
    id: 2,
    front: "challenge",
    back: "die Herausforderung",
    hint: "Nomen",
    example: "This exercise is a real challenge.",
  },
  {
    id: 3,
    front: "reliable",
    back: "zuverlässig",
    hint: "Adjektiv",
    example: "She is a reliable teammate.",
  },
  {
    id: 4,
    front: "curious",
    back: "neugierig",
    example: "He is curious about languages.",
  },
  {
    id: 5,
    front: "approach",
    back: "der Ansatz",
    example: "We tried a different approach.",
  },
  {
    id: 6,
    front: "to guess",
    back: "raten",
    example: "Can you guess the answer?",
  },
  {
    id: 7,
    front: "weekly",
    back: "wöchentlich",
    hint: "Adverb",
    example: "We meet weekly to practice.",
  },
  {
    id: 8,
    front: "achievement",
    back: "die Leistung",
  },
  {
    id: 9,
    front: "to schedule",
    back: "planen / terminieren",
  },
  {
    id: 10,
    front: "pattern",
    back: "das Muster",
    example: "Look for the pattern in the sentences.",
  },
  {
    id: 11,
    front: "confident",
    back: "selbstbewusst",
  },
  {
    id: 12,
    front: "to review",
    back: "wiederholen / prüfen",
  },
];

const normalize = (value: string) => value.trim().toLowerCase();

export default function Home() {
  const [cards, setCards] = useState<Card[]>(starterCards);
  const [currentId, setCurrentId] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [stats, setStats] = useState({ correct: 0, wrong: 0, streak: 0 });
  const [newFront, setNewFront] = useState("");
  const [newBack, setNewBack] = useState("");
  const [newHint, setNewHint] = useState("");

  const currentCard = useMemo(() => {
    if (cards.length === 0) return null;
    return cards[currentId % cards.length];
  }, [cards, currentId]);

  useEffect(() => {
    if (currentId >= cards.length && cards.length > 0) {
      setCurrentId(0);
    }
  }, [cards.length, currentId]);

  const pickNextCard = () => {
    if (cards.length === 0) return;
    const nextIndex = Math.floor(Math.random() * cards.length);
    setCurrentId(nextIndex);
    setShowAnswer(false);
    setFeedback(null);
    setAnswer("");
  };

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (!currentCard) return;

    const expected = reverse ? currentCard.front : currentCard.back;
    const isCorrect =
      normalize(answer) === normalize(expected) ||
      normalize(answer) === normalize(expected.split("/")[0] ?? "");

    setFeedback(isCorrect ? "correct" : "wrong");
    setStats((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      wrong: prev.wrong + (isCorrect ? 0 : 1),
      streak: isCorrect ? prev.streak + 1 : 0,
    }));

    setTimeout(() => pickNextCard(), 500);
  };

  const handleAddCard = () => {
    if (!newFront.trim() || !newBack.trim()) return;
    setCards((prev) => [
      ...prev,
      {
        id: Date.now(),
        front: newFront.trim(),
        back: newBack.trim(),
        hint: newHint.trim() || undefined,
      },
    ]);
    setNewFront("");
    setNewBack("");
    setNewHint("");
    setCurrentId(cards.length); // springe zum neuen Eintrag
  };

  const cardFront = reverse ? currentCard?.back : currentCard?.front;
  const cardBack = reverse ? currentCard?.front : currentCard?.back;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900">
      <main className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-12">
        <header className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-wide text-blue-600">
            Vokabel Trainer
          </p>
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h1 className="text-3xl font-semibold sm:text-4xl">
              Üben, merken, wiederholen
            </h1>
            <div className="flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800">
              {reverse ? "Deutsch → Englisch" : "Englisch → Deutsch"}
              <button
                onClick={() => {
                  setReverse((prev) => !prev);
                  setFeedback(null);
                  setShowAnswer(false);
                  setAnswer("");
                }}
                className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm transition hover:shadow"
              >
                Richtung wechseln
              </button>
            </div>
          </div>
          <p className="text-slate-600">
            Trainiere mit den Beispieldaten oder füge eigene Vokabeln hinzu.
            Alles läuft komplett statisch – perfekt für GitHub Pages.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3 rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-sm backdrop-blur">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-lg font-semibold text-slate-900">
                Aktuelle Karte
              </h2>
              <button
                onClick={() => pickNextCard()}
                className="text-sm font-medium text-blue-700 hover:text-blue-900"
              >
                Nächste Karte
              </button>
            </div>

            <div className="mt-4 rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-sky-50 p-6 shadow-inner">
              {currentCard ? (
                <>
                  <p className="text-sm text-slate-500">
                    {reverse ? "Du siehst: Deutsch" : "Du siehst: Englisch"}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">
                    {cardFront}
                  </p>
                  {currentCard.hint && (
                    <p className="mt-1 text-sm text-slate-600">
                      Hinweis: {currentCard.hint}
                    </p>
                  )}
                  {showAnswer && (
                    <div className="mt-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Lösung
                      </p>
                      <p className="text-lg font-semibold text-emerald-700">
                        {cardBack}
                      </p>
                      {currentCard.example && (
                        <p className="mt-2 text-sm text-slate-600">
                          Beispiel: {currentCard.example}
                        </p>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <p className="text-slate-500">
                  Noch keine Vokabeln. Füge unten eigene Karten hinzu.
                </p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <label className="flex items-center justify-between text-sm font-medium text-slate-700">
                Deine Antwort ({reverse ? "Englisch" : "Deutsch"})
                {feedback && (
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      feedback === "correct"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-rose-100 text-rose-700"
                    }`}
                  >
                    {feedback === "correct" ? "Richtig" : "Falsch"}
                  </span>
                )}
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  value={answer}
                  onChange={(evt) => setAnswer(evt.target.value)}
                  className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-base shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  placeholder="Übersetzung eingeben…"
                  autoComplete="off"
                />
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setShowAnswer((prev) => !prev)}
                    className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:text-blue-800"
                  >
                    {showAnswer ? "Verbergen" : "Zeigen"}
                  </button>
                  <button
                    type="submit"
                    className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                    disabled={!currentCard}
                  >
                    Prüfen
                  </button>
                </div>
              </div>
            </form>
          </div>

          <aside className="lg:col-span-2 flex flex-col gap-6">
            <div className="rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold text-slate-900">Statistik</h2>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <StatBadge label="Richtig" value={stats.correct} tone="success" />
                <StatBadge label="Falsch" value={stats.wrong} tone="warn" />
                <StatBadge label="Streak" value={stats.streak} tone="info" />
              </div>
              <div className="mt-4 text-sm text-slate-600">
                Bei falschen Antworten startet die Serie wieder bei 0.
              </div>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold text-slate-900">
                Eigene Vokabeln hinzufügen
              </h2>
              <div className="mt-4 space-y-3">
                <input
                  value={newFront}
                  onChange={(evt) => setNewFront(evt.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  placeholder="Ausgangssprache (z. B. Englisch)"
                />
                <input
                  value={newBack}
                  onChange={(evt) => setNewBack(evt.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  placeholder="Übersetzung (z. B. Deutsch)"
                />
                <input
                  value={newHint}
                  onChange={(evt) => setNewHint(evt.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  placeholder="Optionaler Hinweis oder Kategorie"
                />
                <button
                  onClick={handleAddCard}
                  className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                >
                  Vokabel speichern
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold text-slate-900">
                Satz der aktuell geladenen Vokabeln
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Du kannst die Richtung wechseln oder einzelne Karten überspringen.
                Alles bleibt lokal im Browser, es wird nichts gespeichert.
              </p>
              <div className="mt-4 grid max-h-64 grid-cols-1 gap-2 overflow-y-auto rounded-xl border border-slate-100 p-3">
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className="flex items-start justify-between rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-800"
                  >
                    <div>
                      <p className="font-semibold">
                        {card.front}{" "}
                        <span className="text-slate-500">→ {card.back}</span>
                      </p>
                      {card.hint && (
                        <p className="text-xs text-slate-500">{card.hint}</p>
                      )}
                    </div>
                    <button
                      onClick={() => {
                        setCards((prev) => prev.filter((c) => c.id !== card.id));
                        if (cards.length === 1) {
                          setCurrentId(0);
                          setFeedback(null);
                          setAnswer("");
                          setShowAnswer(false);
                        }
                      }}
                      className="rounded-full px-2 py-1 text-xs font-semibold text-slate-500 hover:bg-slate-200"
                      aria-label="Karte löschen"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>
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
    <div className={`rounded-2xl px-4 py-3 text-center shadow-sm ${tones[tone]}`}>
      <p className="text-xs uppercase tracking-wide">{label}</p>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
}
