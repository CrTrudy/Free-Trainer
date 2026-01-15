"use client";

import { useEffect, useState } from "react";
import { lessons, type Tense } from "../data/vocab";
import { LessonTrainer } from "./components/LessonTrainer";
import { SelectPill } from "./components/SelectPill";
import { StatBadge } from "./components/StatBadge";
import { useLessonSelection } from "./hooks/useLessonSelection";
import { useLessonStats } from "./hooks/useLessonStats";
import type { Direction, Stat } from "./types/trainer";
import { createEmptyStat } from "./utils/lessonUtils";


export default function Home() {
  const {
    languagePairs,
    pairKey,
    selectPair,
    lessonsForPair,
    categories,
    safeCategory,
    selectCategory,
    lessonsByCategory,
    safeLessonId,
    setLessonId,
    activeLesson,
  } = useLessonSelection(lessons);
  const [direction, setDirection] = useState<Direction>("source-to-target");
  const [tense, setTense] = useState<Tense>("present");
  const [lessonStats, setLessonStats] = useState<Record<string, Stat>>({});
  const [statsReady, setStatsReady] = useState(false);
  const statsStorageKey = `lessonStats:${pairKey}`;

  useEffect(() => {
    setStatsReady(false);
    if (typeof window === "undefined") return;
    try {
      const raw = localStorage.getItem(statsStorageKey);
      setLessonStats(raw ? (JSON.parse(raw) as Record<string, Stat>) : {});
    } catch {
      setLessonStats({});
    } finally {
      setStatsReady(true);
    }
  }, [statsStorageKey]);

  useEffect(() => {
    if (!statsReady || typeof window === "undefined") return;
    try {
      localStorage.setItem(statsStorageKey, JSON.stringify(lessonStats));
    } catch {
      // ignore storage failures
    }
  }, [lessonStats, statsReady, statsStorageKey]);

  const { categoryStats, totalStats } = useLessonStats(
    lessonsForPair,
    lessonStats
  );

  const activeCategoryStat =
    categoryStats[safeCategory] ?? createEmptyStat();

  const updateStats = (
    lessonKey: string,
    isCorrect: boolean,
    isCompleted: boolean
  ) => {
    setLessonStats((prev) => {
      const current = prev[lessonKey] ?? createEmptyStat();
      const next: Stat = {
        correct: current.correct + (isCorrect ? 1 : 0),
        wrong: current.wrong + (isCorrect ? 0 : 1),
        completed: current.completed + (isCompleted ? 1 : 0),
      };
      return { ...prev, [lessonKey]: next };
    });
  };

  const handleClearStats = () => {
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem(statsStorageKey);
      } catch {
        // ignore storage failures
      }
    }
    setLessonStats({});
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
                onChange={selectPair}
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
                    const stat = categoryStats[cat] ?? createEmptyStat();
                    return (
                      <button
                        key={cat}
                        onClick={() => selectCategory(cat)}
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
                  key={safeLessonId}
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
                  const stat = categoryStats[cat] ?? createEmptyStat();
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
              <button
                type="button"
                onClick={handleClearStats}
                className="mt-3 rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-xs font-semibold text-emerald-800 shadow-sm transition hover:border-emerald-300 hover:bg-white"
              >
                Statistik loeschen
              </button>
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

