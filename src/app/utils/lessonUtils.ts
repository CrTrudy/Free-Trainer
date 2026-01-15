import type { Lesson, Tense } from "../../data/vocab";
import type { Stat } from "../types/trainer";

type Word = Lesson["words"][number];

export const normalize = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[.,;:!?]/g, "");

// Build stable key for pairing source/target languages.
export const buildPairKey = (lesson: Lesson) =>
  `${lesson.languagePair.from}-${lesson.languagePair.to}`;

// Zeroed stats object used as a safe default.
export const createEmptyStat = (): Stat => ({
  correct: 0,
  wrong: 0,
  completed: 0,
});

// Sum two stat objects.
export const addStats = (left: Stat, right: Stat): Stat => ({
  correct: left.correct + right.correct,
  wrong: left.wrong + right.wrong,
  completed: left.completed + right.completed,
});

// Use the first target before optional "/" alternates.
export const getPrimaryTargets = (word: Word) =>
  word.targets.map((t) => t.text.split("/")[0] ?? t.text);

// Join all target variants for display.
export const getTargetsText = (word: Word) =>
  word.targets.map((t) => t.text).join(", ");

// Fetch conjugations for the selected tense when available.
export const getConjugations = (word: Word, selectedTense?: Tense) =>
  selectedTense ? word.forms?.conjugations?.[selectedTense] : undefined;

// Estimate card width from text length with clamped bounds.
export const estimateCardWidth = (text: string) =>
  Math.min(Math.max(text.length * 9 + 60, 200), 420);

// Estimate input width with a max clamp based on layout.
export const estimateInputWidth = (text: string, maxWidth: number) =>
  Math.min(Math.max(text.length * 9 + 80, 200), maxWidth);

// Build normalized expected answers depending on direction and conjugations.
export const getExpectedAnswers = (
  word: Word,
  isReverse: boolean,
  selectedTense?: Tense
) => {
  const conjugations = getConjugations(word, selectedTense);
  if (word.partOfSpeech === "verb" && selectedTense && conjugations) {
    return {
      expectedList: conjugations.map((form) => normalize(form)),
      isVerbWithConj: true,
    };
  }
  const expectedList = isReverse
    ? [normalize(word.source)]
    : getPrimaryTargets(word).map((entry) => normalize(entry));
  return { expectedList, isVerbWithConj: false };
};
