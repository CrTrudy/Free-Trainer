"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import type { Lesson, Tense } from "../../data/vocab";
import type { Direction } from "../types/trainer";
import {
  estimateCardWidth,
  estimateInputWidth,
  getConjugations,
  getExpectedAnswers,
  getPrimaryTargets,
  getTargetsText,
  normalize,
} from "../utils/lessonUtils";

export function LessonTrainer({
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
  // Interactive trainer: select lessons, answer prompts, and track progress.
  // Sort words once per lesson to keep stable frequency order.
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
    if (activeWordId && !showAnswer && inputRef.current) {
      inputRef.current.focus();
    }
  }, [activeWordId, showAnswer]);

  const isReverse = direction === "target-to-source";

  const activeWord =
    activeLesson?.words.find((w) => w.id === activeWordId) ?? null;

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (!activeLesson || !activeWord) return;
    const { expectedList, isVerbWithConj } = getExpectedAnswers(
      activeWord,
      isReverse,
      selectedTense
    );

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
        <div>
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
              const targetsText = getTargetsText(word);
              const front = isReverse ? targetsText : word.source;
              const back = isReverse ? word.source : targetsText;
              const longestSide = front.length >= back.length ? front : back;
              const estimatedWidth = estimateCardWidth(longestSide);
              const baseExpected = isReverse
                ? word.source
                : getPrimaryTargets(word).join(", ");
              const inputMax = Math.max(160, estimatedWidth - 24);
              const estimatedInputWidth = estimateInputWidth(
                baseExpected,
                inputMax
              );
              const clampedInputWidth = Math.max(
                160,
                Math.min(estimatedInputWidth, inputMax)
              );
              const conjugations = getConjugations(word, selectedTense);
              const conjugationWidths = conjugations
                ? conjugations.map((form) =>
                    Math.max(
                      160,
                      Math.min(estimateInputWidth(form, inputMax), inputMax)
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
                    conjugations
                  ) {
                    setConjAnswers((prev) => ({
                      ...prev,
                      [word.id]: Array(conjugations.length).fill(""),
                    }));
                  }
                }
              };
              const handleRight = () => {
                setActiveWordId(word.id);
                setShowAnswer(true);
                setFeedback(null);
                const isVerbWithConj =
                  word.partOfSpeech === "verb" && selectedTense && conjugations;
                if (isVerbWithConj) {
                  setConjAnswers((prev) => ({
                    ...prev,
                    [word.id]: [...(conjugations ?? [])],
                  }));
                  setAnswer("");
                } else {
                  const expected = isReverse
                    ? word.source
                    : getPrimaryTargets(word).join(", ");
                  setAnswer(expected);
                  setConjAnswers((prev) => ({ ...prev, [word.id]: [] }));
                }
                setPrefilled(true);
              };
              return (
                <div
                  key={word.id}
                  className={`w-auto rounded-xl bg-white px-4 py-3 shadow-sm ${
                    isActive
                      ? "ring-2 ring-blue-200 bg-blue-50/60"
                      : "bg-white"
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
                            conjugations && (
                              <div className="mt-1 text-sm text-slate-700">
                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                  {selectedTense === "present"
                                    ? "Gegenwart"
                                    : selectedTense === "past"
                                    ? "Vergangenheit"
                                    : "Zukunft"}
                                </p>
                                <ul className="mt-1 space-y-1">
                                  {conjugations.map((form) => (
                                    <li key={form}>{form}</li>
                                  ))}
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
                      conjugations ? (
                        <div className="flex w-full flex-col items-start gap-2">
                          {conjugations.map((_, idx) => {
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
                                    width: `${
                                      conjugationWidths[idx] ??
                                      clampedInputWidth
                                    }px`,
                                    maxWidth: "100%",
                                  }}
                                  autoComplete="off"
                                  onClick={(e) => e.stopPropagation()}
                                  onDoubleClick={(e) => e.stopPropagation()}
                                  ref={isActive && idx === 0 ? inputRef : null}
                                />
                              </label>
                            );
                          })}
                        </div>
                      ) : (
                        <>
                          {prefilled && (
                            <div className="text-xs text-slate-500">
                              Vorgabe eingetragen - zum Ueben anpassen oder
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
                            style={{
                              width: `${clampedInputWidth}px`,
                              maxWidth: "100%",
                            }}
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
