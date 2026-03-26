export const tags = [
  "Polynome",
  "Funktionen",
  "Statistik",
  "Wahrscheinlichkeit",
  "Geometrie",
  "Analysis",
  "Algebra",
  "Vektoren",
] as const;

export type Tag = (typeof tags)[number];

export type Command = {
  type: "command" | "tool";
  name: string;
  description: string;
  tags: Tag[];
  arguments: string[];
};

export const commands: Command[] = [];
