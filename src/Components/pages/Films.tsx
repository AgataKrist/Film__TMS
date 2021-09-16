import "../../App.css";
import { CardFilm } from "../../Components/molecules/cardFilm";
import { Filter } from "../../Components/molecules/filter";
import { Header } from "../../Components/molecules/header";
import { ShortCardFilm } from "../../Components/molecules/shortCardFilm";
import { Sidebar } from "../../Components/molecules/sidebar";
import { films, trailer } from "../../mock";
import { useState } from "react";
import { Button } from "../../Components/atoms/button/Button";
import { useEffect } from "react";
import {
  filterBy,
  filterByGenre,
  getFilterProps,
  sortBy,
} from "../../helper/helper";
import { ButtonBookMark } from "../../Components/atoms/buttonBookmark";
import { Switch } from "../../Components/atoms/switch";
import { IFilm } from "../../types/index";

export const Films = () => {
  const filterProps = {
    countries: getFilterProps(films, "country"), //array
    genres: getFilterProps(films, "genre"), //array
  };
  const selectedFilmDefault = films[1];
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
  const [genreList, setGenreList] = useState<any>([]);
  const [selectedFilm, setSelectedFilm] = useState<any>(null);
  const [bookmarksId, setBookmarksId] = useState<number[]>([]);
  const [viewedId, setViewedId] = useState<number[]>([]);

  const onClickSearchBtn = () => {
    setIsShowNextFilmBtn(false);
    setInputValueHeader("");
  };

  useEffect(() => {
    if (inputValueHeader.length > 2) {
      const filterByTitile = filterBy(
        films as any,
        inputValueHeader as any,
        "title"
      );
      setFilterdFilms(filterByTitile);
      return;
    }
    if (inputValueHeader.length) {
      setFilterdFilms(films);
    }
  }, [inputValueHeader]);

  const onChangeHandlerSearchHeader = (text: string) => {
    setInputValueHeader(text);
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
    const filterByField = sortBy(films as any[], [], field as string);
    setFilterdFilms(filterByField.slice(0, 1));
    setIsShowFilter(!isShowFilter);
    setIsShowNextFilmBtn(true);
  };

  const onClickNextFilm = () => {
    const field = sortSettings.find((el) => el.isActive)?.field;
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
      from: type === "from" ? value : sortFromToYear.from, //можно сделать от минимального года до сегодняшней даты
      to: type === "to" ? value : sortFromToYear.to, //можно сделать от минимального года до сегодняшней даты
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
      from: type === "from" ? value : sortFromToRating.from, //можно сделать от минимального года до сегодняшней даты
      to: type === "to" ? value : sortFromToRating.to, //можно сделать от минимального года до сегодняшней даты
    };
    setSortFromToRating(newSortFromToRating);
  };
  const onChangeHandlerGenre = (value: string) => {
    setGenreList([...genreList, value]);
  };
  const onClickDeleteGenre = (value: string) => {
    const index = genreList.indexOf(value);
    const newList = [...genreList];
    newList.splice(index, 1);
    setGenreList(newList);
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

    //FilterByRating
    /* const temporaryByRatingFromTo =
      sortFromToRating.from && sortFromToRating.to
        ? (setFilterdFilms(
            films.filter(
              (film: any) =>
                film.imdbRating >= Number(sortFromToRating.from) &&
                film.imdbRating <= Number(sortFromToRating.to)
            )
          ),
          setIsShowNextFilmBtn(false))
        : (setFilterdFilms(films.slice(0, 1)), setIsShowNextFilmBtn(true));*/

    //FilterByGenre
    const temporaryByGenre = genreList.length
      ? (setFilterdFilms(filterByGenre(films, genreList)),
        setIsShowNextFilmBtn(false))
      : (setFilterdFilms(films.slice(0, 1)), setIsShowNextFilmBtn(true));
    setIsShowFilter(false);
  };

  const onClickShortCard = (id: number) => {
    console.log(selectedFilm);

    const newSelectedFilm = films.find(({ id: filmId }) => id === filmId);
    if (newSelectedFilm) {
      setSelectedFilm(newSelectedFilm);
    }
  };
  const addBookmark = (id: number) => {
    const newBookmarksId = [...bookmarksId, id];
    const hasId = bookmarksId.find((currentId) => currentId === id);
    if (hasId) {
      return;
    }
    setBookmarksId(newBookmarksId);
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarksId));
  };
  const removeBookmark = (id: number) => {
    const filterBookmarksId = bookmarksId.filter(
      (currentId) => currentId !== id
    );
    setBookmarksId(filterBookmarksId);
    localStorage.setItem("bookmarks", JSON.stringify(filterBookmarksId));
  };

  const onChangedViewed = (id: number, checked: boolean) => {
    const newViewedId = checked
      ? viewedId.filter((currentId) => currentId !== id)
      : [...viewedId, id];

    setViewedId(newViewedId);

    localStorage.setItem("viewedId", JSON.stringify(newViewedId));
  };

  useEffect(() => {
    const savedBookmarks = localStorage.getItem("bookmarks");
    if (savedBookmarks) {
      setBookmarksId(JSON.parse(savedBookmarks));
    }
    const savedViewedId = localStorage.getItem("viewedId");
    if (savedViewedId) {
      setViewedId(JSON.parse(savedViewedId));
    }

    return () => {};
  }, []);

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
            onChangeHandlerGenre={onChangeHandlerGenre}
            onClickDeleteGenre={onClickDeleteGenre}
            value={inputValueFilter}
            valueSelectCountry={valueSelectCountry}
            genreList={genreList}
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
            {filterdFilms.map((film: IFilm) => {
              return (
                <div key={film.id} className="shortCardAndButtons">
                  <ShortCardFilm
                    onClickShortCard={onClickShortCard}
                    {...film}
                  />
                  <div className="btns__group">
                    {!bookmarksId.find((id) => id === film.id) ? (
                      <ButtonBookMark
                        isActive={true}
                        text={"Add"}
                        id={film.id}
                        onClick={addBookmark}
                      />
                    ) : (
                      <ButtonBookMark
                        isActive={false}
                        text={"Remove"}
                        id={film.id}
                        onClick={removeBookmark}
                      />
                    )}

                    <Switch
                      checked={Boolean(viewedId.includes(film.id as number))}
                      text={"Просмотрено"}
                      onChange={onChangedViewed}
                      id={film.id}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* {selectedFilm ? (
          <CardFilm film={selectedFilm} />
        ) : (
          <p
            style={{
              fontSize: "50px",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            film not selected
          </p>
        )} */}

        {/* <StarRating /> */}
        {/* <TrailerFilm title={selectedFilm.title} {...trailerCurrent} /> */}
      </div>
    </div>
  );
};
