import * as React from "react";
import { memo } from "react";
import { Button } from "../../atoms/button";
import { Title } from "../../atoms/title";
import "./index.css";
import { FieldSelect } from "../../atoms/fieldSelect";
import { FieldSearch } from "../../atoms/fieldSearch";
import { FieldFromTo } from "../../atoms/fieldFromTo";
import { FieldGenre } from "../../atoms/fieldGenre";

interface IFilter {
  countries: string[];
  genres: string[];
  onClickFilterByRating: () => void;
  onClickFilterByYear: () => void;
  isFilterByRatingCheck: boolean;
  isFilterByYearCheck: boolean;
}

export const Filter = memo(
  ({
    genres,
    countries,
    onClickFilterByRating,
    onClickFilterByYear,
    isFilterByRatingCheck,
    isFilterByYearCheck,
  }: IFilter) => {
    return (
      <div className={"filterBOX__wrapper"}>
        <div className="filterBOX__content">
          <div className="sort">
            <Title title={"Sort by:"} />
            <div className="btn__group">
              <Button
                text={"Rating"}
                isActive={isFilterByRatingCheck}
                onClickFilterByRating={onClickFilterByRating}
              />
              <Button
                text={"Year"}
                onClickFilterByYear={onClickFilterByYear}
                isActive={isFilterByYearCheck}
              />
            </div>
          </div>
          <div className="filter">
            <Title title={"Filter:"} />
            <form className={"form__filter"} action="/">
              <FieldSearch />
              <FieldSelect values={countries} />
              <FieldFromTo title={"Years"} />
              <FieldFromTo title={"Rating"} />
              <FieldGenre values={genres} />
            </form>
          </div>
          <Button text={"Show results"} isActive={true} />
        </div>
      </div>
    );
  }
);
