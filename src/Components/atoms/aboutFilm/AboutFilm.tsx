import { memo } from "react";
import "./index.css";

interface IAboutFilm {
  text: string;
  isShort: boolean;
}

export const AboutFilm = memo(({ text, isShort }: IAboutFilm) => (
  <div className={"aboutFilm"}>
    <p className={isShort ? "aboutFilmShort__text" : "aboutFilm__text"}>
      {text}
    </p>
  </div>
));
