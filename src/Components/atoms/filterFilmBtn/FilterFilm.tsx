import { memo } from "react";
import "./index.css";
import Filter from "../../../Accets/IMG/Filter.svg";

export const FilterFilm = memo(() => (
  <div className="filter__wrapper">
    <button className={"filter__btn"}>
      <img className={"filter__img"} src={Filter} alt="filterSVG" />
    </button>
  </div>
));
