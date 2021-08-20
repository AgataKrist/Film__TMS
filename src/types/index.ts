export interface IFilm {
  id: number;
  title: string;
  year: number;
  released: string;
  runtime: string;
  genre: any;
  director: string;
  writer: string;
  actors: any;
  plot: string;
  country: string;
  poster: string;
  imdbRating: number;
  imdbVotes: number;
  type: string;
  boxOffice: string;
  production: string;
}

export interface ITrailer {
  trailer: string;
  description: string;
}
