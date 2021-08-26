import { memo } from "react";
import "./index.css";

interface IBtnFilter {
  isActive?: boolean;
  text: string;
  onClickNextFilm?: () => void;
}

export const BtnFilter = memo(
  ({ isActive, text, onClickNextFilm }: IBtnFilter) => (
    <button
      className={isActive ? "btn__filter active" : "btn__filter"}
      onClick={onClickNextFilm}
    >
      {text}
    </button>
  )
);
