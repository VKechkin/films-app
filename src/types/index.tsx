export type TFilm = {
  id: number;
  name: string;
  description: string;
  src: string;
  score: {
    script: number;
    actors: number;
    operator: number;
  };
  favourites: false;
};

export type TSlice<T> = {
  list: T[];
};
