export type LanguageCode = "ru" | "de" | "en";
export type Tense = "present" | "past" | "future";

export type WordEntry = {
  id: string;
  source: string; // Russisch (Kyrillisch) als \\uXXXX
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
    id: "ru-de-basics-1",
    title: "Grundlagen 1",
    languagePair: { from: "ru", to: "de" },
    category: "Grundlagen",
    words: [
      { id: "privet", source: "\u043f\u0440\u0438\u0432\u0435\u0442", translit: "privet", targets: [{ text: "hallo", note: "informell" }], partOfSpeech: "phrase", category: "Grundlagen", frequencyRank: 20 },
      { id: "spasibo", source: "\u0441\u043f\u0430\u0441\u0438\u0431\u043e", translit: "spasibo", targets: [{ text: "danke" }], partOfSpeech: "phrase", category: "Grundlagen", frequencyRank: 25 },
      { id: "pozhaluysta", source: "\u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430", translit: "pozhaluysta", targets: [{ text: "bitte", note: "als Antwort auf Danke" }, { text: "bitte", note: "hoefliche Bitte" }], partOfSpeech: "phrase", category: "Grundlagen", frequencyRank: 35 },
      { id: "da", source: "\u0434\u0430", translit: "da", targets: [{ text: "ja" }], partOfSpeech: "phrase", category: "Grundlagen", frequencyRank: 10 },
      { id: "net", source: "\u043d\u0435\u0442", translit: "nyet", targets: [{ text: "nein" }], partOfSpeech: "phrase", category: "Grundlagen", frequencyRank: 12 },
      { id: "gde", source: "\u0433\u0434\u0435", translit: "gde", targets: [{ text: "wo" }], partOfSpeech: "adv", category: "Grundlagen", frequencyRank: 40 },
      { id: "skolko", source: "\u0441\u043a\u043e\u043b\u044c\u043a\u043e", translit: "skolko", targets: [{ text: "wie viel" }], partOfSpeech: "adv", category: "Grundlagen", frequencyRank: 70 },
    ],
  },
  {
    id: "ru-de-basics-2",
    title: "Grundlagen 2",
    languagePair: { from: "ru", to: "de" },
    category: "Grundlagen",
    words: [
      { id: "dobroe-utro", source: "\u0434\u043e\u0431\u0440\u043e\u0435 \u0443\u0442\u0440\u043e", translit: "dobroye utro", targets: [{ text: "guten Morgen" }], partOfSpeech: "phrase", category: "Grundlagen", frequencyRank: 85 },
      { id: "dobryy-vecher", source: "\u0434\u043e\u0431\u0440\u044b\u0439 \u0432\u0435\u0447\u0435\u0440", translit: "dobryy vecher", targets: [{ text: "guten Abend" }], partOfSpeech: "phrase", category: "Grundlagen", frequencyRank: 88 },
      { id: "spokoynoy-nochi", source: "\u0441\u043f\u043e\u043a\u043e\u0439\u043d\u043e\u0439 \u043d\u043e\u0447\u0438", translit: "spokoynoy nochi", targets: [{ text: "gute Nacht" }], partOfSpeech: "phrase", category: "Grundlagen", frequencyRank: 90 },
      { id: "menya-zovut", source: "\u043c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442", translit: "menya zovut", targets: [{ text: "ich heisse" }], partOfSpeech: "phrase", category: "Grundlagen", frequencyRank: 82 },
      { id: "ya-ne-ponimayu", source: "\u044f \u043d\u0435 \u043f\u043e\u043d\u0438\u043c\u0430\u044e", translit: "ya ne ponimayu", targets: [{ text: "ich verstehe nicht" }], partOfSpeech: "phrase", category: "Grundlagen", frequencyRank: 93 },
      { id: "esli-mozhno", source: "\u0435\u0441\u043b\u0438 \u043c\u043e\u0436\u043d\u043e", translit: "yesli mozhno", targets: [{ text: "falls moeglich", note: "hoefliche Bitte" }], partOfSpeech: "phrase", category: "Grundlagen", frequencyRank: 140 },
      { id: "rabota", source: "\u0440\u0430\u0431\u043e\u0442\u0430", translit: "rabota", targets: [{ text: "Arbeit", note: "auch Taetigkeit" }], partOfSpeech: "noun", category: "Grundlagen", frequencyRank: 50 },
    ],
  },
  {
    id: "ru-de-reise-1",
    title: "Reise & Orientierung",
    languagePair: { from: "ru", to: "de" },
    category: "Reisen",
    words: [
      { id: "vokzal", source: "\u0432\u043e\u043a\u0437\u0430\u043b", translit: "vokzal", targets: [{ text: "Bahnhof" }], partOfSpeech: "noun", category: "Reisen", frequencyRank: 120 },
      { id: "aeroport", source: "\u0430\u044d\u0440\u043e\u043f\u043e\u0440\u0442", translit: "aeroport", targets: [{ text: "Flughafen" }], partOfSpeech: "noun", category: "Reisen", frequencyRank: 130 },
      { id: "bilet", source: "\u0431\u0438\u043b\u0435\u0442", translit: "bilet", targets: [{ text: "Ticket" }, { text: "Fahrschein", note: "Bahn/Bus" }], partOfSpeech: "noun", category: "Reisen", frequencyRank: 95 },
      { id: "poezd", source: "\u043f\u043e\u0435\u0437\u0434", translit: "poezd", targets: [{ text: "Zug" }], partOfSpeech: "noun", category: "Reisen", frequencyRank: 140 },
      { id: "vykhod", source: "\u0432\u044b\u0445\u043e\u0434", translit: "vykhod", targets: [{ text: "Ausgang" }, { text: "Ausfahrt", note: "auch Exit" }], partOfSpeech: "noun", category: "Reisen", frequencyRank: 110 },
      { id: "povernite", source: "\u043f\u043e\u0432\u0435\u0440\u043d\u0438\u0442\u0435", translit: "povernite", targets: [{ text: "biegen Sie ab" }], partOfSpeech: "verb", category: "Reisen", frequencyRank: 260, usage: "Imperativ von \u043f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u044c." },
      { id: "pryamo", source: "\u043f\u0440\u044f\u043c\u043e", translit: "pryamo", targets: [{ text: "geradeaus" }], partOfSpeech: "adv", category: "Reisen", frequencyRank: 180 },
      { id: "daleko", source: "\u0434\u0430\u043b\u0435\u043a\u043e", translit: "daleko", targets: [{ text: "weit weg" }], partOfSpeech: "adv", category: "Reisen", frequencyRank: 175 },
      { id: "bronirovat", source: "\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c", translit: "bronirovat", targets: [{ text: "reservieren" }], partOfSpeech: "verb", category: "Reisen", frequencyRank: 270 },
    ],
  },
  {
    id: "ru-de-verben-1",
    title: "Verben 1",
    languagePair: { from: "ru", to: "de" },
    category: "Verben",
    words: [
      {
        id: "govorit",
        source: "\u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c",
        translit: "govorit",
        targets: [{ text: "sprechen" }, { text: "sagen" }],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 28,
        usage: "Kontext entscheidet 'sagen' vs. 'reden'.",
        forms: {
          irregular: "1. Sg: \u0433\u043e\u0432\u043e\u0440\u044e, 2. Sg: \u0433\u043e\u0432\u043e\u0440\u0438\u0448\u044c",
          conjugations: {
            present: ["\u044f \u0433\u043e\u0432\u043e\u0440\u044e", "\u0442\u044b \u0433\u043e\u0432\u043e\u0440\u0438\u0448\u044c", "\u043e\u043d \u0433\u043e\u0432\u043e\u0440\u0438\u0442", "\u043c\u044b \u0433\u043e\u0432\u043e\u0440\u0438\u043c", "\u0432\u044b \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u0435", "\u043e\u043d\u0438 \u0433\u043e\u0432\u043e\u0440\u044f\u0442"],
            past: ["\u044f \u0433\u043e\u0432\u043e\u0440\u0438\u043b", "\u044f \u0433\u043e\u0432\u043e\u0440\u0438\u043b\u0430", "\u043e\u043d\u0438 \u0433\u043e\u0432\u043e\u0440\u0438\u043b\u0438"],
            future: ["\u044f \u0431\u0443\u0434\u0443 \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c", "\u0442\u044b \u0431\u0443\u0434\u0435\u0448\u044c \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c", "\u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c", "\u043c\u044b \u0431\u0443\u0434\u0435\u043c \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c", "\u0432\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c", "\u043e\u043d\u0438 \u0431\u0443\u0434\u0443\u0442 \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c"],
          },
        },
        examples: ["\u042f \u0433\u043e\u0432\u043e\u0440\u044e \u043f\u043e-\u0440\u0443\u0441\u0441\u043a\u0438. = Ich spreche Russisch."],
      },
      {
        id: "ponimat",
        source: "\u043f\u043e\u043d\u0438\u043c\u0430\u0442\u044c",
        translit: "ponimat",
        targets: [{ text: "verstehen" }],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 45,
        forms: {
          irregular: "Perfektiv: \u043f\u043e\u043d\u044f\u0442\u044c (\u043f\u043e\u043d\u044f\u043b, \u043f\u043e\u043d\u044f\u043b\u0430).",
          conjugations: {
            present: ["\u044f \u043f\u043e\u043d\u0438\u043c\u0430\u044e", "\u0442\u044b \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0448\u044c", "\u043e\u043d \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442", "\u043c\u044b \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u043c", "\u0432\u044b \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442\u0435", "\u043e\u043d\u0438 \u043f\u043e\u043d\u0438\u043c\u0430\u044e\u0442"],
            past: ["\u044f \u043f\u043e\u043d\u0438\u043c\u0430\u043b", "\u044f \u043f\u043e\u043d\u0438\u043c\u0430\u043b\u0430", "\u043e\u043d\u0438 \u043f\u043e\u043d\u0438\u043c\u0430\u043b\u0438"],
            future: ["\u044f \u0431\u0443\u0434\u0443 \u043f\u043e\u043d\u0438\u043c\u0430\u0442\u044c", "\u0442\u044b \u0431\u0443\u0434\u0435\u0448\u044c \u043f\u043e\u043d\u0438\u043c\u0430\u0442\u044c", "\u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043d\u0438\u043c\u0430\u0442\u044c", "\u043c\u044b \u0431\u0443\u0434\u0435\u043c \u043f\u043e\u043d\u0438\u043c\u0430\u0442\u044c", "\u0432\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u043f\u043e\u043d\u0438\u043c\u0430\u0442\u044c", "\u043e\u043d\u0438 \u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u043d\u0438\u043c\u0430\u0442\u044c"],
          },
        },
      },
      {
        id: "delat",
        source: "\u0434\u0435\u043b\u0430\u0442\u044c",
        translit: "delat",
        targets: [{ text: "machen" }, { text: "tun", note: "neutral" }],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 32,
        forms: {
          conjugations: {
            present: ["\u044f \u0434\u0435\u043b\u0430\u044e", "\u0442\u044b \u0434\u0435\u043b\u0430\u0435\u0448\u044c", "\u043e\u043d \u0434\u0435\u043b\u0430\u0435\u0442", "\u043c\u044b \u0434\u0435\u043b\u0430\u0435\u043c", "\u0432\u044b \u0434\u0435\u043b\u0430\u0435\u0442\u0435", "\u043e\u043d\u0438 \u0434\u0435\u043b\u0430\u044e\u0442"],
            past: ["\u044f \u0434\u0435\u043b\u0430\u043b", "\u044f \u0434\u0435\u043b\u0430\u043b\u0430", "\u043e\u043d\u0438 \u0434\u0435\u043b\u0430\u043b\u0438"],
            future: ["\u044f \u0431\u0443\u0434\u0443 \u0434\u0435\u043b\u0430\u0442\u044c", "\u0442\u044b \u0431\u0443\u0434\u0435\u0448\u044c \u0434\u0435\u043b\u0430\u0442\u044c", "\u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u0434\u0435\u043b\u0430\u0442\u044c", "\u043c\u044b \u0431\u0443\u0434\u0435\u043c \u0434\u0435\u043b\u0430\u0442\u044c", "\u0432\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u0434\u0435\u043b\u0430\u0442\u044c", "\u043e\u043d\u0438 \u0431\u0443\u0434\u0443\u0442 \u0434\u0435\u043b\u0430\u0442\u044c"],
          },
        },
      },
      {
        id: "khodit",
        source: "\u0445\u043e\u0434\u0438\u0442\u044c",
        translit: "khodit",
        targets: [{ text: "gehen" }, { text: "laufen", note: "zu Fuss" }],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 50,
        usage: "Unbestimmt (hin und zurueck). Gerichtet: \u0438\u0434\u0442\u0438.",
        forms: {
          conjugations: {
            present: ["\u044f \u0445\u043e\u0436\u0443", "\u0442\u044b \u0445\u043e\u0434\u0438\u0448\u044c", "\u043e\u043d \u0445\u043e\u0434\u0438\u0442", "\u043c\u044b \u0445\u043e\u0434\u0438\u043c", "\u0432\u044b \u0445\u043e\u0434\u0438\u0442\u0435", "\u043e\u043d\u0438 \u0445\u043e\u0434\u044f\u0442"],
            past: ["\u044f \u0445\u043e\u0434\u0438\u043b", "\u044f \u0445\u043e\u0434\u0438\u043b\u0430", "\u043e\u043d\u0438 \u0445\u043e\u0434\u0438\u043b\u0438"],
            future: ["\u044f \u0431\u0443\u0434\u0443 \u0445\u043e\u0434\u0438\u0442\u044c", "\u0442\u044b \u0431\u0443\u0434\u0435\u0448\u044c \u0445\u043e\u0434\u0438\u0442\u044c", "\u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u0445\u043e\u0434\u0438\u0442\u044c", "\u043c\u044b \u0431\u0443\u0434\u0435\u043c \u0445\u043e\u0434\u0438\u0442\u044c", "\u0432\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u0445\u043e\u0434\u0438\u0442\u044c", "\u043e\u043d\u0438 \u0431\u0443\u0434\u0443\u0442 \u0445\u043e\u0434\u0438\u0442\u044c"],
          },
        },
      },
      {
        id: "idti",
        source: "\u0438\u0434\u0442\u0438",
        translit: "idti",
        targets: [{ text: "gehen", note: "gerichtet" }],
        partOfSpeech: "verb",
        category: "Verben",
        frequencyRank: 22,
        forms: {
          irregular: "\u044f \u0438\u0434\u0443, \u0442\u044b \u0438\u0434\u0451\u0448\u044c",
          conjugations: {
            present: ["\u044f \u0438\u0434\u0443", "\u0442\u044b \u0438\u0434\u0451\u0448\u044c", "\u043e\u043d \u0438\u0434\u0451\u0442", "\u043c\u044b \u0438\u0434\u0451\u043c", "\u0432\u044b \u0438\u0434\u0451\u0442\u0435", "\u043e\u043d\u0438 \u0438\u0434\u0443\u0442"],
            past: ["\u044f \u0448\u0451\u043b", "\u044f \u0448\u043b\u0430", "\u043e\u043d\u0438 \u0448\u043b\u0438"],
            future: ["\u044f \u043f\u043e\u0439\u0434\u0443", "\u0442\u044b \u043f\u043e\u0439\u0434\u0451\u0448\u044c", "\u043e\u043d \u043f\u043e\u0439\u0434\u0451\u0442", "\u043c\u044b \u043f\u043e\u0439\u0434\u0451\u043c", "\u0432\u044b \u043f\u043e\u0439\u0434\u0451\u0442\u0435", "\u043e\u043d\u0438 \u043f\u043e\u0439\u0434\u0443\u0442"],
          },
        },
      },
    ],
  },
  {
    id: "ru-de-familie-1",
    title: "Familie",
    languagePair: { from: "ru", to: "de" },
    category: "Familie",
    words: [
      { id: "semya", source: "\u0441\u0435\u043c\u044c\u044f", translit: "semya", targets: [{ text: "Familie" }], partOfSpeech: "noun", category: "Familie", frequencyRank: 60 },
      { id: "rebenok", source: "\u0440\u0435\u0431\u0451\u043d\u043e\u043a", translit: "rebyonok", targets: [{ text: "Kind" }], partOfSpeech: "noun", category: "Familie", frequencyRank: 80 },
      { id: "drug", source: "\u0434\u0440\u0443\u0433", translit: "drug", targets: [{ text: "Freund" }], partOfSpeech: "noun", category: "Familie", frequencyRank: 52 },
      { id: "brat", source: "\u0431\u0440\u0430\u0442", translit: "brat", targets: [{ text: "Bruder" }], partOfSpeech: "noun", category: "Familie", frequencyRank: 91 },
      { id: "sestra", source: "\u0441\u0435\u0441\u0442\u0440\u0430", translit: "sestra", targets: [{ text: "Schwester" }], partOfSpeech: "noun", category: "Familie", frequencyRank: 92 },
    ],
  },
];
