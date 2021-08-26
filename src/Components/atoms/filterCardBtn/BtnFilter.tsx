import { memo } from "react";
import "./index.css";

interface IBtnFilter {
  isActive?: boolean;
  text: string;
  onClickNextFilm?: () => void;
  isBtnVisible?: boolean;
}

export const BtnFilter = memo(
  ({ isActive, text, onClickNextFilm, isBtnVisible }: IBtnFilter) => (
    <button
      className={isActive ? "btn__filter active" : "btn__filter"}
      style={isBtnVisible ? { display: "block" } : { display: "none" }}
      onClick={onClickNextFilm}
    >
      {text}
    </button>
  )
);
