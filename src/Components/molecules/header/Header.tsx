import * as React from "react";
import { memo } from "react";
import { FilterFilm } from "../../atoms/filterFilmBtn";
import { HeaderSearch } from "../../atoms/headerSearch";
import { PageTitle } from "../../atoms/pageTitle";
import { Sign } from "../../atoms/sign";
import "./index.css";

export const Header = memo(() => {
  const pageTitle = "Movies";
  const name = "Anya";
  return (
    <div className={"header__wrapper"}>
      <div className="left">
        <PageTitle pageTitle={pageTitle} />
        <HeaderSearch />
        <FilterFilm />
      </div>
      <Sign name={name} />
    </div>
  );
});
