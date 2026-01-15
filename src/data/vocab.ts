export type LanguageCode = "ru" | "de" | "en";
export type Tense = "present" | "past" | "future";

export type WordEntry = {
  id: string;
  source: string; // Russisch (Kyrillisch) als \uXXXX
  translit?: string;
  targets: { text: string; note?: string }[];
  partOfSpeech: "noun" | "verb" | "adj" | "adv" | "phrase";
  category: string;
  frequencyRank: number;
  usage?: string;
  examples?: string[];
  forms?: {
    missing?: string[];
    irregular?: string;
    conjugations?: Partial<Record<Tense, string[]>>;
  };
};

export type Lesson = {
  id: string;
  title: string;
  languagePair: { from: LanguageCode; to: LanguageCode };
  category: string;
  words: WordEntry[];
};

// Hinweise:
// - Kyrillisch ist als Unicode-Escape hinterlegt, um Encoding-Probleme zu vermeiden.
// - Verben enthalten Konjugationen je Zeitform, nur gebraeuchliche Formen.

export const lessons: Lesson[] = [
  {
    id: "ru-de-alltag-a1-b1-nomen-1",
    title: "Alltag Nomen - Sache & Arbeit 1",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-1-1",
        source: "\u0432\u0435\u0449\u044c",
        targets: [
          { text: "Sache" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 1,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-1-2",
        source: "\u0440\u0430\u0431\u043e\u0442\u0430",
        targets: [
          { text: "Arbeit" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 2,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-1-3",
        source: "\u0434\u0435\u043d\u044c\u0433\u0438",
        targets: [
          { text: "Geld" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 3,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-1-4",
        source: "\u043f\u0440\u0438\u043c\u0435\u0440",
        targets: [
          { text: "Beispiel" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 4,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-1-5",
        source: "\u0447\u0430\u0441\u0442\u044c",
        targets: [
          { text: "Teil" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 5,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-1-6",
        source: "\u043f\u0440\u0438\u0447\u0438\u043d\u0430",
        targets: [
          { text: "Grund" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 6,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-1-7",
        source: "\u0438\u0434\u0435\u044f",
        targets: [
          { text: "Idee" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 7,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-2",
    title: "Alltag Nomen - Ziel & Plan 2",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-2-1",
        source: "\u0446\u0435\u043b\u044c",
        targets: [
          { text: "Ziel" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 8,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-2-2",
        source: "\u043f\u043b\u0430\u043d",
        targets: [
          { text: "Plan" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 9,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-2-3",
        source: "\u043f\u043e\u043c\u043e\u0449\u044c",
        targets: [
          { text: "Hilfe" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 10,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-2-4",
        source: "\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",
        targets: [
          { text: "Ergebnis" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 11,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-2-5",
        source: "\u0448\u0430\u043d\u0441",
        targets: [
          { text: "Chance" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 12,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-2-6",
        source: "\u043e\u0448\u0438\u0431\u043a\u0430",
        targets: [
          { text: "Fehler" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 13,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-2-7",
        source: "\u0446\u0435\u043d\u0430",
        targets: [
          { text: "Preis" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 14,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-3",
    title: "Alltag Nomen - Kraft & Gefahr 3",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-3-1",
        source: "\u0441\u0438\u043b\u0430",
        targets: [
          { text: "Kraft" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 15,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-3-2",
        source: "\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c",
        targets: [
          { text: "Gefahr" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 16,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-3-3",
        source: "\u0443\u0434\u043e\u0432\u043e\u043b\u044c\u0441\u0442\u0432\u0438\u0435",
        targets: [
          { text: "Spa\u00df" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 17,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-3-4",
        source: "\u043f\u043e\u043a\u043e\u0439",
        targets: [
          { text: "Ruhe" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 18,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-3-5",
        source: "\u0441\u0442\u0440\u0435\u0441\u0441",
        targets: [
          { text: "Stress" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 19,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-3-6",
        source: "\u043f\u043e\u0442\u0440\u0435\u0431\u043d\u043e\u0441\u0442\u044c",
        targets: [
          { text: "Bedarf" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 20,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-3-7",
        source: "\u0443\u0441\u043f\u0435\u0445",
        targets: [
          { text: "Erfolg" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 21,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-4",
    title: "Alltag Nomen - Misserfolg & Entscheidung 4",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-4-1",
        source: "\u043d\u0435\u0443\u0434\u0430\u0447\u0430",
        targets: [
          { text: "Misserfolg" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 22,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-4-2",
        source: "\u0440\u0435\u0448\u0435\u043d\u0438\u0435",
        targets: [
          { text: "Entscheidung" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 23,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-4-3",
        source: "\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c",
        targets: [
          { text: "M\u00f6glichkeit" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 24,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-4-4",
        source: "\u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044f",
        targets: [
          { text: "Situation" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 25,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-verben-1",
    title: "Alltag Verben - sein & haben 1",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Verben",
    words: [
      {
        id: "ru-de-alltag-a1-b1-verben-1-1",
        source: "\u0431\u044b\u0442\u044c",
        targets: [
          { text: "sein" },
        ],
        partOfSpeech: "verb",
        category: "Alltag A1-B1 Verben",
        frequencyRank: 1,
      },
      {
        id: "ru-de-alltag-a1-b1-verben-1-2",
        source: "\u0438\u043c\u0435\u0442\u044c",
        targets: [
          { text: "haben" },
        ],
        partOfSpeech: "verb",
        category: "Alltag A1-B1 Verben",
        frequencyRank: 2,
      },
      {
        id: "ru-de-alltag-a1-b1-verben-1-3",
        source: "\u0434\u0435\u043b\u0430\u0442\u044c",
        targets: [
          { text: "machen" },
        ],
        partOfSpeech: "verb",
        category: "Alltag A1-B1 Verben",
        frequencyRank: 3,
      },
      {
        id: "ru-de-alltag-a1-b1-verben-1-4",
        source: "\u0438\u0434\u0442\u0438",
        targets: [
          { text: "gehen" },
        ],
        partOfSpeech: "verb",
        category: "Alltag A1-B1 Verben",
        frequencyRank: 4,
      },
      {
        id: "ru-de-alltag-a1-b1-verben-1-5",
        source: "\u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u044c",
        targets: [
          { text: "kommen" },
        ],
        partOfSpeech: "verb",
        category: "Alltag A1-B1 Verben",
        frequencyRank: 5,
      },
      {
        id: "ru-de-alltag-a1-b1-verben-1-6",
        source: "\u0441\u043a\u0430\u0437\u0430\u0442\u044c",
        targets: [
          { text: "sagen" },
        ],
        partOfSpeech: "verb",
        category: "Alltag A1-B1 Verben",
        frequencyRank: 6,
      },
      {
        id: "ru-de-alltag-a1-b1-verben-1-7",
        source: "\u0432\u0438\u0434\u0435\u0442\u044c",
        targets: [
          { text: "sehen" },
        ],
        partOfSpeech: "verb",
        category: "Alltag A1-B1 Verben",
        frequencyRank: 7,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-verben-2",
    title: "Alltag Verben - geben & nehmen 2",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Verben",
    words: [
      {
        id: "ru-de-alltag-a1-b1-verben-2-1",
        source: "\u0434\u0430\u0432\u0430\u0442\u044c",
        targets: [
          { text: "geben" },
        ],
        partOfSpeech: "verb",
        category: "Alltag A1-B1 Verben",
        frequencyRank: 8,
      },
      {
        id: "ru-de-alltag-a1-b1-verben-2-2",
        source: "\u0431\u0440\u0430\u0442\u044c",
        targets: [
          { text: "nehmen" },
        ],
        partOfSpeech: "verb",
        category: "Alltag A1-B1 Verben",
        frequencyRank: 9,
      },
      {
        id: "ru-de-alltag-a1-b1-verben-2-3",
        source: "\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c",
        targets: [
          { text: "finden" },
        ],
        partOfSpeech: "verb",
        category: "Alltag A1-B1 Verben",
        frequencyRank: 10,
      },
      {
        id: "ru-de-alltag-a1-b1-verben-2-4",
        source: "\u0434\u0443\u043c\u0430\u0442\u044c",
        targets: [
          { text: "denken" },
        ],
        partOfSpeech: "verb",
        category: "Alltag A1-B1 Verben",
        frequencyRank: 11,
      },
      {
        id: "ru-de-alltag-a1-b1-verben-2-5",
        source: "\u0437\u043d\u0430\u0442\u044c",
        targets: [
          { text: "wissen" },
        ],
        partOfSpeech: "verb",
        category: "Alltag A1-B1 Verben",
        frequencyRank: 12,
      },
      {
        id: "ru-de-alltag-a1-b1-verben-2-6",
        source: "\u043c\u043e\u0447\u044c",
        targets: [
          { text: "k\u00f6nnen" },
        ],
        partOfSpeech: "verb",
        category: "Alltag A1-B1 Verben",
        frequencyRank: 13,
      },
      {
        id: "ru-de-alltag-a1-b1-verben-2-7",
        source: "\u0445\u043e\u0442\u0435\u0442\u044c",
        targets: [
          { text: "wollen" },
        ],
        partOfSpeech: "verb",
        category: "Alltag A1-B1 Verben",
        frequencyRank: 14,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-verben-3",
    title: "Alltag Verben - bleiben & fragen 3",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Verben",
    words: [
      {
        id: "ru-de-alltag-a1-b1-verben-3-1",
        source: "\u043e\u0441\u0442\u0430\u0432\u0430\u0442\u044c\u0441\u044f",
        targets: [
          { text: "bleiben" },
        ],
        partOfSpeech: "verb",
        category: "Alltag A1-B1 Verben",
        frequencyRank: 15,
      },
      {
        id: "ru-de-alltag-a1-b1-verben-3-2",
        source: "\u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044c",
        targets: [
          { text: "fragen" },
        ],
        partOfSpeech: "verb",
        category: "Alltag A1-B1 Verben",
        frequencyRank: 16,
      },
      {
        id: "ru-de-alltag-a1-b1-verben-3-3",
        source: "\u043e\u0442\u0432\u0435\u0447\u0430\u0442\u044c",
        targets: [
          { text: "antworten" },
        ],
        partOfSpeech: "verb",
        category: "Alltag A1-B1 Verben",
        frequencyRank: 17,
      },
      {
        id: "ru-de-alltag-a1-b1-verben-3-4",
        source: "\u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c",
        targets: [
          { text: "beginnen" },
        ],
        partOfSpeech: "verb",
        category: "Alltag A1-B1 Verben",
        frequencyRank: 18,
      },
      {
        id: "ru-de-alltag-a1-b1-verben-3-5",
        source: "\u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0442\u044c",
        targets: [
          { text: "beenden" },
        ],
        partOfSpeech: "verb",
        category: "Alltag A1-B1 Verben",
        frequencyRank: 19,
      },
      {
        id: "ru-de-alltag-a1-b1-verben-3-6",
        source: "\u043f\u044b\u0442\u0430\u0442\u044c\u0441\u044f",
        targets: [
          { text: "versuchen" },
        ],
        partOfSpeech: "verb",
        category: "Alltag A1-B1 Verben",
        frequencyRank: 20,
      },
      {
        id: "ru-de-alltag-a1-b1-verben-3-7",
        source: "\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c",
        targets: [
          { text: "benutzen" },
        ],
        partOfSpeech: "verb",
        category: "Alltag A1-B1 Verben",
        frequencyRank: 21,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-verben-4",
    title: "Alltag Verben - lernen & h\u00f6ren 4",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Verben",
    words: [
      {
        id: "ru-de-alltag-a1-b1-verben-4-1",
        source: "\u0443\u0447\u0438\u0442\u044c",
        targets: [
          { text: "lernen" },
        ],
        partOfSpeech: "verb",
        category: "Alltag A1-B1 Verben",
        frequencyRank: 22,
      },
      {
        id: "ru-de-alltag-a1-b1-verben-4-2",
        source: "\u0441\u043b\u044b\u0448\u0430\u0442\u044c",
        targets: [
          { text: "h\u00f6ren" },
        ],
        partOfSpeech: "verb",
        category: "Alltag A1-B1 Verben",
        frequencyRank: 23,
      },
      {
        id: "ru-de-alltag-a1-b1-verben-4-3",
        source: "\u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c",
        targets: [
          { text: "sprechen" },
        ],
        partOfSpeech: "verb",
        category: "Alltag A1-B1 Verben",
        frequencyRank: 24,
      },
      {
        id: "ru-de-alltag-a1-b1-verben-4-4",
        source: "\u0436\u0438\u0442\u044c",
        targets: [
          { text: "leben" },
        ],
        partOfSpeech: "verb",
        category: "Alltag A1-B1 Verben",
        frequencyRank: 25,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-adjektive-1",
    title: "Alltag Adjektive - gut & schlecht 1",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Adjektive",
    words: [
      {
        id: "ru-de-alltag-a1-b1-adjektive-1-1",
        source: "\u0445\u043e\u0440\u043e\u0448\u0438\u0439",
        targets: [
          { text: "gut" },
        ],
        partOfSpeech: "adj",
        category: "Alltag A1-B1 Adjektive",
        frequencyRank: 1,
      },
      {
        id: "ru-de-alltag-a1-b1-adjektive-1-2",
        source: "\u043f\u043b\u043e\u0445\u043e\u0439",
        targets: [
          { text: "schlecht" },
        ],
        partOfSpeech: "adj",
        category: "Alltag A1-B1 Adjektive",
        frequencyRank: 2,
      },
      {
        id: "ru-de-alltag-a1-b1-adjektive-1-3",
        source: "\u043d\u043e\u0432\u044b\u0439",
        targets: [
          { text: "neu" },
        ],
        partOfSpeech: "adj",
        category: "Alltag A1-B1 Adjektive",
        frequencyRank: 3,
      },
      {
        id: "ru-de-alltag-a1-b1-adjektive-1-4",
        source: "\u0441\u0442\u0430\u0440\u044b\u0439",
        targets: [
          { text: "alt" },
        ],
        partOfSpeech: "adj",
        category: "Alltag A1-B1 Adjektive",
        frequencyRank: 4,
      },
      {
        id: "ru-de-alltag-a1-b1-adjektive-1-5",
        source: "\u0431\u043e\u043b\u044c\u0448\u043e\u0439",
        targets: [
          { text: "gro\u00df" },
        ],
        partOfSpeech: "adj",
        category: "Alltag A1-B1 Adjektive",
        frequencyRank: 5,
      },
      {
        id: "ru-de-alltag-a1-b1-adjektive-1-6",
        source: "\u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439",
        targets: [
          { text: "klein" },
        ],
        partOfSpeech: "adj",
        category: "Alltag A1-B1 Adjektive",
        frequencyRank: 6,
      },
      {
        id: "ru-de-alltag-a1-b1-adjektive-1-7",
        source: "\u043f\u0440\u043e\u0441\u0442\u043e\u0439",
        targets: [
          { text: "einfach" },
        ],
        partOfSpeech: "adj",
        category: "Alltag A1-B1 Adjektive",
        frequencyRank: 7,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-adjektive-2",
    title: "Alltag Adjektive - schwer & schnell 2",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Adjektive",
    words: [
      {
        id: "ru-de-alltag-a1-b1-adjektive-2-1",
        source: "\u0442\u0440\u0443\u0434\u043d\u044b\u0439",
        targets: [
          { text: "schwer" },
        ],
        partOfSpeech: "adj",
        category: "Alltag A1-B1 Adjektive",
        frequencyRank: 8,
      },
      {
        id: "ru-de-alltag-a1-b1-adjektive-2-2",
        source: "\u0431\u044b\u0441\u0442\u0440\u044b\u0439",
        targets: [
          { text: "schnell" },
        ],
        partOfSpeech: "adj",
        category: "Alltag A1-B1 Adjektive",
        frequencyRank: 9,
      },
      {
        id: "ru-de-alltag-a1-b1-adjektive-2-3",
        source: "\u043c\u0435\u0434\u043b\u0435\u043d\u043d\u044b\u0439",
        targets: [
          { text: "langsam" },
        ],
        partOfSpeech: "adj",
        category: "Alltag A1-B1 Adjektive",
        frequencyRank: 10,
      },
      {
        id: "ru-de-alltag-a1-b1-adjektive-2-4",
        source: "\u0432\u0430\u0436\u043d\u044b\u0439",
        targets: [
          { text: "wichtig" },
        ],
        partOfSpeech: "adj",
        category: "Alltag A1-B1 Adjektive",
        frequencyRank: 11,
      },
      {
        id: "ru-de-alltag-a1-b1-adjektive-2-5",
        source: "\u044f\u0441\u043d\u044b\u0439",
        targets: [
          { text: "klar" },
        ],
        partOfSpeech: "adj",
        category: "Alltag A1-B1 Adjektive",
        frequencyRank: 12,
      },
      {
        id: "ru-de-alltag-a1-b1-adjektive-2-6",
        source: "\u0433\u043e\u0442\u043e\u0432\u044b\u0439",
        targets: [
          { text: "bereit" },
        ],
        partOfSpeech: "adj",
        category: "Alltag A1-B1 Adjektive",
        frequencyRank: 13,
      },
      {
        id: "ru-de-alltag-a1-b1-adjektive-2-7",
        source: "\u0441\u0432\u043e\u0431\u043e\u0434\u043d\u044b\u0439",
        targets: [
          { text: "frei" },
        ],
        partOfSpeech: "adj",
        category: "Alltag A1-B1 Adjektive",
        frequencyRank: 14,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-adjektive-3",
    title: "Alltag Adjektive - voll & leer 3",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Adjektive",
    words: [
      {
        id: "ru-de-alltag-a1-b1-adjektive-3-1",
        source: "\u043f\u043e\u043b\u043d\u044b\u0439",
        targets: [
          { text: "voll" },
        ],
        partOfSpeech: "adj",
        category: "Alltag A1-B1 Adjektive",
        frequencyRank: 15,
      },
      {
        id: "ru-de-alltag-a1-b1-adjektive-3-2",
        source: "\u043f\u0443\u0441\u0442\u043e\u0439",
        targets: [
          { text: "leer" },
        ],
        partOfSpeech: "adj",
        category: "Alltag A1-B1 Adjektive",
        frequencyRank: 16,
      },
      {
        id: "ru-de-alltag-a1-b1-adjektive-3-3",
        source: "\u043e\u0442\u043a\u0440\u044b\u0442\u044b\u0439",
        targets: [
          { text: "offen" },
        ],
        partOfSpeech: "adj",
        category: "Alltag A1-B1 Adjektive",
        frequencyRank: 17,
      },
      {
        id: "ru-de-alltag-a1-b1-adjektive-3-4",
        source: "\u043d\u0430\u0434\u0451\u0436\u043d\u044b\u0439",
        targets: [
          { text: "sicher" },
        ],
        partOfSpeech: "adj",
        category: "Alltag A1-B1 Adjektive",
        frequencyRank: 18,
      },
      {
        id: "ru-de-alltag-a1-b1-adjektive-3-5",
        source: "\u0441\u043f\u043e\u043a\u043e\u0439\u043d\u044b\u0439",
        targets: [
          { text: "ruhig" },
        ],
        partOfSpeech: "adj",
        category: "Alltag A1-B1 Adjektive",
        frequencyRank: 19,
      },
      {
        id: "ru-de-alltag-a1-b1-adjektive-3-6",
        source: "\u0433\u0440\u043e\u043c\u043a\u0438\u0439",
        targets: [
          { text: "laut" },
        ],
        partOfSpeech: "adj",
        category: "Alltag A1-B1 Adjektive",
        frequencyRank: 20,
      },
      {
        id: "ru-de-alltag-a1-b1-adjektive-3-7",
        source: "\u0443\u0441\u0442\u0430\u0432\u0448\u0438\u0439",
        targets: [
          { text: "m\u00fcde" },
        ],
        partOfSpeech: "adj",
        category: "Alltag A1-B1 Adjektive",
        frequencyRank: 21,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-adjektive-4",
    title: "Alltag Adjektive - hungrig & zufrieden 4",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Adjektive",
    words: [
      {
        id: "ru-de-alltag-a1-b1-adjektive-4-1",
        source: "\u0433\u043e\u043b\u043e\u0434\u043d\u044b\u0439",
        targets: [
          { text: "hungrig" },
        ],
        partOfSpeech: "adj",
        category: "Alltag A1-B1 Adjektive",
        frequencyRank: 22,
      },
      {
        id: "ru-de-alltag-a1-b1-adjektive-4-2",
        source: "\u0434\u043e\u0432\u043e\u043b\u044c\u043d\u044b\u0439",
        targets: [
          { text: "zufrieden" },
        ],
        partOfSpeech: "adj",
        category: "Alltag A1-B1 Adjektive",
        frequencyRank: 23,
      },
      {
        id: "ru-de-alltag-a1-b1-adjektive-4-3",
        source: "\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0439",
        targets: [
          { text: "m\u00f6glich" },
        ],
        partOfSpeech: "adj",
        category: "Alltag A1-B1 Adjektive",
        frequencyRank: 24,
      },
      {
        id: "ru-de-alltag-a1-b1-adjektive-4-4",
        source: "\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439",
        targets: [
          { text: "bekannt" },
        ],
        partOfSpeech: "adj",
        category: "Alltag A1-B1 Adjektive",
        frequencyRank: 25,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-5",
    title: "Alltag Nomen - Mensch & Mann 5",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-5-1",
        source: "\u0447\u0435\u043b\u043e\u0432\u0435\u043a",
        targets: [
          { text: "Mensch" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 1,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-5-2",
        source: "\u043c\u0443\u0436\u0447\u0438\u043d\u0430",
        targets: [
          { text: "Mann" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 2,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-5-3",
        source: "\u0436\u0435\u043d\u0449\u0438\u043d\u0430",
        targets: [
          { text: "Frau" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 3,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-5-4",
        source: "\u0440\u0435\u0431\u0451\u043d\u043e\u043a",
        targets: [
          { text: "Kind" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 4,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-5-5",
        source: "\u0434\u0440\u0443\u0433",
        targets: [
          { text: "Freund" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 5,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-5-6",
        source: "\u0441\u0435\u043c\u044c\u044f",
        targets: [
          { text: "Familie" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 6,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-5-7",
        source: "\u043f\u0430\u0440\u0442\u043d\u0451\u0440",
        targets: [
          { text: "Partner" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 7,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-6",
    title: "Alltag Nomen - Kollege & Chef 6",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-6-1",
        source: "\u043a\u043e\u043b\u043b\u0435\u0433\u0430",
        targets: [
          { text: "Kollege" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 8,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-6-2",
        source: "\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u0438\u043a",
        targets: [
          { text: "Chef" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 9,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-6-3",
        source: "\u043a\u043b\u0438\u0435\u043d\u0442",
        targets: [
          { text: "Kunde" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 10,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-6-4",
        source: "\u0433\u043e\u0441\u0442\u044c",
        targets: [
          { text: "Gast" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 11,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-6-5",
        source: "\u0441\u043e\u0441\u0435\u0434",
        targets: [
          { text: "Nachbar" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 12,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-6-6",
        source: "\u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c",
        targets: [
          { text: "Elternteil" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 13,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-6-7",
        source: "\u0441\u044b\u043d",
        targets: [
          { text: "Sohn" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 14,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-7",
    title: "Alltag Nomen - Tochter & Bruder 7",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-7-1",
        source: "\u0434\u043e\u0447\u044c",
        targets: [
          { text: "Tochter" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 15,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-7-2",
        source: "\u0431\u0440\u0430\u0442",
        targets: [
          { text: "Bruder" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 16,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-7-3",
        source: "\u0441\u0435\u0441\u0442\u0440\u0430",
        targets: [
          { text: "Schwester" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 17,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-7-4",
        source: "\u0441\u0443\u043f\u0440\u0443\u0433",
        targets: [
          { text: "Ehepartner" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 18,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-7-5",
        source: "\u0437\u043d\u0430\u043a\u043e\u043c\u044b\u0439",
        targets: [
          { text: "Bekannter" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 19,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-7-6",
        source: "\u043d\u0435\u0437\u043d\u0430\u043a\u043e\u043c\u0435\u0446",
        targets: [
          { text: "Fremder" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 20,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-7-7",
        source: "\u0443\u0447\u0438\u0442\u0435\u043b\u044c",
        targets: [
          { text: "Lehrer" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 21,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-8",
    title: "Alltag Nomen - Sch\u00fcler & Verk\u00e4ufer 8",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-8-1",
        source: "\u0443\u0447\u0435\u043d\u0438\u043a",
        targets: [
          { text: "Sch\u00fcler" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 22,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-8-2",
        source: "\u043f\u0440\u043e\u0434\u0430\u0432\u0435\u0446",
        targets: [
          { text: "Verk\u00e4ufer" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 23,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-8-3",
        source: "\u0434\u0440\u0443\u0436\u0431\u0430",
        targets: [
          { text: "Freundschaft" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 24,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-8-4",
        source: "\u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0435",
        targets: [
          { text: "Beziehung" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 25,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-9",
    title: "Alltag Nomen - Ort & Stadt 9",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-9-1",
        source: "\u043c\u0435\u0441\u0442\u043e",
        targets: [
          { text: "Ort" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 1,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-9-2",
        source: "\u0433\u043e\u0440\u043e\u0434",
        targets: [
          { text: "Stadt" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 2,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-9-3",
        source: "\u0441\u0442\u0440\u0430\u043d\u0430",
        targets: [
          { text: "Land" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 3,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-9-4",
        source: "\u0443\u043b\u0438\u0446\u0430",
        targets: [
          { text: "Stra\u00dfe" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 4,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-9-5",
        source: "\u0434\u043e\u0440\u043e\u0433\u0430",
        targets: [
          { text: "Weg" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 5,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-9-6",
        source: "\u0434\u043e\u043c",
        targets: [
          { text: "Haus" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 6,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-9-7",
        source: "\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430",
        targets: [
          { text: "Wohnung" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 7,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-10",
    title: "Alltag Nomen - Zimmer & Schule 10",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-10-1",
        source: "\u043a\u043e\u043c\u043d\u0430\u0442\u0430",
        targets: [
          { text: "Zimmer" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 8,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-10-2",
        source: "\u0448\u043a\u043e\u043b\u0430",
        targets: [
          { text: "Schule" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 9,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-10-3",
        source: "\u0440\u0430\u0431\u043e\u0447\u0435\u0435 \u043c\u0435\u0441\u0442\u043e",
        targets: [
          { text: "Arbeitsplatz" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 10,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-10-4",
        source: "\u043c\u0430\u0433\u0430\u0437\u0438\u043d",
        targets: [
          { text: "Gesch\u00e4ft" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 11,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-10-5",
        source: "\u0440\u044b\u043d\u043e\u043a",
        targets: [
          { text: "Markt" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 12,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-10-6",
        source: "\u0432\u043e\u043a\u0437\u0430\u043b",
        targets: [
          { text: "Bahnhof" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 13,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-10-7",
        source: "\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",
        targets: [
          { text: "Haltestelle" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 14,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-11",
    title: "Alltag Nomen - Flughafen & Krankenhaus 11",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-11-1",
        source: "\u0430\u044d\u0440\u043e\u043f\u043e\u0440\u0442",
        targets: [
          { text: "Flughafen" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 15,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-11-2",
        source: "\u0431\u043e\u043b\u044c\u043d\u0438\u0446\u0430",
        targets: [
          { text: "Krankenhaus" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 16,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-11-3",
        source: "\u0430\u043f\u0442\u0435\u043a\u0430",
        targets: [
          { text: "Apotheke" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 17,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-11-4",
        source: "\u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d",
        targets: [
          { text: "Restaurant" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 18,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-11-5",
        source: "\u043f\u0430\u0440\u043a",
        targets: [
          { text: "Park" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 19,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-11-6",
        source: "\u043f\u043b\u043e\u0449\u0430\u0434\u044c",
        targets: [
          { text: "Platz" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 20,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-11-7",
        source: "\u0443\u0433\u043e\u043b",
        targets: [
          { text: "Ecke" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 21,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-12",
    title: "Alltag Nomen - Eingang & Ausgang 12",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-12-1",
        source: "\u0432\u0445\u043e\u0434",
        targets: [
          { text: "Eingang" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 22,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-12-2",
        source: "\u0432\u044b\u0445\u043e\u0434",
        targets: [
          { text: "Ausgang" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 23,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-12-3",
        source: "\u0431\u043b\u0438\u0437\u043e\u0441\u0442\u044c",
        targets: [
          { text: "N\u00e4he" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 24,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-12-4",
        source: "\u0446\u0435\u043d\u0442\u0440",
        targets: [
          { text: "Zentrum" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 25,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-13",
    title: "Alltag Nomen - Essen & Getr\u00e4nk 13",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-13-1",
        source: "\u0435\u0434\u0430",
        targets: [
          { text: "Essen" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 1,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-13-2",
        source: "\u043d\u0430\u043f\u0438\u0442\u043e\u043a",
        targets: [
          { text: "Getr\u00e4nk" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 2,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-13-3",
        source: "\u0432\u043e\u0434\u0430",
        targets: [
          { text: "Wasser" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 3,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-13-4",
        source: "\u0445\u043b\u0435\u0431",
        targets: [
          { text: "Brot" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 4,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-13-5",
        source: "\u043c\u044f\u0441\u043e",
        targets: [
          { text: "Fleisch" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 5,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-13-6",
        source: "\u0440\u044b\u0431\u0430",
        targets: [
          { text: "Fisch" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 6,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-13-7",
        source: "\u043e\u0432\u043e\u0449",
        targets: [
          { text: "Gem\u00fcse" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 7,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-14",
    title: "Alltag Nomen - Frucht & Suppe 14",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-14-1",
        source: "\u0444\u0440\u0443\u043a\u0442",
        targets: [
          { text: "Frucht" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 8,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-14-2",
        source: "\u0441\u0443\u043f",
        targets: [
          { text: "Suppe" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 9,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-14-3",
        source: "\u0441\u0430\u043b\u0430\u0442",
        targets: [
          { text: "Salat" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 10,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-14-4",
        source: "\u0440\u0438\u0441",
        targets: [
          { text: "Reis" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 11,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-14-5",
        source: "\u043c\u0430\u043a\u0430\u0440\u043e\u043d\u044b",
        targets: [
          { text: "Nudel" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 12,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-14-6",
        source: "\u044f\u0439\u0446\u043e",
        targets: [
          { text: "Ei" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 13,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-14-7",
        source: "\u0441\u044b\u0440",
        targets: [
          { text: "K\u00e4se" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 14,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-15",
    title: "Alltag Nomen - Milch & Kaffee 15",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-15-1",
        source: "\u043c\u043e\u043b\u043e\u043a\u043e",
        targets: [
          { text: "Milch" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 15,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-15-2",
        source: "\u043a\u043e\u0444\u0435",
        targets: [
          { text: "Kaffee" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 16,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-15-3",
        source: "\u0447\u0430\u0439",
        targets: [
          { text: "Tee" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 17,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-15-4",
        source: "\u0441\u043e\u043a",
        targets: [
          { text: "Saft" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 18,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-15-5",
        source: "\u043f\u0438\u0432\u043e",
        targets: [
          { text: "Bier" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 19,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-15-6",
        source: "\u0432\u0438\u043d\u043e",
        targets: [
          { text: "Wein" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 20,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-15-7",
        source: "\u0441\u0430\u0445\u0430\u0440",
        targets: [
          { text: "Zucker" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 21,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-16",
    title: "Alltag Nomen - Salz & Fr\u00fchst\u00fcck 16",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-16-1",
        source: "\u0441\u043e\u043b\u044c",
        targets: [
          { text: "Salz" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 22,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-16-2",
        source: "\u0437\u0430\u0432\u0442\u0440\u0430\u043a",
        targets: [
          { text: "Fr\u00fchst\u00fcck" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 23,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-16-3",
        source: "\u043e\u0431\u0435\u0434",
        targets: [
          { text: "Mittagessen" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 24,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-16-4",
        source: "\u0443\u0436\u0438\u043d",
        targets: [
          { text: "Abendessen" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 25,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-17",
    title: "Alltag Nomen - Zeit & Tag 17",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-17-1",
        source: "\u0432\u0440\u0435\u043c\u044f",
        targets: [
          { text: "Zeit" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 1,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-17-2",
        source: "\u0434\u0435\u043d\u044c",
        targets: [
          { text: "Tag" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 2,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-17-3",
        source: "\u043d\u043e\u0447\u044c",
        targets: [
          { text: "Nacht" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 3,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-17-4",
        source: "\u0443\u0442\u0440\u043e",
        targets: [
          { text: "Morgen" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 4,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-17-5",
        source: "\u0432\u0435\u0447\u0435\u0440",
        targets: [
          { text: "Abend" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 5,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-17-6",
        source: "\u043d\u0435\u0434\u0435\u043b\u044f",
        targets: [
          { text: "Woche" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 6,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-17-7",
        source: "\u043c\u0435\u0441\u044f\u0446",
        targets: [
          { text: "Monat" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 7,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-18",
    title: "Alltag Nomen - Jahr & Anfang 18",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-18-1",
        source: "\u0433\u043e\u0434",
        targets: [
          { text: "Jahr" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 8,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-18-2",
        source: "\u043d\u0430\u0447\u0430\u043b\u043e",
        targets: [
          { text: "Anfang" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 9,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-18-3",
        source: "\u043a\u043e\u043d\u0435\u0446",
        targets: [
          { text: "Ende" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 10,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-18-4",
        source: "\u043f\u0430\u0443\u0437\u0430",
        targets: [
          { text: "Pause" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 11,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-18-5",
        source: "\u043c\u043e\u043c\u0435\u043d\u0442",
        targets: [
          { text: "Moment" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 12,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-18-6",
        source: "\u0431\u0443\u0434\u0443\u0449\u0435\u0435",
        targets: [
          { text: "Zukunft" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 13,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-18-7",
        source: "\u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",
        targets: [
          { text: "Dauer" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 14,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-19",
    title: "Alltag Nomen - Abfolge & Datum 19",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-19-1",
        source: "\u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",
        targets: [
          { text: "Abfolge" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 15,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-19-2",
        source: "\u0434\u0430\u0442\u0430",
        targets: [
          { text: "Datum" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 16,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-19-3",
        source: "\u043f\u043e\u0432\u0441\u0435\u0434\u043d\u0435\u0432\u043d\u043e\u0441\u0442\u044c",
        targets: [
          { text: "Alltag" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 17,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-19-4",
        source: "\u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u044b",
        targets: [
          { text: "Feierabend" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 18,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-19-5",
        source: "\u043e\u0442\u043f\u0443\u0441\u043a",
        targets: [
          { text: "Urlaub" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 19,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-19-6",
        source: "\u0441\u0440\u043e\u043a",
        targets: [
          { text: "Frist" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 20,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-19-7",
        source: "\u0441\u0442\u0430\u0440\u0442",
        targets: [
          { text: "Beginn" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 21,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-20",
    title: "Alltag Nomen - Schluss & Zeitraum 20",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-20-1",
        source: "\u0444\u0438\u043d\u0430\u043b",
        targets: [
          { text: "Schluss" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 22,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-20-2",
        source: "\u043f\u0435\u0440\u0438\u043e\u0434",
        targets: [
          { text: "Zeitraum" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 23,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-20-3",
        source: "\u0441\u043b\u0443\u0447\u0430\u0439",
        targets: [
          { text: "Gelegenheit" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 24,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-20-4",
        source: "\u0440\u0438\u0442\u043c",
        targets: [
          { text: "Rhythmus" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 25,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-21",
    title: "Alltag Nomen - Gef\u00fchl & Freude 21",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-21-1",
        source: "\u0447\u0443\u0432\u0441\u0442\u0432\u043e",
        targets: [
          { text: "Gef\u00fchl" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 1,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-21-2",
        source: "\u0440\u0430\u0434\u043e\u0441\u0442\u044c",
        targets: [
          { text: "Freude" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 2,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-21-3",
        source: "\u0441\u0442\u0440\u0430\u0445",
        targets: [
          { text: "Angst" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 3,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-21-4",
        source: "\u0437\u043b\u043e\u0441\u0442\u044c",
        targets: [
          { text: "Wut" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 4,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-21-5",
        source: "\u0433\u0440\u0443\u0441\u0442\u044c",
        targets: [
          { text: "Traurigkeit" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 5,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-21-6",
        source: "\u043b\u044e\u0431\u043e\u0432\u044c",
        targets: [
          { text: "Liebe" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 6,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-21-7",
        source: "\u043d\u0430\u0434\u0435\u0436\u0434\u0430",
        targets: [
          { text: "Hoffnung" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 7,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-22",
    title: "Alltag Nomen - Zweifel & Vertrauen 22",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-22-1",
        source: "\u0441\u043e\u043c\u043d\u0435\u043d\u0438\u0435",
        targets: [
          { text: "Zweifel" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 8,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-22-2",
        source: "\u0434\u043e\u0432\u0435\u0440\u0438\u0435",
        targets: [
          { text: "Vertrauen" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 9,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-22-3",
        source: "\u0433\u043e\u0440\u0434\u043e\u0441\u0442\u044c",
        targets: [
          { text: "Stolz" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 10,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-22-4",
        source: "\u0441\u0442\u044b\u0434",
        targets: [
          { text: "Scham" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 11,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-22-5",
        source: "\u043b\u044e\u0431\u043e\u043f\u044b\u0442\u0441\u0442\u0432\u043e",
        targets: [
          { text: "Neugier" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 12,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-22-6",
        source: "\u0438\u043d\u0442\u0435\u0440\u0435\u0441",
        targets: [
          { text: "Interesse" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 13,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-22-7",
        source: "\u0441\u043a\u0443\u043a\u0430",
        targets: [
          { text: "Langeweile" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 14,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-23",
    title: "Alltag Nomen - \u00dcberraschung & Gedanke 23",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-23-1",
        source: "\u0443\u0434\u0438\u0432\u043b\u0435\u043d\u0438\u0435",
        targets: [
          { text: "\u00dcberraschung" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 15,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-23-2",
        source: "\u043c\u044b\u0441\u043b\u044c",
        targets: [
          { text: "Gedanke" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 16,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-23-3",
        source: "\u043c\u043d\u0435\u043d\u0438\u0435",
        targets: [
          { text: "Meinung" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 17,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-23-4",
        source: "\u0432\u043e\u0441\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u0435",
        targets: [
          { text: "Erinnerung" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 18,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-23-5",
        source: "\u043c\u0435\u0447\u0442\u0430",
        targets: [
          { text: "Traum" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 19,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-23-6",
        source: "\u0436\u0435\u043b\u0430\u043d\u0438\u0435",
        targets: [
          { text: "Wunsch" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 20,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-23-7",
        source: "\u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435",
        targets: [
          { text: "Aufmerksamkeit" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 21,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-24",
    title: "Alltag Nomen - Konzentration & Ruhegef\u00fchl 24",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-24-1",
        source: "\u043a\u043e\u043d\u0446\u0435\u043d\u0442\u0440\u0430\u0446\u0438\u044f",
        targets: [
          { text: "Konzentration" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 22,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-24-2",
        source: "\u0441\u043f\u043e\u043a\u043e\u0439\u0441\u0442\u0432\u0438\u0435",
        targets: [
          { text: "Ruhegef\u00fchl" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 23,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-24-3",
        source: "\u043c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f",
        targets: [
          { text: "Motivation" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 24,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-24-4",
        source: "\u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435",
        targets: [
          { text: "Stresszustand" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 25,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-25",
    title: "Alltag Nomen - Tisch & Stuhl 25",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-25-1",
        source: "\u0441\u0442\u043e\u043b",
        targets: [
          { text: "Tisch" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 1,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-25-2",
        source: "\u0441\u0442\u0443\u043b",
        targets: [
          { text: "Stuhl" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 2,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-25-3",
        source: "\u043a\u0440\u043e\u0432\u0430\u0442\u044c",
        targets: [
          { text: "Bett" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 3,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-25-4",
        source: "\u0448\u043a\u0430\u0444",
        targets: [
          { text: "Schrank" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 4,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-25-5",
        source: "\u0434\u0432\u0435\u0440\u044c",
        targets: [
          { text: "T\u00fcr" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 5,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-25-6",
        source: "\u043e\u043a\u043d\u043e",
        targets: [
          { text: "Fenster" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 6,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-25-7",
        source: "\u0441\u0432\u0435\u0442",
        targets: [
          { text: "Licht" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 7,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-26",
    title: "Alltag Nomen - Schl\u00fcssel & Tasche 26",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-26-1",
        source: "\u043a\u043b\u044e\u0447",
        targets: [
          { text: "Schl\u00fcssel" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 8,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-26-2",
        source: "\u0441\u0443\u043c\u043a\u0430",
        targets: [
          { text: "Tasche" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 9,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-26-3",
        source: "\u0442\u0435\u043b\u0435\u0444\u043e\u043d",
        targets: [
          { text: "Handy" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 10,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-26-4",
        source: "\u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440",
        targets: [
          { text: "Computer" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 11,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-26-5",
        source: "\u0442\u0435\u043b\u0435\u0432\u0438\u0437\u043e\u0440",
        targets: [
          { text: "Fernseher" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 12,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-26-6",
        source: "\u043a\u043d\u0438\u0433\u0430",
        targets: [
          { text: "Buch" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 13,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-26-7",
        source: "\u0431\u0443\u043c\u0430\u0433\u0430",
        targets: [
          { text: "Papier" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 14,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-27",
    title: "Alltag Nomen - Stift & Kleidung 27",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-27-1",
        source: "\u0440\u0443\u0447\u043a\u0430",
        targets: [
          { text: "Stift" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 15,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-27-2",
        source: "\u043e\u0434\u0435\u0436\u0434\u0430",
        targets: [
          { text: "Kleidung" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 16,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-27-3",
        source: "\u043a\u0443\u0440\u0442\u043a\u0430",
        targets: [
          { text: "Jacke" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 17,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-27-4",
        source: "\u0437\u0435\u0440\u043a\u0430\u043b\u043e",
        targets: [
          { text: "Spiegel" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 18,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-27-5",
        source: "\u043c\u044b\u043b\u043e",
        targets: [
          { text: "Seife" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 19,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-27-6",
        source: "\u043f\u043e\u043b\u043e\u0442\u0435\u043d\u0446\u0435",
        targets: [
          { text: "Handtuch" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 20,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-27-7",
        source: "\u043f\u043e\u0441\u0443\u0434\u0430",
        targets: [
          { text: "Geschirr" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 21,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-28",
    title: "Alltag Nomen - M\u00fcll & Werkzeug 28",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-28-1",
        source: "\u043c\u0443\u0441\u043e\u0440",
        targets: [
          { text: "M\u00fcll" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 22,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-28-2",
        source: "\u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442",
        targets: [
          { text: "Werkzeug" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 23,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-28-3",
        source: "\u0431\u0430\u0442\u0430\u0440\u0435\u0439\u043a\u0430",
        targets: [
          { text: "Batterie" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 24,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-28-4",
        source: "\u043b\u0430\u043c\u043f\u0430",
        targets: [
          { text: "Lampe" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 25,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-29",
    title: "Alltag Nomen - Wort & Ausspruch 29",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-29-1",
        source: "\u0441\u043b\u043e\u0432\u043e",
        targets: [
          { text: "Wort" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 1,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-29-2",
        source: "\u0432\u044b\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u043d\u0438\u0435",
        targets: [
          { text: "Ausspruch" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 2,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-29-3",
        source: "\u0432\u043e\u043f\u0440\u043e\u0441",
        targets: [
          { text: "Frage" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 3,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-29-4",
        source: "\u043e\u0442\u0432\u0435\u0442",
        targets: [
          { text: "Antwort" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 4,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-29-5",
        source: "\u0440\u0430\u0437\u0433\u043e\u0432\u043e\u0440",
        targets: [
          { text: "Gespr\u00e4ch" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 5,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-29-6",
        source: "\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",
        targets: [
          { text: "Nachricht" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 6,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-29-7",
        source: "\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",
        targets: [
          { text: "Information" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 7,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-30",
    title: "Alltag Nomen - Diskussion & Bitte 30",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-30-1",
        source: "\u043e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435",
        targets: [
          { text: "Diskussion" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 8,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-30-2",
        source: "\u043f\u0440\u043e\u0441\u044c\u0431\u0430",
        targets: [
          { text: "Bitte" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 9,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-30-3",
        source: "\u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u043d\u043e\u0441\u0442\u044c",
        targets: [
          { text: "Dank" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 10,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-30-4",
        source: "\u0438\u0437\u0432\u0438\u043d\u0435\u043d\u0438\u0435",
        targets: [
          { text: "Entschuldigung" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 11,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-30-5",
        source: "\u043f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435",
        targets: [
          { text: "Gru\u00df" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 12,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-30-6",
        source: "\u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435",
        targets: [
          { text: "Einladung" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 13,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-30-7",
        source: "\u043a\u043e\u043d\u0442\u0430\u043a\u0442",
        targets: [
          { text: "Kontakt" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 14,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-31",
    title: "Alltag Nomen - Verabredung & Streit 31",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-31-1",
        source: "\u0434\u043e\u0433\u043e\u0432\u043e\u0440",
        targets: [
          { text: "Verabredung" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 15,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-31-2",
        source: "\u0441\u043f\u043e\u0440",
        targets: [
          { text: "Streit" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 16,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-31-3",
        source: "\u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435",
        targets: [
          { text: "Einigung" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 17,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-31-4",
        source: "\u043a\u043e\u043c\u043f\u043b\u0438\u043c\u0435\u043d\u0442",
        targets: [
          { text: "Kompliment" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 18,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-31-5",
        source: "\u043a\u0440\u0438\u0442\u0438\u043a\u0430",
        targets: [
          { text: "Kritik" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 19,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-31-6",
        source: "\u043f\u043e\u0445\u0432\u0430\u043b\u0430",
        targets: [
          { text: "Lob" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 20,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-31-7",
        source: "\u0441\u043b\u0443\u0445",
        targets: [
          { text: "Ger\u00fccht" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 21,
      },
    ],
  },
  {
    id: "ru-de-alltag-a1-b1-nomen-32",
    title: "Alltag Nomen - Schweigen & Zustimmung 32",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag A1-B1 Nomen",
    words: [
      {
        id: "ru-de-alltag-a1-b1-nomen-32-1",
        source: "\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u0435",
        targets: [
          { text: "Schweigen" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 22,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-32-2",
        source: "\u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435",
        targets: [
          { text: "Zustimmung" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 23,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-32-3",
        source: "\u043e\u0442\u043a\u0430\u0437",
        targets: [
          { text: "Ablehnung" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 24,
      },
      {
        id: "ru-de-alltag-a1-b1-nomen-32-4",
        source: "\u0442\u043e\u0447\u043a\u0430 \u0437\u0440\u0435\u043d\u0438\u044f",
        targets: [
          { text: "Meinungspunkt" },
        ],
        partOfSpeech: "noun",
        category: "Alltag A1-B1 Nomen",
        frequencyRank: 25,
      },
    ],
  },
  {
    id: "ru-de-verben-konjugation-a1-b1-1",
    title: "Verben Konjugation - sein & haben 1",
    languagePair: { from: "ru", to: "de" },
    category: "Verben",
    words: [
      {
        id: "ru-de-verben-konjugation-a1-b1-1-1",
        source: "\u0431\u044b\u0442\u044c",
        targets: [
          { text: "sein" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 1,
        forms: {
          conjugations: {
            past: [
              "\u0431\u044b\u043b",
              "\u0431\u044b\u043b\u0430",
              "\u0431\u044b\u043b\u0438",
            ],
            future: [
              "\u0431\u0443\u0434\u0443",
              "\u0431\u0443\u0434\u0435\u0448\u044c",
              "\u0431\u0443\u0434\u0435\u0442",
              "\u0431\u0443\u0434\u0435\u043c",
              "\u0431\u0443\u0434\u0435\u0442\u0435",
              "\u0431\u0443\u0434\u0443\u0442",
            ],
          },
        },
      },
      {
        id: "ru-de-verben-konjugation-a1-b1-1-2",
        source: "\u0438\u043c\u0435\u0442\u044c",
        targets: [
          { text: "haben" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 2,
        forms: {
          conjugations: {
            present: [
              "\u0438\u043c\u0435\u044e",
              "\u0438\u043c\u0435\u0435\u0448\u044c",
              "\u0438\u043c\u0435\u0435\u0442",
              "\u0438\u043c\u0435\u0435\u043c",
              "\u0438\u043c\u0435\u0435\u0442\u0435",
              "\u0438\u043c\u0435\u044e\u0442",
            ],
            past: [
              "\u0438\u043c\u0435\u043b",
              "\u0438\u043c\u0435\u043b\u0430",
              "\u0438\u043c\u0435\u043b\u0438",
            ],
            future: [
              "\u0431\u0443\u0434\u0443 \u0438\u043c\u0435\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0448\u044c \u0438\u043c\u0435\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442 \u0438\u043c\u0435\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u043c \u0438\u043c\u0435\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442\u0435 \u0438\u043c\u0435\u0442\u044c",
              "\u0431\u0443\u0434\u0443\u0442 \u0438\u043c\u0435\u0442\u044c",
            ],
          },
        },
      },
      {
        id: "ru-de-verben-konjugation-a1-b1-1-3",
        source: "\u0434\u0435\u043b\u0430\u0442\u044c",
        targets: [
          { text: "machen" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 3,
        forms: {
          conjugations: {
            present: [
              "\u0434\u0435\u043b\u0430\u044e",
              "\u0434\u0435\u043b\u0430\u0435\u0448\u044c",
              "\u0434\u0435\u043b\u0430\u0435\u0442",
              "\u0434\u0435\u043b\u0430\u0435\u043c",
              "\u0434\u0435\u043b\u0430\u0435\u0442\u0435",
              "\u0434\u0435\u043b\u0430\u044e\u0442",
            ],
            past: [
              "\u0434\u0435\u043b\u0430\u043b",
              "\u0434\u0435\u043b\u0430\u043b\u0430",
              "\u0434\u0435\u043b\u0430\u043b\u0438",
            ],
            future: [
              "\u0431\u0443\u0434\u0443 \u0434\u0435\u043b\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0448\u044c \u0434\u0435\u043b\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442 \u0434\u0435\u043b\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u043c \u0434\u0435\u043b\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442\u0435 \u0434\u0435\u043b\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0443\u0442 \u0434\u0435\u043b\u0430\u0442\u044c",
            ],
          },
        },
      },
      {
        id: "ru-de-verben-konjugation-a1-b1-1-4",
        source: "\u0438\u0434\u0442\u0438",
        targets: [
          { text: "gehen" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 4,
        forms: {
          conjugations: {
            present: [
              "\u0438\u0434\u0443",
              "\u0438\u0434\u0451\u0448\u044c",
              "\u0438\u0434\u0451\u0442",
              "\u0438\u0434\u0451\u043c",
              "\u0438\u0434\u0451\u0442\u0435",
              "\u0438\u0434\u0443\u0442",
            ],
            past: [
              "\u0448\u0451\u043b",
              "\u0448\u043b\u0430",
              "\u0448\u043b\u0438",
            ],
            future: [
              "\u0431\u0443\u0434\u0443 \u0438\u0434\u0442\u0438",
              "\u0431\u0443\u0434\u0435\u0448\u044c \u0438\u0434\u0442\u0438",
              "\u0431\u0443\u0434\u0435\u0442 \u0438\u0434\u0442\u0438",
              "\u0431\u0443\u0434\u0435\u043c \u0438\u0434\u0442\u0438",
              "\u0431\u0443\u0434\u0435\u0442\u0435 \u0438\u0434\u0442\u0438",
              "\u0431\u0443\u0434\u0443\u0442 \u0438\u0434\u0442\u0438",
            ],
          },
        },
      },
      {
        id: "ru-de-verben-konjugation-a1-b1-1-5",
        source: "\u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u044c",
        targets: [
          { text: "kommen" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 5,
        forms: {
          conjugations: {
            present: [
              "\u043f\u0440\u0438\u0445\u043e\u0436\u0443",
              "\u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0448\u044c",
              "\u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442",
              "\u043f\u0440\u0438\u0445\u043e\u0434\u0438\u043c",
              "\u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u0435",
              "\u043f\u0440\u0438\u0445\u043e\u0434\u044f\u0442",
            ],
            past: [
              "\u043f\u0440\u0438\u0445\u043e\u0434\u0438\u043b",
              "\u043f\u0440\u0438\u0445\u043e\u0434\u0438\u043b\u0430",
              "\u043f\u0440\u0438\u0445\u043e\u0434\u0438\u043b\u0438",
            ],
            future: [
              "\u0431\u0443\u0434\u0443 \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0448\u044c \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u043c \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442\u0435 \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u044c",
            ],
          },
        },
      },
      {
        id: "ru-de-verben-konjugation-a1-b1-1-6",
        source: "\u0441\u043a\u0430\u0437\u0430\u0442\u044c",
        targets: [
          { text: "sagen" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 6,
        forms: {
          conjugations: {
            past: [
              "\u0441\u043a\u0430\u0437\u0430\u043b",
              "\u0441\u043a\u0430\u0437\u0430\u043b\u0430",
              "\u0441\u043a\u0430\u0437\u0430\u043b\u0438",
            ],
            future: [
              "\u0441\u043a\u0430\u0436\u0443",
              "\u0441\u043a\u0430\u0436\u0435\u0448\u044c",
              "\u0441\u043a\u0430\u0436\u0435\u0442",
              "\u0441\u043a\u0430\u0436\u0435\u043c",
              "\u0441\u043a\u0430\u0436\u0435\u0442\u0435",
              "\u0441\u043a\u0430\u0436\u0443\u0442",
            ],
          },
        },
      },
      {
        id: "ru-de-verben-konjugation-a1-b1-1-7",
        source: "\u0432\u0438\u0434\u0435\u0442\u044c",
        targets: [
          { text: "sehen" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 7,
        forms: {
          conjugations: {
            present: [
              "\u0432\u0438\u0436\u0443",
              "\u0432\u0438\u0434\u0438\u0448\u044c",
              "\u0432\u0438\u0434\u0438\u0442",
              "\u0432\u0438\u0434\u0438\u043c",
              "\u0432\u0438\u0434\u0438\u0442\u0435",
              "\u0432\u0438\u0434\u044f\u0442",
            ],
            past: [
              "\u0432\u0438\u0434\u0435\u043b",
              "\u0432\u0438\u0434\u0435\u043b\u0430",
              "\u0432\u0438\u0434\u0435\u043b\u0438",
            ],
            future: [
              "\u0431\u0443\u0434\u0443 \u0432\u0438\u0434\u0435\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0448\u044c \u0432\u0438\u0434\u0435\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442 \u0432\u0438\u0434\u0435\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u043c \u0432\u0438\u0434\u0435\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442\u0435 \u0432\u0438\u0434\u0435\u0442\u044c",
              "\u0431\u0443\u0434\u0443\u0442 \u0432\u0438\u0434\u0435\u0442\u044c",
            ],
          },
        },
      },
    ],
  },
  {
    id: "ru-de-verben-konjugation-a1-b1-2",
    title: "Verben Konjugation - geben & nehmen 2",
    languagePair: { from: "ru", to: "de" },
    category: "Verben",
    words: [
      {
        id: "ru-de-verben-konjugation-a1-b1-2-1",
        source: "\u0434\u0430\u0432\u0430\u0442\u044c",
        targets: [
          { text: "geben" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 8,
        forms: {
          conjugations: {
            present: [
              "\u0434\u0430\u044e",
              "\u0434\u0430\u0451\u0448\u044c",
              "\u0434\u0430\u0451\u0442",
              "\u0434\u0430\u0451\u043c",
              "\u0434\u0430\u0451\u0442\u0435",
              "\u0434\u0430\u044e\u0442",
            ],
            past: [
              "\u0434\u0430\u0432\u0430\u043b",
              "\u0434\u0430\u0432\u0430\u043b\u0430",
              "\u0434\u0430\u0432\u0430\u043b\u0438",
            ],
            future: [
              "\u0431\u0443\u0434\u0443 \u0434\u0430\u0432\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0448\u044c \u0434\u0430\u0432\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442 \u0434\u0430\u0432\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u043c \u0434\u0430\u0432\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442\u0435 \u0434\u0430\u0432\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0443\u0442 \u0434\u0430\u0432\u0430\u0442\u044c",
            ],
          },
        },
      },
      {
        id: "ru-de-verben-konjugation-a1-b1-2-2",
        source: "\u0431\u0440\u0430\u0442\u044c",
        targets: [
          { text: "nehmen" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 9,
        forms: {
          conjugations: {
            present: [
              "\u0431\u0435\u0440\u0443",
              "\u0431\u0435\u0440\u0451\u0448\u044c",
              "\u0431\u0435\u0440\u0451\u0442",
              "\u0431\u0435\u0440\u0451\u043c",
              "\u0431\u0435\u0440\u0451\u0442\u0435",
              "\u0431\u0435\u0440\u0443\u0442",
            ],
            past: [
              "\u0431\u0440\u0430\u043b",
              "\u0431\u0440\u0430\u043b\u0430",
              "\u0431\u0440\u0430\u043b\u0438",
            ],
            future: [
              "\u0431\u0443\u0434\u0443 \u0431\u0440\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0448\u044c \u0431\u0440\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442 \u0431\u0440\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u043c \u0431\u0440\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442\u0435 \u0431\u0440\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0443\u0442 \u0431\u0440\u0430\u0442\u044c",
            ],
          },
        },
      },
      {
        id: "ru-de-verben-konjugation-a1-b1-2-3",
        source: "\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c",
        targets: [
          { text: "finden" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 10,
        forms: {
          conjugations: {
            present: [
              "\u043d\u0430\u0445\u043e\u0436\u0443",
              "\u043d\u0430\u0445\u043e\u0434\u0438\u0448\u044c",
              "\u043d\u0430\u0445\u043e\u0434\u0438\u0442",
              "\u043d\u0430\u0445\u043e\u0434\u0438\u043c",
              "\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0435",
              "\u043d\u0430\u0445\u043e\u0434\u044f\u0442",
            ],
            past: [
              "\u043d\u0430\u0445\u043e\u0434\u0438\u043b",
              "\u043d\u0430\u0445\u043e\u0434\u0438\u043b\u0430",
              "\u043d\u0430\u0445\u043e\u0434\u0438\u043b\u0438",
            ],
            future: [
              "\u0431\u0443\u0434\u0443 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0448\u044c \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u043c \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0443\u0442 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c",
            ],
          },
        },
      },
      {
        id: "ru-de-verben-konjugation-a1-b1-2-4",
        source: "\u0434\u0443\u043c\u0430\u0442\u044c",
        targets: [
          { text: "denken" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 11,
        forms: {
          conjugations: {
            present: [
              "\u0434\u0443\u043c\u0430\u044e",
              "\u0434\u0443\u043c\u0430\u0435\u0448\u044c",
              "\u0434\u0443\u043c\u0430\u0435\u0442",
              "\u0434\u0443\u043c\u0430\u0435\u043c",
              "\u0434\u0443\u043c\u0430\u0435\u0442\u0435",
              "\u0434\u0443\u043c\u0430\u044e\u0442",
            ],
            past: [
              "\u0434\u0443\u043c\u0430\u043b",
              "\u0434\u0443\u043c\u0430\u043b\u0430",
              "\u0434\u0443\u043c\u0430\u043b\u0438",
            ],
            future: [
              "\u0431\u0443\u0434\u0443 \u0434\u0443\u043c\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0448\u044c \u0434\u0443\u043c\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442 \u0434\u0443\u043c\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u043c \u0434\u0443\u043c\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442\u0435 \u0434\u0443\u043c\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0443\u0442 \u0434\u0443\u043c\u0430\u0442\u044c",
            ],
          },
        },
      },
      {
        id: "ru-de-verben-konjugation-a1-b1-2-5",
        source: "\u0437\u043d\u0430\u0442\u044c",
        targets: [
          { text: "wissen" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 12,
        forms: {
          conjugations: {
            present: [
              "\u0437\u043d\u0430\u044e",
              "\u0437\u043d\u0430\u0435\u0448\u044c",
              "\u0437\u043d\u0430\u0435\u0442",
              "\u0437\u043d\u0430\u0435\u043c",
              "\u0437\u043d\u0430\u0435\u0442\u0435",
              "\u0437\u043d\u0430\u044e\u0442",
            ],
            past: [
              "\u0437\u043d\u0430\u043b",
              "\u0437\u043d\u0430\u043b\u0430",
              "\u0437\u043d\u0430\u043b\u0438",
            ],
            future: [
              "\u0431\u0443\u0434\u0443 \u0437\u043d\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0448\u044c \u0437\u043d\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442 \u0437\u043d\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u043c \u0437\u043d\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442\u0435 \u0437\u043d\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0443\u0442 \u0437\u043d\u0430\u0442\u044c",
            ],
          },
        },
      },
      {
        id: "ru-de-verben-konjugation-a1-b1-2-6",
        source: "\u043c\u043e\u0447\u044c",
        targets: [
          { text: "k\u00f6nnen" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 13,
        forms: {
          conjugations: {
            present: [
              "\u043c\u043e\u0433\u0443",
              "\u043c\u043e\u0436\u0435\u0448\u044c",
              "\u043c\u043e\u0436\u0435\u0442",
              "\u043c\u043e\u0436\u0435\u043c",
              "\u043c\u043e\u0436\u0435\u0442\u0435",
              "\u043c\u043e\u0433\u0443\u0442",
            ],
            past: [
              "\u043c\u043e\u0433",
              "\u043c\u043e\u0433\u043b\u0430",
              "\u043c\u043e\u0433\u043b\u0438",
            ],
            future: [
              "\u0441\u043c\u043e\u0433\u0443",
              "\u0441\u043c\u043e\u0436\u0435\u0448\u044c",
              "\u0441\u043c\u043e\u0436\u0435\u0442",
              "\u0441\u043c\u043e\u0436\u0435\u043c",
              "\u0441\u043c\u043e\u0436\u0435\u0442\u0435",
              "\u0441\u043c\u043e\u0433\u0443\u0442",
            ],
          },
        },
      },
      {
        id: "ru-de-verben-konjugation-a1-b1-2-7",
        source: "\u0445\u043e\u0442\u0435\u0442\u044c",
        targets: [
          { text: "wollen" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 14,
        forms: {
          conjugations: {
            present: [
              "\u0445\u043e\u0447\u0443",
              "\u0445\u043e\u0447\u0435\u0448\u044c",
              "\u0445\u043e\u0447\u0435\u0442",
              "\u0445\u043e\u0442\u0438\u043c",
              "\u0445\u043e\u0442\u0438\u0442\u0435",
              "\u0445\u043e\u0442\u044f\u0442",
            ],
            past: [
              "\u0445\u043e\u0442\u0435\u043b",
              "\u0445\u043e\u0442\u0435\u043b\u0430",
              "\u0445\u043e\u0442\u0435\u043b\u0438",
            ],
            future: [
              "\u0431\u0443\u0434\u0443 \u0445\u043e\u0442\u0435\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0448\u044c \u0445\u043e\u0442\u0435\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442 \u0445\u043e\u0442\u0435\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u043c \u0445\u043e\u0442\u0435\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442\u0435 \u0445\u043e\u0442\u0435\u0442\u044c",
              "\u0431\u0443\u0434\u0443\u0442 \u0445\u043e\u0442\u0435\u0442\u044c",
            ],
          },
        },
      },
    ],
  },
  {
    id: "ru-de-verben-konjugation-a1-b1-3",
    title: "Verben Konjugation - bleiben & fragen 3",
    languagePair: { from: "ru", to: "de" },
    category: "Verben",
    words: [
      {
        id: "ru-de-verben-konjugation-a1-b1-3-1",
        source: "\u043e\u0441\u0442\u0430\u0432\u0430\u0442\u044c\u0441\u044f",
        targets: [
          { text: "bleiben" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 15,
        forms: {
          conjugations: {
            present: [
              "\u043e\u0441\u0442\u0430\u044e\u0441\u044c",
              "\u043e\u0441\u0442\u0430\u0451\u0448\u044c\u0441\u044f",
              "\u043e\u0441\u0442\u0430\u0451\u0442\u0441\u044f",
              "\u043e\u0441\u0442\u0430\u0451\u043c\u0441\u044f",
              "\u043e\u0441\u0442\u0430\u0451\u0442\u0435\u0441\u044c",
              "\u043e\u0441\u0442\u0430\u044e\u0442\u0441\u044f",
            ],
            past: [
              "\u043e\u0441\u0442\u0430\u0432\u0430\u043b\u0441\u044f",
              "\u043e\u0441\u0442\u0430\u0432\u0430\u043b\u0430\u0441\u044c",
              "\u043e\u0441\u0442\u0430\u0432\u0430\u043b\u0438\u0441\u044c",
            ],
            future: [
              "\u0431\u0443\u0434\u0443 \u043e\u0441\u0442\u0430\u0432\u0430\u0442\u044c\u0441\u044f",
              "\u0431\u0443\u0434\u0435\u0448\u044c \u043e\u0441\u0442\u0430\u0432\u0430\u0442\u044c\u0441\u044f",
              "\u0431\u0443\u0434\u0435\u0442 \u043e\u0441\u0442\u0430\u0432\u0430\u0442\u044c\u0441\u044f",
              "\u0431\u0443\u0434\u0435\u043c \u043e\u0441\u0442\u0430\u0432\u0430\u0442\u044c\u0441\u044f",
              "\u0431\u0443\u0434\u0435\u0442\u0435 \u043e\u0441\u0442\u0430\u0432\u0430\u0442\u044c\u0441\u044f",
              "\u0431\u0443\u0434\u0443\u0442 \u043e\u0441\u0442\u0430\u0432\u0430\u0442\u044c\u0441\u044f",
            ],
          },
        },
      },
      {
        id: "ru-de-verben-konjugation-a1-b1-3-2",
        source: "\u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044c",
        targets: [
          { text: "fragen" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 16,
        forms: {
          conjugations: {
            present: [
              "\u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u044e",
              "\u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0448\u044c",
              "\u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442",
              "\u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c",
              "\u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442\u0435",
              "\u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u044e\u0442",
            ],
            past: [
              "\u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u043b",
              "\u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u043b\u0430",
              "\u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u043b\u0438",
            ],
            future: [
              "\u0431\u0443\u0434\u0443 \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0448\u044c \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442 \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u043c \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442\u0435 \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0443\u0442 \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044c",
            ],
          },
        },
      },
      {
        id: "ru-de-verben-konjugation-a1-b1-3-3",
        source: "\u043e\u0442\u0432\u0435\u0447\u0430\u0442\u044c",
        targets: [
          { text: "antworten" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 17,
        forms: {
          conjugations: {
            present: [
              "\u043e\u0442\u0432\u0435\u0447\u0430\u044e",
              "\u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0448\u044c",
              "\u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442",
              "\u043e\u0442\u0432\u0435\u0447\u0430\u0435\u043c",
              "\u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442\u0435",
              "\u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0442",
            ],
            past: [
              "\u043e\u0442\u0432\u0435\u0447\u0430\u043b",
              "\u043e\u0442\u0432\u0435\u0447\u0430\u043b\u0430",
              "\u043e\u0442\u0432\u0435\u0447\u0430\u043b\u0438",
            ],
            future: [
              "\u0431\u0443\u0434\u0443 \u043e\u0442\u0432\u0435\u0447\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0448\u044c \u043e\u0442\u0432\u0435\u0447\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u0432\u0435\u0447\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u043c \u043e\u0442\u0432\u0435\u0447\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0443\u0442 \u043e\u0442\u0432\u0435\u0447\u0430\u0442\u044c",
            ],
          },
        },
      },
      {
        id: "ru-de-verben-konjugation-a1-b1-3-4",
        source: "\u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c",
        targets: [
          { text: "beginnen" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 18,
        forms: {
          conjugations: {
            present: [
              "\u043d\u0430\u0447\u0438\u043d\u0430\u044e",
              "\u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0448\u044c",
              "\u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442",
              "\u043d\u0430\u0447\u0438\u043d\u0430\u0435\u043c",
              "\u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0435",
              "\u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0442",
            ],
            past: [
              "\u043d\u0430\u0447\u0438\u043d\u0430\u043b",
              "\u043d\u0430\u0447\u0438\u043d\u0430\u043b\u0430",
              "\u043d\u0430\u0447\u0438\u043d\u0430\u043b\u0438",
            ],
            future: [
              "\u0431\u0443\u0434\u0443 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0448\u044c \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u043c \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0443\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c",
            ],
          },
        },
      },
      {
        id: "ru-de-verben-konjugation-a1-b1-3-5",
        source: "\u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0442\u044c",
        targets: [
          { text: "beenden" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 19,
        forms: {
          conjugations: {
            present: [
              "\u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u044e",
              "\u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0435\u0448\u044c",
              "\u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0435\u0442",
              "\u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0435\u043c",
              "\u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0435\u0442\u0435",
              "\u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u044e\u0442",
            ],
            past: [
              "\u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u043b",
              "\u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u043b\u0430",
              "\u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u043b\u0438",
            ],
            future: [
              "\u0431\u0443\u0434\u0443 \u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0448\u044c \u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u043c \u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442\u0435 \u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0442\u044c",
            ],
          },
        },
      },
      {
        id: "ru-de-verben-konjugation-a1-b1-3-6",
        source: "\u043f\u044b\u0442\u0430\u0442\u044c\u0441\u044f",
        targets: [
          { text: "versuchen" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 20,
        forms: {
          conjugations: {
            present: [
              "\u043f\u044b\u0442\u0430\u044e\u0441\u044c",
              "\u043f\u044b\u0442\u0430\u0435\u0448\u044c\u0441\u044f",
              "\u043f\u044b\u0442\u0430\u0435\u0442\u0441\u044f",
              "\u043f\u044b\u0442\u0430\u0435\u043c\u0441\u044f",
              "\u043f\u044b\u0442\u0430\u0435\u0442\u0435\u0441\u044c",
              "\u043f\u044b\u0442\u0430\u044e\u0442\u0441\u044f",
            ],
            past: [
              "\u043f\u044b\u0442\u0430\u043b\u0441\u044f",
              "\u043f\u044b\u0442\u0430\u043b\u0430\u0441\u044c",
              "\u043f\u044b\u0442\u0430\u043b\u0438\u0441\u044c",
            ],
            future: [
              "\u0431\u0443\u0434\u0443 \u043f\u044b\u0442\u0430\u0442\u044c\u0441\u044f",
              "\u0431\u0443\u0434\u0435\u0448\u044c \u043f\u044b\u0442\u0430\u0442\u044c\u0441\u044f",
              "\u0431\u0443\u0434\u0435\u0442 \u043f\u044b\u0442\u0430\u0442\u044c\u0441\u044f",
              "\u0431\u0443\u0434\u0435\u043c \u043f\u044b\u0442\u0430\u0442\u044c\u0441\u044f",
              "\u0431\u0443\u0434\u0435\u0442\u0435 \u043f\u044b\u0442\u0430\u0442\u044c\u0441\u044f",
              "\u0431\u0443\u0434\u0443\u0442 \u043f\u044b\u0442\u0430\u0442\u044c\u0441\u044f",
            ],
          },
        },
      },
      {
        id: "ru-de-verben-konjugation-a1-b1-3-7",
        source: "\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c",
        targets: [
          { text: "benutzen" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 21,
        forms: {
          conjugations: {
            present: [
              "\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e",
              "\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0448\u044c",
              "\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442",
              "\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c",
              "\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435",
              "\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442",
            ],
            past: [
              "\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b",
              "\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0430",
              "\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0438",
            ],
            future: [
              "\u0431\u0443\u0434\u0443 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0448\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c",
            ],
          },
        },
      },
    ],
  },
  {
    id: "ru-de-verben-konjugation-a1-b1-4",
    title: "Verben Konjugation - lernen & h\u00f6ren 4",
    languagePair: { from: "ru", to: "de" },
    category: "Verben",
    words: [
      {
        id: "ru-de-verben-konjugation-a1-b1-4-1",
        source: "\u0443\u0447\u0438\u0442\u044c",
        targets: [
          { text: "lernen" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 22,
        forms: {
          conjugations: {
            present: [
              "\u0443\u0447\u0443",
              "\u0443\u0447\u0438\u0448\u044c",
              "\u0443\u0447\u0438\u0442",
              "\u0443\u0447\u0438\u043c",
              "\u0443\u0447\u0438\u0442\u0435",
              "\u0443\u0447\u0430\u0442",
            ],
            past: [
              "\u0443\u0447\u0438\u043b",
              "\u0443\u0447\u0438\u043b\u0430",
              "\u0443\u0447\u0438\u043b\u0438",
            ],
            future: [
              "\u0431\u0443\u0434\u0443 \u0443\u0447\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0448\u044c \u0443\u0447\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442 \u0443\u0447\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u043c \u0443\u0447\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442\u0435 \u0443\u0447\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0443\u0442 \u0443\u0447\u0438\u0442\u044c",
            ],
          },
        },
      },
      {
        id: "ru-de-verben-konjugation-a1-b1-4-2",
        source: "\u0441\u043b\u044b\u0448\u0430\u0442\u044c",
        targets: [
          { text: "h\u00f6ren" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 23,
        forms: {
          conjugations: {
            present: [
              "\u0441\u043b\u044b\u0448\u0443",
              "\u0441\u043b\u044b\u0448\u0438\u0448\u044c",
              "\u0441\u043b\u044b\u0448\u0438\u0442",
              "\u0441\u043b\u044b\u0448\u0438\u043c",
              "\u0441\u043b\u044b\u0448\u0438\u0442\u0435",
              "\u0441\u043b\u044b\u0448\u0430\u0442",
            ],
            past: [
              "\u0441\u043b\u044b\u0448\u0430\u043b",
              "\u0441\u043b\u044b\u0448\u0430\u043b\u0430",
              "\u0441\u043b\u044b\u0448\u0430\u043b\u0438",
            ],
            future: [
              "\u0431\u0443\u0434\u0443 \u0441\u043b\u044b\u0448\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0448\u044c \u0441\u043b\u044b\u0448\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442 \u0441\u043b\u044b\u0448\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u043c \u0441\u043b\u044b\u0448\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442\u0435 \u0441\u043b\u044b\u0448\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0443\u0442 \u0441\u043b\u044b\u0448\u0430\u0442\u044c",
            ],
          },
        },
      },
      {
        id: "ru-de-verben-konjugation-a1-b1-4-3",
        source: "\u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c",
        targets: [
          { text: "sprechen" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 24,
        forms: {
          conjugations: {
            present: [
              "\u0433\u043e\u0432\u043e\u0440\u044e",
              "\u0433\u043e\u0432\u043e\u0440\u0438\u0448\u044c",
              "\u0433\u043e\u0432\u043e\u0440\u0438\u0442",
              "\u0433\u043e\u0432\u043e\u0440\u0438\u043c",
              "\u0433\u043e\u0432\u043e\u0440\u0438\u0442\u0435",
              "\u0433\u043e\u0432\u043e\u0440\u044f\u0442",
            ],
            past: [
              "\u0433\u043e\u0432\u043e\u0440\u0438\u043b",
              "\u0433\u043e\u0432\u043e\u0440\u0438\u043b\u0430",
              "\u0433\u043e\u0432\u043e\u0440\u0438\u043b\u0438",
            ],
            future: [
              "\u0431\u0443\u0434\u0443 \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0448\u044c \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442 \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u043c \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442\u0435 \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0443\u0442 \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c",
            ],
          },
        },
      },
      {
        id: "ru-de-verben-konjugation-a1-b1-4-4",
        source: "\u0436\u0438\u0442\u044c",
        targets: [
          { text: "leben" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 25,
        forms: {
          conjugations: {
            present: [
              "\u0436\u0438\u0432\u0443",
              "\u0436\u0438\u0432\u0451\u0448\u044c",
              "\u0436\u0438\u0432\u0451\u0442",
              "\u0436\u0438\u0432\u0451\u043c",
              "\u0436\u0438\u0432\u0451\u0442\u0435",
              "\u0436\u0438\u0432\u0443\u0442",
            ],
            past: [
              "\u0436\u0438\u043b",
              "\u0436\u0438\u043b\u0430",
              "\u0436\u0438\u043b\u0438",
            ],
            future: [
              "\u0431\u0443\u0434\u0443 \u0436\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0448\u044c \u0436\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442 \u0436\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u043c \u0436\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442\u0435 \u0436\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0443\u0442 \u0436\u0438\u0442\u044c",
            ],
          },
        },
      },
      {
        id: "ru-de-verben-konjugation-a1-b1-4-5",
        source: "\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c",
        targets: [
          { text: "arbeiten" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 26,
        forms: {
          conjugations: {
            present: [
              "\u0440\u0430\u0431\u043e\u0442\u0430\u044e",
              "\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0448\u044c",
              "\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442",
              "\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u043c",
              "\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442\u0435",
              "\u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442",
            ],
            past: [
              "\u0440\u0430\u0431\u043e\u0442\u0430\u043b",
              "\u0440\u0430\u0431\u043e\u0442\u0430\u043b\u0430",
              "\u0440\u0430\u0431\u043e\u0442\u0430\u043b\u0438",
            ],
            future: [
              "\u0431\u0443\u0434\u0443 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0448\u044c \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u043c \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0443\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c",
            ],
          },
        },
      },
      {
        id: "ru-de-verben-konjugation-a1-b1-4-6",
        source: "\u0435\u0441\u0442\u044c",
        targets: [
          { text: "essen" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 27,
        forms: {
          conjugations: {
            present: [
              "\u0435\u043c",
              "\u0435\u0448\u044c",
              "\u0435\u0441\u0442",
              "\u0435\u0434\u0438\u043c",
              "\u0435\u0434\u0438\u0442\u0435",
              "\u0435\u0434\u044f\u0442",
            ],
            past: [
              "\u0435\u043b",
              "\u0435\u043b\u0430",
              "\u0435\u043b\u0438",
            ],
            future: [
              "\u0431\u0443\u0434\u0443 \u0435\u0441\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0448\u044c \u0435\u0441\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442 \u0435\u0441\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u043c \u0435\u0441\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442\u0435 \u0435\u0441\u0442\u044c",
              "\u0431\u0443\u0434\u0443\u0442 \u0435\u0441\u0442\u044c",
            ],
          },
        },
      },
      {
        id: "ru-de-verben-konjugation-a1-b1-4-7",
        source: "\u043f\u0438\u0442\u044c",
        targets: [
          { text: "trinken" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 28,
        forms: {
          conjugations: {
            present: [
              "\u043f\u044c\u044e",
              "\u043f\u044c\u0451\u0448\u044c",
              "\u043f\u044c\u0451\u0442",
              "\u043f\u044c\u0451\u043c",
              "\u043f\u044c\u0451\u0442\u0435",
              "\u043f\u044c\u044e\u0442",
            ],
            past: [
              "\u043f\u0438\u043b",
              "\u043f\u0438\u043b\u0430",
              "\u043f\u0438\u043b\u0438",
            ],
            future: [
              "\u0431\u0443\u0434\u0443 \u043f\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0448\u044c \u043f\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442 \u043f\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u043c \u043f\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442\u0435 \u043f\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0443\u0442 \u043f\u0438\u0442\u044c",
            ],
          },
        },
      },
    ],
  },
  {
    id: "ru-de-verben-konjugation-a1-b1-5",
    title: "Verben Konjugation - schlafen & fahren 5",
    languagePair: { from: "ru", to: "de" },
    category: "Verben",
    words: [
      {
        id: "ru-de-verben-konjugation-a1-b1-5-1",
        source: "\u0441\u043f\u0430\u0442\u044c",
        targets: [
          { text: "schlafen" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 29,
        forms: {
          conjugations: {
            present: [
              "\u0441\u043f\u043b\u044e",
              "\u0441\u043f\u0438\u0448\u044c",
              "\u0441\u043f\u0438\u0442",
              "\u0441\u043f\u0438\u043c",
              "\u0441\u043f\u0438\u0442\u0435",
              "\u0441\u043f\u044f\u0442",
            ],
            past: [
              "\u0441\u043f\u0430\u043b",
              "\u0441\u043f\u0430\u043b\u0430",
              "\u0441\u043f\u0430\u043b\u0438",
            ],
            future: [
              "\u0431\u0443\u0434\u0443 \u0441\u043f\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0448\u044c \u0441\u043f\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442 \u0441\u043f\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u043c \u0441\u043f\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442\u0435 \u0441\u043f\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0443\u0442 \u0441\u043f\u0430\u0442\u044c",
            ],
          },
        },
      },
      {
        id: "ru-de-verben-konjugation-a1-b1-5-2",
        source: "\u0435\u0445\u0430\u0442\u044c",
        targets: [
          { text: "fahren" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 30,
        forms: {
          conjugations: {
            present: [
              "\u0435\u0434\u0443",
              "\u0435\u0434\u0435\u0448\u044c",
              "\u0435\u0434\u0435\u0442",
              "\u0435\u0434\u0435\u043c",
              "\u0435\u0434\u0435\u0442\u0435",
              "\u0435\u0434\u0443\u0442",
            ],
            past: [
              "\u0435\u0445\u0430\u043b",
              "\u0435\u0445\u0430\u043b\u0430",
              "\u0435\u0445\u0430\u043b\u0438",
            ],
            future: [
              "\u0431\u0443\u0434\u0443 \u0435\u0445\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0448\u044c \u0435\u0445\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442 \u0435\u0445\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u043c \u0435\u0445\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442\u0435 \u0435\u0445\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0443\u0442 \u0435\u0445\u0430\u0442\u044c",
            ],
          },
        },
      },
      {
        id: "ru-de-verben-konjugation-a1-b1-5-3",
        source: "\u0435\u0437\u0434\u0438\u0442\u044c",
        targets: [
          { text: "fahren (regelm\u00e4\u00dfig)" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 31,
        forms: {
          conjugations: {
            present: [
              "\u0435\u0437\u0436\u0443",
              "\u0435\u0437\u0434\u0438\u0448\u044c",
              "\u0435\u0437\u0434\u0438\u0442",
              "\u0435\u0437\u0434\u0438\u043c",
              "\u0435\u0437\u0434\u0438\u0442\u0435",
              "\u0435\u0437\u0434\u044f\u0442",
            ],
            past: [
              "\u0435\u0437\u0434\u0438\u043b",
              "\u0435\u0437\u0434\u0438\u043b\u0430",
              "\u0435\u0437\u0434\u0438\u043b\u0438",
            ],
            future: [
              "\u0431\u0443\u0434\u0443 \u0435\u0437\u0434\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0448\u044c \u0435\u0437\u0434\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442 \u0435\u0437\u0434\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u043c \u0435\u0437\u0434\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442\u0435 \u0435\u0437\u0434\u0438\u0442\u044c",
              "\u0431\u0443\u0434\u0443\u0442 \u0435\u0437\u0434\u0438\u0442\u044c",
            ],
          },
        },
      },
      {
        id: "ru-de-verben-konjugation-a1-b1-5-4",
        source: "\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c",
        targets: [
          { text: "sehen (anschauen)" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 32,
        forms: {
          conjugations: {
            present: [
              "\u0441\u043c\u043e\u0442\u0440\u044e",
              "\u0441\u043c\u043e\u0442\u0440\u0438\u0448\u044c",
              "\u0441\u043c\u043e\u0442\u0440\u0438\u0442",
              "\u0441\u043c\u043e\u0442\u0440\u0438\u043c",
              "\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435",
              "\u0441\u043c\u043e\u0442\u0440\u044f\u0442",
            ],
            past: [
              "\u0441\u043c\u043e\u0442\u0440\u0435\u043b",
              "\u0441\u043c\u043e\u0442\u0440\u0435\u043b\u0430",
              "\u0441\u043c\u043e\u0442\u0440\u0435\u043b\u0438",
            ],
            future: [
              "\u0431\u0443\u0434\u0443 \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0448\u044c \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442 \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u043c \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442\u0435 \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c",
              "\u0431\u0443\u0434\u0443\u0442 \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c",
            ],
          },
        },
      },
      {
        id: "ru-de-verben-konjugation-a1-b1-5-5",
        source: "\u0441\u043b\u0443\u0448\u0430\u0442\u044c",
        targets: [
          { text: "h\u00f6ren (zuh\u00f6ren)" },
        ],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 33,
        forms: {
          conjugations: {
            present: [
              "\u0441\u043b\u0443\u0448\u0430\u044e",
              "\u0441\u043b\u0443\u0448\u0430\u0435\u0448\u044c",
              "\u0441\u043b\u0443\u0448\u0430\u0435\u0442",
              "\u0441\u043b\u0443\u0448\u0430\u0435\u043c",
              "\u0441\u043b\u0443\u0448\u0430\u0435\u0442\u0435",
              "\u0441\u043b\u0443\u0448\u0430\u044e\u0442",
            ],
            past: [
              "\u0441\u043b\u0443\u0448\u0430\u043b",
              "\u0441\u043b\u0443\u0448\u0430\u043b\u0430",
              "\u0441\u043b\u0443\u0448\u0430\u043b\u0438",
            ],
            future: [
              "\u0431\u0443\u0434\u0443 \u0441\u043b\u0443\u0448\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0448\u044c \u0441\u043b\u0443\u0448\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442 \u0441\u043b\u0443\u0448\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u043c \u0441\u043b\u0443\u0448\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0435\u0442\u0435 \u0441\u043b\u0443\u0448\u0430\u0442\u044c",
              "\u0431\u0443\u0434\u0443\u0442 \u0441\u043b\u0443\u0448\u0430\u0442\u044c",
            ],
          },
        },
      },
    ],
  },
];
