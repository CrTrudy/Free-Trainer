# Next.js Vokabel Trainer

Ein statischer Next.js Vokabel Trainer, optimiert für GitHub Pages. Du kannst die Beispieldaten nutzen, eigene Vokabeln hinzufügen und die Übersetzungsrichtung jederzeit wechseln.

## Entwicklung

```bash
npm install
npm run dev
```

## Build für GitHub Pages

Der Build erzeugt automatisch ein statisches `out/`-Verzeichnis (`output: "export"`). Für einen Repo-Namen auf GitHub Pages passe bei Bedarf den Pfad an:

```bash
set NEXT_PUBLIC_BASE_PATH=/Dein-Repo-Name   # Windows (optional, Standard: /Free-Trainer)
npm run build                               # erzeugt out/
```

Deploy über GitHub Pages (z. B. mit einer Action) mit dem Inhalt von `out/`. In der lokalen Entwicklung ist kein `NEXT_PUBLIC_BASE_PATH` nötig.
