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

function App() {
  const countries = Array.from(
    new Set(films.map((film) => film.country.split(", ")).flat())
  );
  const genres = Array.from(new Set(films.map((film) => film.genre).flat()));
  const filterProps = {
    countries, //array
    genres, //array
  };
  const selectedFilm = films[1];
  const trailerCurrent = trailer[0];

  const [filterdFilms, setFilterdFilms] = useState(films.slice(0, 1));
  const [inputValue, setInputValue] = useState("");
  const [isClikedfilterBtn, setisClikedfilterBtn] = useState(false);
  const [isFilterByRatingCheck, setisFilterByRatingCheck] = useState(false);
  const [isFilterByYearCheck, setisFilterByYearCheck] = useState(false);

  const onClickSearchBtn = () => {
    const filterByTitile = films.filter((film) =>
      film.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilterdFilms(filterByTitile);
  };
  const onChangeHandler = (text: string) => {
    setInputValue(text);
    if (text.length > 2) {
      const filterByTitile = films.filter((film) =>
        film.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilterdFilms(filterByTitile);
      return;
    }
    setFilterdFilms(films);
  };
  const onClickFilterBtn = () => {
    setisClikedfilterBtn(!isClikedfilterBtn);
  };

  const onClickNextFilm = () => {
    if (isFilterByRatingCheck) {
      setFilterdFilms(
        [...films]
          .sort((a, b) => a.imdbRating - b.imdbRating)
          .slice(0, filterdFilms.length + 1)
      );
      return;
    }
    if (isFilterByYearCheck) {
      setFilterdFilms(
        [...films]
          .sort((a, b) => a.year - b.year)
          .slice(0, filterdFilms.length + 1)
      );
      return;
    }
    setFilterdFilms(films.slice(0, filterdFilms.length + 1));
  };
  const onClickFilterByRating = () => {
    setisFilterByYearCheck(false);
    setisFilterByRatingCheck(!isFilterByRatingCheck);
    setFilterdFilms(
      [...films].sort((a, b) => a.imdbRating - b.imdbRating).slice(0, 1)
    );
    setisClikedfilterBtn(false);
  };
  const onClickFilterByYear = () => {
    setisFilterByRatingCheck(false);
    setisFilterByYearCheck(!isFilterByYearCheck);
    setFilterdFilms([...films].sort((a, b) => a.year - b.year).slice(0, 1));
    setisClikedfilterBtn(false);
  };

  return (
    <div className="App">
      <Sidebar />
      <div className="main">
        <Header
          value={inputValue}
          onClickSearchBtn={onClickSearchBtn}
          onChangeHandler={onChangeHandler}
          onClickFilterBtn={onClickFilterBtn}
        />
        {isClikedfilterBtn ? (
          <Filter
            {...filterProps}
            isFilterByRatingCheck={isFilterByRatingCheck}
            isFilterByYearCheck={isFilterByYearCheck}
            onClickFilterByRating={onClickFilterByRating}
            onClickFilterByYear={onClickFilterByYear}
          />
        ) : null}
        <div className="allFilms__wrapper">
          <div className="btn">
            {filterdFilms.length !== films.length && (
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
        <CardFilm film={selectedFilm} />
        <StarRating />
        <TrailerFilm title={selectedFilm.title} {...trailerCurrent} />
      </div>
    </div>
  );
}

export default App;
