import "./App.css";
import { CardFilm } from "./Components/molecules/cardFilm";
import { Filter } from "./Components/molecules/filter";
import { Header } from "./Components/molecules/header";
import { ShortCardFilm } from "./Components/molecules/shortCardFilm";
import { Sidebar } from "./Components/molecules/sidebar";
import { StarRating } from "./Components/molecules/starRating";
import { TrailerFilm } from "./Components/molecules/trailerFilm";
import { films, trailer } from "./mock";
import { useState } from "react";
import { Button } from "./Components/atoms/button/Button";
import { filterBy, sortBy } from "./helper/helper";
import { FilterFilm } from "./Components/atoms/filterFilmBtn/FilterFilm";

function App() {
  const filterProps = {
    countries: Array.from(
      new Set(films.map((film) => film.country.split(", ")).flat())
    ), //array
    genres: Array.from(new Set(films.map((film) => film.genre).flat())), //array
  };
  const selectedFilm = films[1];
  const trailerCurrent = trailer[0];

  const defaultSortSettings = [
    { isActive: false, FIELD_NAME: "RATING", field: "imdbRating" },
    { isActive: false, FIELD_NAME: "YEAR", field: "year" },
  ];

  const [filterdFilms, setFilterdFilms] = useState(films.slice(0, 1));
  const [inputValueHeader, setInputValueHeader] = useState("");
  const [inputValueFilter, setInputValueFilter] = useState("");
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [isShowNextFilmBtn, setIsShowNextFilmBtn] = useState(true);
  const [valueSelectCountry, setSelectValueCountry] = useState("");
  const [sortSettings, setSortSettings] = useState(defaultSortSettings);

  const onClickSearchBtn = () => {
    const filterByTitile = filterBy(films, inputValueHeader, "title");
    setFilterdFilms(filterByTitile);
    setIsShowNextFilmBtn(false);
  };
  const onChangeHandlerSearchHeader = (text: string) => {
    setInputValueHeader(text);
    if (text.length > 2) {
      const filterByTitile = filterBy(films, inputValueHeader, "title");
      setFilterdFilms(filterByTitile);
      return;
    }
    setFilterdFilms(films);
  };
  const onClickShowFilter = () => {
    setIsShowFilter(!isShowFilter);
  };
  const handlerSorting = (field: string) => {
    const newSettings = sortSettings.map((setting) => ({
      ...setting,
      isActive: setting.field === field,
    }));

    setSortSettings(newSettings);
    const filterByField = [...films].sort(
      (a: any, b: any) => a[field] - b[field]
    );
    setFilterdFilms(filterByField.slice(0, 1));
    setIsShowFilter(!isShowFilter);
    setIsShowNextFilmBtn(true);
  };

  const onClickNextFilm = () => {
    const field = sortSettings.reduce((acc, { isActive, field }) => {
      return isActive ? field : acc;
    }, "");
    setFilterdFilms(
      [...films]
        .sort((a: any, b: any) => a[field] - b[field])
        .slice(0, filterdFilms.length + 1)
    );
  };

  const handlerSearchFilter = (text: string) => {
    setInputValueFilter(text);
  };
  const onClickShowResult = () => {
    const temporaryByInputSearch = inputValueFilter
      ? (setFilterdFilms(filterBy(films, inputValueFilter, "title", "plot")),
        setIsShowNextFilmBtn(false),
        setInputValueFilter(inputValueFilter))
      : (setFilterdFilms(films.slice(0, 1)), setIsShowNextFilmBtn(true));

    setIsShowFilter(false);
  };

  const onChangeHandlerSelectCountre = (valueCountry: string) => {
    setSelectValueCountry(valueCountry);
  };

  return (
    <div className="App">
      <Sidebar />
      <div className="main">
        <Header
          value={inputValueHeader}
          onClickSearchBtn={onClickSearchBtn}
          onChangeHandler={onChangeHandlerSearchHeader}
          onClickShowFilter={onClickShowFilter}
        />
        {isShowFilter ? (
          <Filter
            {...filterProps}
            sortSettings={sortSettings}
            handlerSorting={handlerSorting}
            onClickShowResult={onClickShowResult}
            handlerSearchFilter={handlerSearchFilter}
            onChangeHandlerSelectCountre={onChangeHandlerSelectCountre}
            value={inputValueFilter}
            valueSelectCountry={valueSelectCountry}
          />
        ) : null}
        <div className="allFilms__wrapper">
          <div className="btn">
            {filterdFilms.length !== films.length && isShowNextFilmBtn && (
              <Button
                text={"Show Next"}
                isActive={true}
                onClickNextFilm={onClickNextFilm}
              />
            )}
          </div>
          <div className="allFilms">
            {filterdFilms.map((film) => {
              return <ShortCardFilm key={film.id} {...film} />;
            })}
          </div>
        </div>
        {/* <CardFilm film={selectedFilm} />
        <StarRating />
        <TrailerFilm title={selectedFilm.title} {...trailerCurrent} /> */}
      </div>
    </div>
  );
}

export default App;
