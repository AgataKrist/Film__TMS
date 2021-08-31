import * as React from "react";
import { memo } from "react";
import { FilterFilm } from "../../atoms/filterFilmBtn";
import { HeaderSearch } from "../../atoms/headerSearch";
import { PageTitle } from "../../atoms/pageTitle";
import { Sign } from "../../atoms/sign";
import "./index.css";

interface IHeader {
  value: string;
  onChangeHandler: (text: string) => void;
  onClickSearchBtn: () => void;
  onClickShowFilter: () => void;
}

export const Header = memo(
  ({
    value,
    onChangeHandler,
    onClickSearchBtn,
    onClickShowFilter,
  }: IHeader) => {
    const pageTitle = "Movies";
    const name = "Anya";
    return (
      <div className={"header__wrapper"}>
        <div className="left">
          <PageTitle pageTitle={pageTitle} />
          <HeaderSearch
            value={value}
            onClick={onClickSearchBtn}
            onChangeHandler={onChangeHandler}
          />
          <FilterFilm onClickShowFilter={onClickShowFilter} />
        </div>
        <Sign name={name} />
      </div>
    );
  }
);
