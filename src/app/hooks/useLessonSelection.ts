"use client";

import { useEffect, useMemo, useState } from "react";
import type { Lesson } from "../../data/vocab";
import { buildPairKey } from "../utils/lessonUtils";

export function useLessonSelection(allLessons: Lesson[]) {
  // Keep pair/category/lesson state consistent as selections change.
  const languagePairs = useMemo(
    () => Array.from(new Set(allLessons.map(buildPairKey))),
    [allLessons]
  );
  const [pairKey, setPairKey] = useState(languagePairs[0] ?? "ru-de");
  const lessonsForPair = useMemo(
    () => allLessons.filter((l) => buildPairKey(l) === pairKey),
    [allLessons, pairKey]
  );
  const categories = useMemo(
    () => Array.from(new Set(lessonsForPair.map((l) => l.category))),
    [lessonsForPair]
  );
  const [category, setCategory] = useState<string>(categories[0] ?? "");
  const lessonsByCategory = useMemo(
    () => lessonsForPair.filter((l) => l.category === category),
    [lessonsForPair, category]
  );
  const [lessonId, setLessonId] = useState<string>(
    lessonsByCategory[0]?.id ?? ""
  );

  useEffect(() => {
    if (!categories.includes(category)) {
      setCategory(categories[0] ?? "");
    }
  }, [categories, category]);

  useEffect(() => {
    if (!lessonsByCategory.some((l) => l.id === lessonId)) {
      setLessonId(lessonsByCategory[0]?.id ?? "");
    }
  }, [lessonsByCategory, lessonId]);

  const safeCategory = categories.includes(category)
    ? category
    : categories[0] ?? "";
  const safeLessonsByCategory = useMemo(
    () => lessonsForPair.filter((l) => l.category === safeCategory),
    [lessonsForPair, safeCategory]
  );
  const safeLessonId = safeLessonsByCategory.some((l) => l.id === lessonId)
    ? lessonId
    : safeLessonsByCategory[0]?.id ?? "";
  const activeLesson =
    safeLessonsByCategory.find((l) => l.id === safeLessonId) ??
    safeLessonsByCategory[0] ??
    lessonsForPair[0];

  const selectPair = (nextPairKey: string) => {
    const nextLessons = allLessons.filter(
      (l) => buildPairKey(l) === nextPairKey
    );
    const nextCategories = Array.from(
      new Set(nextLessons.map((lesson) => lesson.category))
    );
    const nextCategory = nextCategories[0] ?? "";
    const nextLessonsByCategory = nextLessons.filter(
      (lesson) => lesson.category === nextCategory
    );
    setPairKey(nextPairKey);
    setCategory(nextCategory);
    setLessonId(nextLessonsByCategory[0]?.id ?? "");
  };

  const selectCategory = (nextCategory: string) => {
    setCategory(nextCategory);
    const nextLessonsByCategory = lessonsForPair.filter(
      (lesson) => lesson.category === nextCategory
    );
    setLessonId(nextLessonsByCategory[0]?.id ?? "");
  };

  return {
    languagePairs,
    pairKey,
    selectPair,
    lessonsForPair,
    categories,
    safeCategory,
    selectCategory,
    lessonsByCategory: safeLessonsByCategory,
    safeLessonId,
    setLessonId,
    activeLesson,
  };
}
