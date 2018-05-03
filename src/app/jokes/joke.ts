export interface Joke {
  id: string;
  joke: string;
}

export interface JokeResult {
  type: string;
  value: Joke | Joke[];
}

export interface JokeCategoryResult {
  type: string;
  value: string[];
}
