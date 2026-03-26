export const tags = [
  "Polynome",
  "Funktionen",
  "Statistik",
  "Wahrscheinlichkeit",
  "Geometrie",
  "Analysis",
  "Algebra",
  "Vektoren",
] as const

export type Tag = (typeof tags)[number]

export type Element = {
  type: "command" | "tool"
  name: string
  description: string
  parameters: string[]
  optionalParameters?: string[]
  tags: Tag[]
}

export const elements: Element[] = [
  {
    type: "command",
    name: "Ableitung",
    description: "Liefert die Ableitung einer Funktion.",
    parameters: ["Funktion"],
    optionalParameters: ["Grad der Ableitung"],
    tags: ["Analysis", "Funktionen"],
  },
  {
    type: "command",
    name: "Extremum",
    description:
      "Erzeugt alle lokalen Extrema des Polynoms als Punkte auf dem Funktionsgraphen.",
    parameters: ["Funktion / Polynom"],
    optionalParameters: ["Startwert", "Endwert"],
    tags: ["Analysis", "Funktionen", "Polynome"],
  },
  {
    type: "command",
    name: "Grad",
    description: "Liefert den Grad des Polynoms.",
    parameters: ["Funktion / Polynom"],
    tags: ["Polynome", "Algebra"],
  },
  {
    type: "command",
    name: "Grenzwert",
    description:
      "Liefert den Grenzwert der Funktion für den gegebenen Wert (kann auch unendlich sein).",
    parameters: ["Funktion / Polynom", "Wert"],
    tags: ["Analysis", "Funktionen"],
  },
  {
    type: "command",
    name: "Integral",
    description:
      "Berechnet das unbestimmte Integral der Funktion nach der Hauptvariable.",
    parameters: ["Funktion"],
    optionalParameters: ["Startwert", "Endwert"],
    tags: ["Analysis", "Funktionen"],
  },
  {
    type: "command",
    name: "IntegralZwischen",
    description: "Berechnet das Integral zwischen zwei Funktionen.",
    parameters: ["Funktion 1", "Funktion 2", "Startwert", "Endwert"],
    tags: ["Analysis", "Funktionen"],
  },
  {
    type: "command",
    name: "Nullstelle",
    description: "Erzeugt alle Nullstellen eines Polynoms.",
    parameters: ["Funktion"],
    optionalParameters: ["Startwert", "Endwert"],
    tags: ["Funktionen", "Polynome", "Algebra"],
  },
  {
    type: "command",
    name: "Obersumme",
    description: "Berechnet die Obersumme der Funktion im Intervall.",
    parameters: ["Funktion", "Startwert", "Endwert", "Anzahl der Rechtecke"],
    tags: ["Analysis"],
  },
  {
    type: "command",
    name: "Polynom",
    description: "Erzeugt ein Polynom aus den gegebenen Punkten.",
    parameters: ["Liste von Punkten"],
    tags: ["Polynome", "Algebra"],
  },
  {
    type: "command",
    name: "Untersumme",
    description: "Berechnet die Untersumme der Funktion im Intervall.",
    parameters: ["Funktion", "Startwert", "Endwert", "Anzahl der Rechtecke"],
    tags: ["Analysis"],
  },
  {
    type: "command",
    name: "BinomialKoeffizient",
    description: "Berechnet den Binomialkoeffizienten. Auch als nCr bekannt.",
    parameters: [
      "Anzahl aller Elemente (n)",
      "Anzahl der ausgewählten Elemente (r)",
    ],
    tags: ["Wahrscheinlichkeit", "Algebra"],
  },
  {
    type: "command",
    name: "Median",
    description: "Berechnet den Median der gegebenen Werte.",
    parameters: ["Liste von Werten"],
    optionalParameters: ["Liste von Häufigkeiten"],
    tags: ["Statistik"],
  },
  {
    type: "command",
    name: "Mittelwert",
    description: "Berechnet den Mittelwert der gegebenen Zahlen.",
    parameters: ["Liste von Werten"],
    optionalParameters: ["Liste von Häufigkeiten"],
    tags: ["Statistik"],
  },
  {
    type: "command",
    name: "Standardabweichung",
    description: "Berechnet die Standardabweichung der gegebenen Zahlen.",
    parameters: ["Liste von Werten"],
    optionalParameters: ["Liste von Häufigkeiten"],
    tags: ["Statistik"],
  },
  {
    type: "command",
    name: "TrendExp",
    description:
      "Erzeugt eine Exponentialfunktion, die den angegebenen Punkten entsprechen.",
    parameters: ["Liste von Punkten"],
    tags: ["Statistik", "Funktionen"],
  },
  {
    type: "command",
    name: "TrendSin",
    description:
      "Erzeugt eine Sinusfunktion, die den angegebenen Punkten entsprechen.",
    parameters: ["Liste von Punkten"],
    tags: ["Statistik", "Funktionen"],
  },
  {
    type: "command",
    name: "TrendExp2",
    description:
      "Erzeugt eine Exponentialfunktion, die den angegebenen Punkten entsprechen (für Menschen die die eulersche Zahl e nicht kennen).",
    parameters: ["Liste von Punkten"],
    tags: ["Statistik", "Funktionen"],
  },
  {
    type: "command",
    name: "TrendPoly",
    description:
      "Erzeugt ein Polynom, das den angegebenen Punkten entsprechen.",
    parameters: ["Liste von Punkten"],
    optionalParameters: ["Grad des Polynoms"],
    tags: ["Statistik", "Funktionen", "Polynome"],
  },
  {
    type: "command",
    name: "TrendPot",
    description:
      "Erzeugt eine Potenzfunktion, die den angegebenen Punkten entsprechen.",
    parameters: ["Liste von Punkten"],
    tags: ["Statistik", "Funktionen"],
  },
  {
    type: "command",
    name: "Varianz",
    description: "Berechnet die Varianz der gegebenen Zahlen.",
    parameters: ["Liste von Werten"],
    optionalParameters: ["Liste von Häufigkeiten"],
    tags: ["Statistik"],
  },
  {
    type: "command",
    name: "Skalarprodukt",
    description: "Berechnet das Skalarprodukt zweier Vektoren.",
    parameters: ["Vektor 1", "Vektor 2"],
    tags: ["Vektoren", "Algebra"],
  },
  {
    type: "command",
    name: "Schnittpunkt",
    description: "Berechnet den Schnittpunkt zweier Funktionen.",
    parameters: ["Objekt 1", "Objekt 2"],
    tags: ["Geometrie", "Funktionen"],
  },
  {
    type: "command",
    name: "Primfaktoren",
    description: "Berechnet die Primfaktoren der gegebenen Zahl.",
    parameters: ["Zahl"],
    tags: ["Algebra"],
  },
  {
    type: "command",
    name: "Normalvektor",
    description: "Liefert den Normalvektor der Geraden.",
    parameters: ["Gerade / Vektor / Strecke"],
    tags: ["Vektoren", "Geometrie"],
  },
  {
    type: "command",
    name: "inPolar",
    description: "Wandelt den Vektor (oder einen Punkt) in Polarform um.",
    parameters: ["Vektor / Punkt"],
    tags: ["Vektoren", "Geometrie"],
  },
]
