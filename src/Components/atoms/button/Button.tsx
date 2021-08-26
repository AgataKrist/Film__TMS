import { memo } from "react";
import "./index.css";

interface IButton {
  isActive?: boolean;
  text: string;
  onClickNextFilm?: () => void;
  onClickFilterByRating?: () => void;
  onClickFilterByYear?: () => void;
}

export const Button = memo(
  ({
    isActive,
    text,
    onClickNextFilm,
    onClickFilterByRating,
    onClickFilterByYear,
  }: IButton) => (
    <button
      className={isActive ? "btn__filter active" : "btn__filter"}
      onClick={onClickNextFilm || onClickFilterByRating || onClickFilterByYear}
    >
      {text}
    </button>
  )
);
