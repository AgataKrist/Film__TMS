import * as React from "react";
import { memo } from "react";
import { Title } from "../../atoms/title";
import "./index.css";
import { Poster } from "../../atoms/poster";
import { AboutFilm } from "../../atoms/aboutFilm";
import { Rating } from "../../atoms/rating";
import { Description } from "../../atoms/descriptionFilm";
import { IFilm } from "./../../../types/index";

interface ICardFilm {
  film: IFilm;
}

export const CardFilm = memo(({ film }: ICardFilm) => {
  return (
    <div className={"card__wrapper"}>
      <div className="card__content">
        <div className="card__content-row">
          <div className="card__content-column">
            <Poster poster={film.poster} />
            <Rating imdbVotes={film.imdbVotes} imdbRating={film.imdbRating} />
          </div>
          <div className="card__content-column">
            <Title title={film.title} isShort={false} />
            <Description film={film} />
          </div>
        </div>
        <div className="card__content-row">
          <AboutFilm text={film.plot} isShort={false} />
        </div>
      </div>
    </div>
  );
});
