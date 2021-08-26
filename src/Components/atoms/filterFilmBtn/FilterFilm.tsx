import { memo, useState } from "react";
import "./index.css";
import Filter from "../../../Accets/IMG/Filter.svg";

interface IFilterFilm {
  onClickFilterBtn: () => void;
}

export const FilterFilm = memo(({ onClickFilterBtn }: IFilterFilm) => {
  return (
    <div className="filter__wrapper">
      <button className={"filter__btn"} onClick={onClickFilterBtn}>
        <img className={"filter__img"} src={Filter} alt="filterSVG" />
      </button>
    </div>
  );
});
