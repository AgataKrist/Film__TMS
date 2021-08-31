import { memo, useState } from "react";
import "./index.css";
import search from "../../../Accets/IMG/Search.svg";

interface IInput {
  value: string;
  onChangeHandler: (text: string) => void;
  onClick: () => void;
}

export const HeaderSearch = memo(
  ({ value, onChangeHandler, onClick }: IInput) => {
    return (
      <div className="header__search">
        <input
          className={"search__input"}
          type="search"
          placeholder={"Search"}
          value={value}
          onChange={(e) => onChangeHandler(e.target.value)}
        />
        <button className={"search__icon"} onClick={onClick}>
          <img src={search} alt="search" />
        </button>
      </div>
    );
  }
);
