import { memo } from "react";
import "./index.css";
import search from "../../../Accets/IMG/Search.svg";

export const HeaderSearch = memo(() => (
  <div className="header__search">
    <input className={"search__input"} type="search" placeholder={"Search"} />
    <button className={"search__icon"}>
      <img src={search} alt="search" />
    </button>
  </div>
));
