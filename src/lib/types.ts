export type Recipe = {
  id: string;
  title: string;
  description?: string | null;
  ingredients: string[];
  instructions: string[];
  createdAt: string; // ISO string
};
