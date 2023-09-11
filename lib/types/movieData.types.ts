export type MovieData = {
  id: string | number;
  title: string;
  original_language: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  release_date: Date;
  genre_ids: number[];
  vote_average: number;
};
