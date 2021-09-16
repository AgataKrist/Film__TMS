import * as React from "react";
import { memo } from "react";
import { Button } from "../../atoms/button";
import { Title } from "../../atoms/title";
import "./index.css";
import { FieldSelect } from "../../atoms/fieldSelect";
import { FieldSearch } from "../../atoms/fieldSearch";
import { FieldFromTo } from "../../atoms/fieldFromTo";
import { FieldGenre } from "../../atoms/fieldGenre";
import { ISortSettings, ISortSettingsFromTo } from "./../../../types/index";
import { ButtonSorting } from "../../atoms/buttonSorting";

interface IFilter {
  countries: string[];
  genres: string[];
  value: string;
  valueSelectCountry: string;
  sortSettings: ISortSettings[];
  sortFromToYear: ISortSettingsFromTo;
  sortFromToRating: ISortSettingsFromTo;
  genreList: string[] | [];
  onClickShowResult: () => void;
  handlerSearchFilter: (text: string) => void;
  onChangeHandlerGenre: (value: string) => void;
  onClickDeleteGenre: (value: string) => void;
  onChangeHandlerSelectCountre: (valueCountry: string) => void;
  onChangeHandlerFromToYear: (
    value: string,
    type: string,
    field: string
  ) => void;
  onChangeHandlerFromToRating: (
    value: string,
    type: string,
    field: string
  ) => void;
  handlerSorting: (field: string) => void;
}

export const Filter = memo(
  ({
    genres,
    countries,
    value,
    valueSelectCountry,
    sortSettings,
    sortFromToYear,
    sortFromToRating,
    genreList,
    onClickShowResult,
    handlerSearchFilter,
    onChangeHandlerSelectCountre,
    onChangeHandlerGenre,
    onClickDeleteGenre,
    onChangeHandlerFromToYear,
    onChangeHandlerFromToRating,
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
              <FieldFromTo
                {...sortFromToYear}
                onChange={onChangeHandlerFromToYear}
              />
              <FieldFromTo
                {...sortFromToRating}
                onChange={onChangeHandlerFromToRating}
              />
              <FieldGenre
                values={genres}
                genreList={genreList}
                onChange={onChangeHandlerGenre}
                onClick={onClickDeleteGenre}
              />
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
