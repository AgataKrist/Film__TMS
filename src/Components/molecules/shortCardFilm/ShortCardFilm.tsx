import { memo } from "react";
import { Title } from "../../atoms/title";
import "./index.css";
import { Poster } from "../../atoms/poster";
import { AboutFilm } from "../../atoms/aboutFilm";
interface IShortCardFilm {
  poster: string;
  title: string;
  plot: string;
  year: number;
}

export const ShortCardFilm = memo(
  ({ poster, title, plot, year }: IShortCardFilm) => {
    return (
      <div className={"shortCard__wrapper"}>
        <a href="#" className={"shortCard__content"}>
          <Poster poster={poster} />
          <Title title={title} isShort={true} />
          <div className="film__year">{year}</div>
          <AboutFilm text={plot} isShort={true} />
        </a>
      </div>
    );
  }
);
