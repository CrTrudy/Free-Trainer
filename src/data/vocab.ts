export type LanguageCode = "ru" | "de" | "en";
export type Tense = "present" | "past" | "future";

export type WordEntry = {
  id: string;
  source: string;
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

export const lessons: Lesson[] = [
  {
    id: "ru-de-basics-1",
    title: "Grundlagen 1",
    languagePair: { from: "ru", to: "de" },
    category: "Grundlagen",
    words: [
      { id: "privet", source: "привет", translit: "privet", targets: [{ text: "hallo", note: "informell" }], partOfSpeech: "phrase", category: "Grundlagen", frequencyRank: 20 },
      { id: "spasibo", source: "спасибо", translit: "spasibo", targets: [{ text: "danke" }], partOfSpeech: "phrase", category: "Grundlagen", frequencyRank: 25 },
      { id: "pozhaluysta", source: "пожалуйста", translit: "pozhaluysta", targets: [{ text: "bitte", note: "als Antwort auf Danke" }, { text: "bitte", note: "höfliche Bitte" }], partOfSpeech: "phrase", category: "Grundlagen", frequencyRank: 35 },
      { id: "da", source: "да", translit: "da", targets: [{ text: "ja" }], partOfSpeech: "phrase", category: "Grundlagen", frequencyRank: 10 },
      { id: "net", source: "нет", translit: "nyet", targets: [{ text: "nein" }], partOfSpeech: "phrase", category: "Grundlagen", frequencyRank: 12 },
      { id: "horosho", source: "хорошо", translit: "khorosho", targets: [{ text: "gut" }, { text: "okay", note: "als Zustimmung" }], partOfSpeech: "adv", category: "Grundlagen", frequencyRank: 30 },
      { id: "ploho", source: "плохо", translit: "plokho", targets: [{ text: "schlecht" }], partOfSpeech: "adv", category: "Grundlagen", frequencyRank: 55 },
      { id: "izvinite", source: "извините", translit: "izvinite", targets: [{ text: "entschuldigen Sie" }, { text: "verzeihen Sie" }], partOfSpeech: "phrase", category: "Grundlagen", frequencyRank: 60, usage: "Höfliche Form; informell: извини." },
      { id: "gde", source: "где", translit: "gde", targets: [{ text: "wo" }], partOfSpeech: "adv", category: "Grundlagen", frequencyRank: 40 },
      { id: "skolko", source: "сколько", translit: "skolko", targets: [{ text: "wie viel" }], partOfSpeech: "adv", category: "Grundlagen", frequencyRank: 70 }
    ],
  },
  {
    id: "ru-de-basics-2",
    title: "Grundlagen 2",
    languagePair: { from: "ru", to: "de" },
    category: "Grundlagen",
    words: [
      { id: "dobroe-utro", source: "доброе утро", translit: "dobroye utro", targets: [{ text: "guten Morgen" }], partOfSpeech: "phrase", category: "Grundlagen", frequencyRank: 85 },
      { id: "dobryy-vecher", source: "добрый вечер", translit: "dobryy vecher", targets: [{ text: "guten Abend" }], partOfSpeech: "phrase", category: "Grundlagen", frequencyRank: 88 },
      { id: "spokoynoy-nochi", source: "спокойной ночи", translit: "spokoynoy nochi", targets: [{ text: "gute Nacht" }], partOfSpeech: "phrase", category: "Grundlagen", frequencyRank: 90 },
      { id: "menya-zovut", source: "меня зовут", translit: "menya zovut", targets: [{ text: "ich heiße" }], partOfSpeech: "phrase", category: "Grundlagen", frequencyRank: 82 },
      { id: "skazhite-pozhaluysta", source: "скажите, пожалуйста", translit: "skazhite, pozhaluysta", targets: [{ text: "sagen Sie bitte" }], partOfSpeech: "phrase", category: "Grundlagen", frequencyRank: 92 },
      { id: "ya-ne-ponimayu", source: "я не понимаю", translit: "ya ne ponimayu", targets: [{ text: "ich verstehe nicht" }], partOfSpeech: "phrase", category: "Grundlagen", frequencyRank: 93 },
      { id: "esli-mozhno", source: "если можно", translit: "yesli mozhno", targets: [{ text: "falls möglich", note: "höfliche Bitte" }], partOfSpeech: "phrase", category: "Grundlagen", frequencyRank: 140 },
      { id: "eto-ideya", source: "хорошая идея", translit: "khoroshaya ideya", targets: [{ text: "gute Idee" }], partOfSpeech: "phrase", category: "Grundlagen", frequencyRank: 145 },
      { id: "rabota", source: "работа", translit: "rabota", targets: [{ text: "Arbeit", note: "auch Tätigkeit" }], partOfSpeech: "noun", category: "Grundlagen", frequencyRank: 50 },
      { id: "vopros", source: "вопрос", translit: "vopros", targets: [{ text: "Frage" }], partOfSpeech: "noun", category: "Grundlagen", frequencyRank: 46 }
    ],
  },
  {
    id: "ru-de-reise-1",
    title: "Reise & Orientierung 1",
    languagePair: { from: "ru", to: "de" },
    category: "Reisen",
    words: [
      { id: "vokzal", source: "вокзал", translit: "vokzal", targets: [{ text: "Bahnhof" }], partOfSpeech: "noun", category: "Reisen", frequencyRank: 120 },
      { id: "aeroport", source: "аэропорт", translit: "aeroport", targets: [{ text: "Flughafen" }], partOfSpeech: "noun", category: "Reisen", frequencyRank: 130 },
      { id: "bilet", source: "билет", translit: "bilet", targets: [{ text: "Ticket" }, { text: "Fahrschein", note: "Bahn/Bus" }], partOfSpeech: "noun", category: "Reisen", frequencyRank: 95 },
      { id: "poezd", source: "поезд", translit: "poezd", targets: [{ text: "Zug" }], partOfSpeech: "noun", category: "Reisen", frequencyRank: 140 },
      { id: "posadka", source: "посадка", translit: "posadka", targets: [{ text: "Boarding", note: "Einsteigen" }], partOfSpeech: "noun", category: "Reisen", frequencyRank: 210 },
      { id: "vykhod", source: "выход", translit: "vykhod", targets: [{ text: "Ausgang" }, { text: "Ausfahrt", note: "auch Exit" }], partOfSpeech: "noun", category: "Reisen", frequencyRank: 110 },
      { id: "perekhod", source: "переход", translit: "perekhod", targets: [{ text: "Übergang", note: "Umstieg/Fußgänger" }], partOfSpeech: "noun", category: "Reisen", frequencyRank: 250 },
      { id: "povernite", source: "поверните", translit: "povernite", targets: [{ text: "biegen Sie ab" }], partOfSpeech: "verb", category: "Reisen", frequencyRank: 260, usage: "Imperativ von повернуть." },
      { id: "pryamo", source: "прямо", translit: "pryamo", targets: [{ text: "geradeaus" }], partOfSpeech: "adv", category: "Reisen", frequencyRank: 180 },
      { id: "bronirovat", source: "бронировать", translit: "bronirovat", targets: [{ text: "reservieren" }], partOfSpeech: "verb", category: "Reisen", frequencyRank: 270 }
    ],
  },
  {
    id: "ru-de-reise-2",
    title: "Reise & Orientierung 2",
    languagePair: { from: "ru", to: "de" },
    category: "Reisen",
    words: [
      { id: "marshrutka", source: "маршрутка", translit: "marshrutka", targets: [{ text: "Minibus", note: "Sammeltaxi" }], partOfSpeech: "noun", category: "Reisen", frequencyRank: 320 },
      { id: "ostanovka", source: "остановка", translit: "ostanovka", targets: [{ text: "Haltestelle" }], partOfSpeech: "noun", category: "Reisen", frequencyRank: 210 },
      { id: "raspisanie", source: "расписание", translit: "raspisaniye", targets: [{ text: "Fahrplan" }], partOfSpeech: "noun", category: "Reisen", frequencyRank: 260 },
      { id: "gate-posadka", source: "выход на посадку", translit: "vykhod na posadku", targets: [{ text: "Gate", note: "Boarding-Ausgang" }], partOfSpeech: "phrase", category: "Reisen", frequencyRank: 280 },
      { id: "bagazh", source: "багаж", translit: "bagazh", targets: [{ text: "Gepäck" }], partOfSpeech: "noun", category: "Reisen", frequencyRank: 240 },
      { id: "strahovka", source: "страховка", translit: "strakhovka", targets: [{ text: "Versicherung" }], partOfSpeech: "noun", category: "Reisen", frequencyRank: 260 },
      { id: "oplata", source: "оплата", translit: "oplata", targets: [{ text: "Bezahlung" }], partOfSpeech: "noun", category: "Reisen", frequencyRank: 230 },
      { id: "nalichnye", source: "наличные", translit: "nalichnye", targets: [{ text: "bar", note: "bar bezahlen" }], partOfSpeech: "adv", category: "Reisen", frequencyRank: 310 },
      { id: "kartoy", source: "картой", translit: "kartoy", targets: [{ text: "mit Karte", note: "bezahlen" }], partOfSpeech: "adv", category: "Reisen", frequencyRank: 315 }
    ],
  },
  {
    id: "ru-de-verben-1",
    title: "Häufige Verben 1",
    languagePair: { from: "ru", to: "de" },
    category: "Verben",
    words: [
      { id: "govorit", source: "говорить", translit: "govorit", targets: [{ text: "sprechen" }, { text: "sagen" }], partOfSpeech: "verb", category: "Verben", frequencyRank: 28, forms: { irregular: "1. Sg: говорю, 2. Sg: говоришь", conjugations: { present: ["я говорю", "ты говоришь", "он говорит", "мы говорим", "вы говорите", "они говорят"], past: ["я говорил", "я говорила", "они говорили"], future: ["я буду говорить", "ты будешь говорить", "он будет говорить", "мы будем говорить", "вы будете говорить", "они будут говорить"] } } },
      { id: "ponimat", source: "понимать", translit: "ponimat", targets: [{ text: "verstehen" }], partOfSpeech: "verb", category: "Verben", frequencyRank: 45, forms: { conjugations: { present: ["я понимаю", "ты понимаешь", "он понимает", "мы понимаем", "вы понимаете", "они понимают"], past: ["я понимал", "я понимала", "они понимали"], future: ["я буду понимать", "ты будешь понимать", "он будет понимать", "мы будем понимать", "вы будете понимать", "они будут понимать"] } } },
      { id: "delat", source: "делать", translit: "delat", targets: [{ text: "machen" }], partOfSpeech: "verb", category: "Verben", frequencyRank: 32, forms: { conjugations: { present: ["я делаю", "ты делаешь", "он делает", "мы делаем", "вы делаете", "они делают"], past: ["я делал", "я делала", "они делали"], future: ["я буду делать", "ты будешь делать", "он будет делать", "мы будем делать", "вы будете делать", "они будут делать"] } } },
      { id: "khodit", source: "ходить", translit: "khodit", targets: [{ text: "gehen" }, { text: "laufen", note: "zu Fuß" }], partOfSpeech: "verb", category: "Verben", frequencyRank: 50, usage: "Unbestimmte Bewegung (hin und zurück). Gerichtet: идти.", forms: { conjugations: { present: ["я хожу", "ты ходишь", "он ходит", "мы ходим", "вы ходите", "они ходят"], past: ["я ходил", "я ходила", "они ходили"], future: ["я буду ходить", "ты будешь ходить", "он будет ходить", "мы будем ходить", "вы будете ходить", "они будут ходить"] } } },
      { id: "idti", source: "идти", translit: "idti", targets: [{ text: "gehen", note: "gerichtet" }], partOfSpeech: "verb", category: "Verben", frequencyRank: 22, forms: { irregular: "я иду, ты идёшь", conjugations: { present: ["я иду", "ты идёшь", "он идёт", "мы идём", "вы идёте", "они идут"], past: ["я шёл", "я шла", "они шли"], future: ["я пойду", "ты пойдёшь", "он пойдёт", "мы пойдём", "вы пойдёте", "они пойдут"] } } },
      { id: "smotret", source: "смотреть", translit: "smotret", targets: [{ text: "sehen" }, { text: "schauen" }], partOfSpeech: "verb", category: "Verben", frequencyRank: 38, forms: { conjugations: { present: ["я смотрю", "ты смотришь", "он смотрит", "мы смотрим", "вы смотрите", "они смотрят"], past: ["я смотрел", "я смотрела", "они смотрели"], future: ["я буду смотреть", "ты будешь смотреть", "он будет смотреть", "мы будем смотреть", "вы будете смотреть", "они будут смотреть"] } } },
      { id: "chitat", source: "читать", translit: "chitat", targets: [{ text: "lesen" }], partOfSpeech: "verb", category: "Verben", frequencyRank: 85, forms: { conjugations: { present: ["я читаю", "ты читаешь", "он читает", "мы читаем", "вы читаете", "они читают"], past: ["я читал", "я читала", "они читали"], future: ["я буду читать", "ты будешь читать", "он будет читать", "мы будем читать", "вы будете читать", "они будут читать"] } } },
      { id: "pisat", source: "писать", translit: "pisat", targets: [{ text: "schreiben" }], partOfSpeech: "verb", category: "Verben", frequencyRank: 65, forms: { irregular: "я пишу; Aspekt: написать (perf.)", conjugations: { present: ["я пишу", "ты пишешь", "он пишет", "мы пишем", "вы пишете", "они пишут"], past: ["я писал", "я писала", "они писали"], future: ["я буду писать", "ты будешь писать", "он будет писать", "мы будем писать", "вы будете писать", "они будут писать"] } } },
      { id: "zvat", source: "звать", translit: "zvat", targets: [{ text: "rufen" }, { text: "nennen" }], partOfSpeech: "verb", category: "Verben", frequencyRank: 115, forms: { conjugations: { present: ["я зову", "ты зовёшь", "он зовёт", "мы зовём", "вы зовёте", "они зовут"], past: ["я звал", "я звала", "они звали"], future: ["я буду звать", "ты будешь звать", "он будет звать", "мы будем звать", "вы будете звать", "они будут звать"] } } },
      { id: "zhit", source: "жить", translit: "zhit", targets: [{ text: "leben" }, { text: "wohnen", note: "je nach Kontext" }], partOfSpeech: "verb", category: "Verben", frequencyRank: 27, forms: { conjugations: { present: ["я живу", "ты живёшь", "он живёт", "мы живём", "вы живёте", "они живут"], past: ["я жил", "я жила", "они жили"], future: ["я буду жить", "ты будешь жить", "он будет жить", "мы будем жить", "вы будете жить", "они будут жить"] } } }
    ],
  },
  {
    id: "ru-de-verben-2",
    title: "Häufige Verben 2",
    languagePair: { from: "ru", to: "de" },
    category: "Verben",
    words: [
      { id: "prikhodit", source: "приходить", translit: "prikhodit", targets: [{ text: "ankommen", note: "zu Fuß" }], partOfSpeech: "verb", category: "Verben", frequencyRank: 90, forms: { conjugations: { present: ["я прихожу", "ты приходишь", "он приходит", "мы приходим", "вы приходите", "они приходят"], past: ["я приходил", "я приходила", "они приходили"], future: ["я приду", "ты придёшь", "он придёт", "мы придём", "вы придёте", "они придут"] } } },
      { id: "priezzhat", source: "приезжать", translit: "priyezzhat", targets: [{ text: "ankommen", note: "Fahrzeug" }], partOfSpeech: "verb", category: "Verben", frequencyRank: 95, forms: { conjugations: { present: ["я приезжаю", "ты приезжаешь", "он приезжает", "мы приезжаем", "вы приезжаете", "они приезжают"], past: ["я приезжал", "я приезжала", "они приезжали"], future: ["я приеду", "ты приедешь", "он приедет", "мы приедем", "вы приедете", "они приедут"] } } },
      { id: "pytatsya", source: "пытаться", translit: "pytatsya", targets: [{ text: "versuchen" }], partOfSpeech: "verb", category: "Verben", frequencyRank: 80, forms: { conjugations: { present: ["я пытаюсь", "ты пытаешься", "он пытается", "мы пытаемся", "вы пытаетесь", "они пытаются"], past: ["я пытался", "я пыталась", "они пытались"], future: ["я буду пытаться", "ты будешь пытаться", "он будет пытаться", "мы будем пытаться", "вы будете пытаться", "они будут пытаться"] } } },
      { id: "chuvstvovat", source: "чувствовать", translit: "chuvstvovat", targets: [{ text: "fühlen" }], partOfSpeech: "verb", category: "Verben", frequencyRank: 120, forms: { conjugations: { present: ["я чувствую", "ты чувствуешь", "он чувствует", "мы чувствуем", "вы чувствуете", "они чувствуют"], past: ["я чувствовал", "я чувствовала", "они чувствовали"], future: ["я буду чувствовать", "ты будешь чувствовать", "он будет чувствовать", "мы будем чувствовать", "вы будете чувствовать", "они будут чувствовать"] } } },
      { id: "ostavatsya", source: "оставаться", translit: "ostavatsya", targets: [{ text: "bleiben" }], partOfSpeech: "verb", category: "Verben", frequencyRank: 75, forms: { conjugations: { present: ["я остаюсь", "ты остаёшься", "он остаётся", "мы остаёмся", "вы остаетесь", "они остаются"], past: ["я оставался", "я оставалась", "они оставались"], future: ["я останусь", "ты останешься", "он останется", "мы останемся", "вы останетесь", "они останутся"] } } },
      { id: "rabotat", source: "работать", translit: "rabotat", targets: [{ text: "arbeiten" }], partOfSpeech: "verb", category: "Verben", frequencyRank: 33, forms: { conjugations: { present: ["я работаю", "ты работаешь", "он работает", "мы работаем", "вы работаете", "они работают"], past: ["я работал", "я работала", "они работали"], future: ["я буду работать", "ты будешь работать", "он будет работать", "мы будем работать", "вы будете работать", "они будут работать"] } } },
      { id: "uchit", source: "учить", translit: "uchit", targets: [{ text: "lernen" }, { text: "unterrichten", note: "Kontext" }], partOfSpeech: "verb", category: "Verben", frequencyRank: 110, forms: { conjugations: { present: ["я учу", "ты учишь", "он учит", "мы учим", "вы учите", "они учат"], past: ["я учил", "я учила", "они учили"], future: ["я буду учить", "ты будешь учить", "он будет учить", "мы будем учить", "вы будете учить", "они будут учить"] } } },
      { id: "pomogat", source: "помогать", translit: "pomogat", targets: [{ text: "helfen" }], partOfSpeech: "verb", category: "Verben", frequencyRank: 100, forms: { conjugations: { present: ["я помогаю", "ты помогаешь", "он помогает", "мы помогаем", "вы помогаете", "они помогают"], past: ["я помогал", "я помогала", "они помогали"], future: ["я буду помогать", "ты будешь помогать", "он будет помогать", "мы будем помогать", "вы будете помогать", "они будут помогать"] } } },
      { id: "otvechat", source: "отвечать", translit: "otvechat", targets: [{ text: "antworten" }], partOfSpeech: "verb", category: "Verben", frequencyRank: 130, forms: { conjugations: { present: ["я отвечаю", "ты отвечаешь", "он отвечает", "мы отвечаем", "вы отвечаете", "они отвечают"], past: ["я отвечал", "я отвечала", "они отвечали"], future: ["я буду отвечать", "ты будешь отвечать", "он будет отвечать", "мы будем отвечать", "вы будете отвечать", "они будут отвечать"] } } },
      { id: "sprashivat", source: "спрашивать", translit: "sprashivat", targets: [{ text: "fragen" }], partOfSpeech: "verb", category: "Verben", frequencyRank: 115, forms: { conjugations: { present: ["я спрашиваю", "ты спрашиваешь", "он спрашивает", "мы спрашиваем", "вы спрашиваете", "они спрашивают"], past: ["я спрашивал", "я спрашивала", "они спрашивали"], future: ["я буду спрашивать", "ты будешь спрашивать", "он будет спрашивать", "мы будем спрашивать", "вы будете спрашивать", "они будут спрашивать"] } } }
    ],
  },
  {
    id: "ru-de-everyday-1",
    title: "Alltag & Smalltalk",
    languagePair: { from: "ru", to: "de" },
    category: "Alltag",
    words: [
      { id: "svobodno", source: "свободно", translit: "svobodno", targets: [{ text: "frei", note: "Platz/Termin" }], partOfSpeech: "adv", category: "Alltag", frequencyRank: 160 },
      { id: "zanyat", source: "занят", translit: "zanyat", targets: [{ text: "beschäftigt" }], partOfSpeech: "adj", category: "Alltag", frequencyRank: 165 },
      { id: "vkusno", source: "вкусно", translit: "vkusno", targets: [{ text: "lecker" }], partOfSpeech: "adv", category: "Alltag", frequencyRank: 220 },
      { id: "skuchno", source: "скучно", translit: "skuchno", targets: [{ text: "langweilig" }], partOfSpeech: "adv", category: "Alltag", frequencyRank: 230 },
      { id: "seychas", source: "сейчас", translit: "seychas", targets: [{ text: "jetzt" }, { text: "gleich", note: "bald" }], partOfSpeech: "adv", category: "Alltag", frequencyRank: 34 },
      { id: "pochemu", source: "почему", translit: "pochemu", targets: [{ text: "warum" }], partOfSpeech: "adv", category: "Alltag", frequencyRank: 75 },
      { id: "poetomu", source: "поэтому", translit: "poetomu", targets: [{ text: "deshalb" }], partOfSpeech: "adv", category: "Alltag", frequencyRank: 105 },
      { id: "navernoye", source: "наверное", translit: "navernoye", targets: [{ text: "wahrscheinlich", note: "abschwaechend" }], partOfSpeech: "adv", category: "Alltag", frequencyRank: 125 },
      { id: "vozmozhno", source: "возможно", translit: "vozmozhno", targets: [{ text: "möglich" }, { text: "vielleicht", note: "neutral" }], partOfSpeech: "adv", category: "Alltag", frequencyRank: 155 },
      { id: "davay", source: "давай", translit: "davay", targets: [{ text: "lass uns", note: "Aufforderung" }], partOfSpeech: "phrase", category: "Alltag", frequencyRank: 100 }
    ],
  },
  {
    id: "ru-de-essen-1",
    title: "Essen & Trinken",
    languagePair: { from: "ru", to: "de" },
    category: "Essen",
    words: [
      { id: "zavtrak", source: "завтрак", translit: "zavtrak", targets: [{ text: "Frühstück" }], partOfSpeech: "noun", category: "Essen", frequencyRank: 180 },
      { id: "obed", source: "обед", translit: "obed", targets: [{ text: "Mittagessen" }], partOfSpeech: "noun", category: "Essen", frequencyRank: 185 },
      { id: "uzhin", source: "ужин", translit: "uzhin", targets: [{ text: "Abendessen" }], partOfSpeech: "noun", category: "Essen", frequencyRank: 190 },
      { id: "voda", source: "вода", translit: "voda", targets: [{ text: "Wasser" }], partOfSpeech: "noun", category: "Essen", frequencyRank: 31 },
      { id: "sok", source: "сок", translit: "sok", targets: [{ text: "Saft" }], partOfSpeech: "noun", category: "Essen", frequencyRank: 260 },
      { id: "chay", source: "чай", translit: "chay", targets: [{ text: "Tee" }], partOfSpeech: "noun", category: "Essen", frequencyRank: 200 },
      { id: "kofe", source: "кофе", translit: "kofe", targets: [{ text: "Kaffee" }], partOfSpeech: "noun", category: "Essen", frequencyRank: 170 },
      { id: "sladkiy", source: "сладкий", translit: "sladkiy", targets: [{ text: "süß" }], partOfSpeech: "adj", category: "Essen", frequencyRank: 240 },
      { id: "solyonyy", source: "солёный", translit: "solyonyy", targets: [{ text: "salzig" }], partOfSpeech: "adj", category: "Essen", frequencyRank: 250 },
      { id: "hleb", source: "хлеб", translit: "khleb", targets: [{ text: "Brot" }], partOfSpeech: "noun", category: "Essen", frequencyRank: 90 }
    ],
  },
  {
    id: "ru-de-familie-1",
    title: "Familie & Personen",
    languagePair: { from: "ru", to: "de" },
    category: "Familie",
    words: [
      { id: "semya", source: "семья", translit: "semya", targets: [{ text: "Familie" }], partOfSpeech: "noun", category: "Familie", frequencyRank: 60 },
      { id: "roditeli", source: "родители", translit: "roditeli", targets: [{ text: "Eltern" }], partOfSpeech: "noun", category: "Familie", frequencyRank: 90 },
      { id: "rebenok", source: "ребёнок", translit: "rebyonok", targets: [{ text: "Kind" }], partOfSpeech: "noun", category: "Familie", frequencyRank: 80 },
      { id: "drug", source: "друг", translit: "drug", targets: [{ text: "Freund" }], partOfSpeech: "noun", category: "Familie", frequencyRank: 52 },
      { id: "muzh", source: "муж", translit: "muzh", targets: [{ text: "Ehemann" }], partOfSpeech: "noun", category: "Familie", frequencyRank: 85 },
      { id: "zhena", source: "жена", translit: "zhena", targets: [{ text: "Ehefrau" }], partOfSpeech: "noun", category: "Familie", frequencyRank: 84 },
      { id: "brat", source: "брат", translit: "brat", targets: [{ text: "Bruder" }], partOfSpeech: "noun", category: "Familie", frequencyRank: 91 },
      { id: "sestra", source: "сестра", translit: "sestra", targets: [{ text: "Schwester" }], partOfSpeech: "noun", category: "Familie", frequencyRank: 92 },
      { id: "dedushka", source: "дедушка", translit: "dedushka", targets: [{ text: "Großvater" }], partOfSpeech: "noun", category: "Familie", frequencyRank: 140 },
      { id: "babushka", source: "бабушка", translit: "babushka", targets: [{ text: "Großmutter" }], partOfSpeech: "noun", category: "Familie", frequencyRank: 138 }
    ],
  }
];
