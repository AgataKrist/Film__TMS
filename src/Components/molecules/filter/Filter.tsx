import * as React from "react";
import { memo } from "react";
import { Button } from "../../atoms/button";
import { Title } from "../../atoms/title";
import "./index.css";
import { FieldSelect } from "../../atoms/fieldSelect";
import { FieldSearch } from "../../atoms/fieldSearch";
import { FieldFromTo } from "../../atoms/fieldFromTo";
import { FieldGenre } from "../../atoms/fieldGenre";
import { ISortSettings } from "./../../../types/index";
import { ButtonSorting } from "../../atoms/buttonSorting";

interface IFilter {
  countries: string[];
  genres: string[];
  value: string;
  valueSelectCountry: string;
  sortSettings: ISortSettings[];
  onClickShowResult: () => void;
  handlerSearchFilter: (text: string) => void;
  onChangeHandlerSelectCountre: (valueCountry: string) => void;
  handlerSorting: (field: string) => void;
}

export const Filter = memo(
  ({
    genres,
    countries,
    value,
    sortSettings,
    valueSelectCountry,
    onClickShowResult,
    handlerSearchFilter,
    onChangeHandlerSelectCountre,
    handlerSorting,
  }: IFilter) => {
    return (
      <div className={"filterBOX__wrapper"}>
        <div className="filterBOX__content">
          <div className="sort">
            <Title title={"Sort by:"} />
            <div className="btn__group">
              {sortSettings.map((setting) => {
                return (
                  <ButtonSorting handlerSorting={handlerSorting} {...setting} />
                );
              })}
            </div>
          </div>
          <div className="filter">
            <Title title={"Filter:"} />
            <form className={"form__filter"} action="/">
              <FieldSearch
                handlerSearchFilter={handlerSearchFilter}
                value={value}
              />
              <FieldSelect
                onChangeHandlerSelectCountre={onChangeHandlerSelectCountre}
                values={countries}
                valueSelectCountry={valueSelectCountry}
              />
              <FieldFromTo title={"Years"} />
              <FieldFromTo title={"Rating"} />
              <FieldGenre values={genres} />
            </form>
          </div>
          <Button
            onClickShowResult={onClickShowResult}
            text={"Show results"}
            isActive={true}
          />
        </div>
      </div>
    );
  }
);
