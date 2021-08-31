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
import { FilterFilm } from "./Components/atoms/filterFilmBtn/FilterFilm";
import { filterBy, getFilterProps, sortBy } from "./helper/helper";

function App() {
  const filterProps = {
    countries: getFilterProps(films, "country"), //array
    genres: getFilterProps(films, "genre"), //array
  };
  const selectedFilm = films[1];
  const trailerCurrent = trailer[0];

  const defaultSortSettings = [
    { isActive: false, FIELD_NAME: "RATING", field: "imdbRating" },
    { isActive: false, FIELD_NAME: "YEAR", field: "year" },
  ];

  const defaultSortFromToRating = {
    isActive: false,
    FIELD_NAME: "Rating",
    field: "imdbRating",
    from: "",
    to: "",
  };
  const defaultSortFromToYear = {
    isActive: false,
    FIELD_NAME: "Year",
    field: "year",
    from: "",
    to: "",
  };

  const [filterdFilms, setFilterdFilms] = useState(films.slice(0, 1));
  const [inputValueHeader, setInputValueHeader] = useState("");
  const [inputValueFilter, setInputValueFilter] = useState("");
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [isShowNextFilmBtn, setIsShowNextFilmBtn] = useState(true);
  const [valueSelectCountry, setSelectValueCountry] = useState("");
  const [sortSettings, setSortSettings] = useState(defaultSortSettings);
  const [sortFromToYear, setSortFromToYear] = useState(defaultSortFromToYear);
  const [sortFromToRating, setSortFromToRating] = useState(
    defaultSortFromToRating
  );

  const onClickSearchBtn = () => {
    const filterByTitile = filterBy(films, inputValueHeader, "title");
    setFilterdFilms(filterByTitile);
    setIsShowNextFilmBtn(false);
    setInputValueHeader("");
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
    const filterByField = sortBy(films, null, field);
    setFilterdFilms(filterByField.slice(0, 1));
    setIsShowFilter(!isShowFilter);
    setIsShowNextFilmBtn(true);
  };

  const onClickNextFilm = () => {
    const field = sortSettings.reduce((acc, { isActive, field }) => {
      return isActive ? field : acc;
    }, "");

    const field2 = sortSettings.find((el) => el.isActive)?.field; //?
    console.log({ field }, { field2 });
    //Если использаовать find то требуется дополнительное условие, (когда ни один фильтр не выбран кнопка не отрабатывает) а reduce возвращает пустую строку если не выбраны фильтры и соответственно кнопка show nexr отрабатывает
    setFilterdFilms(sortBy(films, filterdFilms, field));
  };

  const handlerSearchFilter = (text: string) => {
    setInputValueFilter(text);
  };

  const onChangeHandlerSelectCountre = (valueCountry: string) => {
    setSelectValueCountry(valueCountry);
  };

  const onChangeHandlerFromToYear = (
    value: string,
    type: string,
    field: string
  ) => {
    console.log(field);

    const newSortFromToYear = {
      ...sortFromToYear,
      from: type === "from" ? value : sortFromToYear.from,
      to: type === "to" ? value : sortFromToYear.to,
    };
    setSortFromToYear(newSortFromToYear);
  };
  const onChangeHandlerFromToRating = (
    value: string,
    type: string,
    field: string
  ) => {
    console.log(field);

    const newSortFromToRating = {
      ...sortFromToRating,
      from: type === "from" ? value : sortFromToRating.from,
      to: type === "to" ? value : sortFromToRating.to,
    };
    setSortFromToRating(newSortFromToRating);
  };

  const onClickShowResult = () => {
    //!пока делаю все фильтрации не зависимо друг от друга

    //SearhInputFilter
    /*const temporaryByInputSearch = inputValueFilter
       ? (setFilterdFilms(filterBy(films, inputValueFilter, "title", "plot")),
         setIsShowNextFilmBtn(false),
         setInputValueFilter(inputValueFilter))
       : (setFilterdFilms(films.slice(0, 1)), setIsShowNextFilmBtn(true));*/

    //SelectCountyFilter
    /*
    const temporaryByCountry = valueSelectCountry
      ? (setFilterdFilms(filterBy(films, valueSelectCountry, "country")),
        setIsShowNextFilmBtn(false))
      : (setFilterdFilms(films.slice(0, 1)), setIsShowNextFilmBtn(true));
      */
    //FilterByYears
    /*const temporaryByYearFromTo =
      sortFromToYear.from && sortFromToYear.to
        ? (setFilterdFilms(
            films.filter(
              (film: any) =>
                film.year >= parseInt(sortFromToYear.from) &&
                film.year <= parseInt(sortFromToYear.to)
            )
          ),
          setIsShowNextFilmBtn(false))
        : (setFilterdFilms(films.slice(0, 1)), setIsShowNextFilmBtn(true));*/
    //FilterByYears
    const temporaryByRatingFromTo =
      sortFromToRating.from && sortFromToRating.to
        ? (setFilterdFilms(
            films.filter(
              (film: any) =>
                film.imdbRating >= Number(sortFromToRating.from) &&
                film.imdbRating <= Number(sortFromToRating.to)
            )
          ),
          setIsShowNextFilmBtn(false))
        : (setFilterdFilms(films.slice(0, 1)), setIsShowNextFilmBtn(true));

    setIsShowFilter(false);
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
            sortFromToYear={sortFromToYear}
            sortFromToRating={sortFromToRating}
            handlerSorting={handlerSorting}
            onClickShowResult={onClickShowResult}
            handlerSearchFilter={handlerSearchFilter}
            onChangeHandlerSelectCountre={onChangeHandlerSelectCountre}
            onChangeHandlerFromToYear={onChangeHandlerFromToYear}
            onChangeHandlerFromToRating={onChangeHandlerFromToRating}
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
