import { memo } from "react";
import { Title } from "../../atoms/title";
import "./index.css";
import { Poster } from "../../atoms/poster";
import { AboutFilm } from "../../atoms/aboutFilm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

interface IShortCardFilm {
  poster: string;
  title: string;
  plot: string;
  year: number;
  id: number;
  onClickShortCard: (id: number) => void;
}

export const ShortCardFilm = memo(
  ({ poster, title, plot, year, id, onClickShortCard }: IShortCardFilm) => {
    return (
      <div
        onClick={() => onClickShortCard(id)}
        className={"shortCard__wrapper"}
      >
        <Link to={`/films/${id}`} className={"shortCard__content"}>
          <Poster poster={poster} />
          <Title title={title} isShort={true} />
          <div className="film__year">{year}</div>
          <AboutFilm text={plot} isShort={true} />
        </Link>
      </div>
    );
  }
);
