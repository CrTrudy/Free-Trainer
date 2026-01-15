"use client";

import { useMemo } from "react";
import type { Lesson } from "../../data/vocab";
import type { Stat } from "../types/trainer";
import { addStats, createEmptyStat } from "../utils/lessonUtils";

export function useLessonStats(
  lessonsForPair: Lesson[],
  lessonStats: Record<string, Stat>
) {
  // Aggregate stats per category and across the current language pair.
  const categoryStats = useMemo(() => {
    const map: Record<string, Stat> = {};
    lessonsForPair.forEach((lesson) => {
      const stat = lessonStats[lesson.id] ?? createEmptyStat();
      const prev = map[lesson.category] ?? createEmptyStat();
      map[lesson.category] = addStats(prev, stat);
    });
    return map;
  }, [lessonStats, lessonsForPair]);

  const totalStats = useMemo(() => {
    return lessonsForPair.reduce(
      (acc, lesson) => {
        const stat = lessonStats[lesson.id] ?? createEmptyStat();
        return addStats(acc, stat);
      },
      createEmptyStat()
    );
  }, [lessonStats, lessonsForPair]);

  return { categoryStats, totalStats };
}
