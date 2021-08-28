import { memo } from "react";
import "./index.css";

interface IButton {
  isActive?: boolean;
  text: string;
  onClickNextFilm?: () => void;
  onClickShowResult?: () => void;
}

export const Button = memo(
  ({ isActive, text, onClickNextFilm, onClickShowResult }: IButton) => (
    <button
      className={isActive ? "btn__filter active" : "btn__filter"}
      onClick={onClickNextFilm || onClickShowResult}
    >
      {text}
    </button>
  )
);
