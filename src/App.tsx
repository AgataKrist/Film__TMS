import "./App.css";
import { CardFilm } from "./Components/molecules/cardFilm";
import { Filter } from "./Components/molecules/filter";
import { Header } from "./Components/molecules/header";
import { ShortCardFilm } from "./Components/molecules/shortCardFilm";
import { Sidebar } from "./Components/molecules/sidebar";
import { TrailerFilm } from "./Components/molecules/trailerFilm";
import { films, trailer } from "./mock";

function App() {
  const selectedFilm = films[1];
  const trailerCurrent = trailer[0];
  return (
    <div className="App">
      <Sidebar />
      <div className="main">
        <Header />
        <CardFilm film={selectedFilm} />
        <Filter />
        <TrailerFilm title={selectedFilm.title} {...trailerCurrent} />
        <div className="allFilms__wrapper">
          {films.map((film) => {
            return <ShortCardFilm key={film.id} {...film} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
