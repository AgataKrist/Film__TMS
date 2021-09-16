import React, { useEffect, useState } from "react";

import { films } from "./../../mock";
import { useParams } from "react-router-dom";
import { CardFilm } from "./../molecules/cardFilm/CardFilm";
import { IFilm } from "./../../types/index";

export const Film = () => {
  const [selectedFilm, setSelectedFilm] = useState<IFilm | null>(null);

  const params = useParams() as any;
  console.log({ params });
  useEffect(() => {
    if (params?.id) {
      const foundFilm = films.find(
        ({ id: filmId }) => Number(filmId) === Number(params?.id)
      );
      // console.log({ foundUser, id: params?.id, films });
      if (foundFilm) {
        setSelectedFilm(foundFilm);
      }
    }
    return () => {};
  }, [params?.id]);

  return (
    <main>
      {selectedFilm ? <CardFilm film={selectedFilm} /> : <p>No film</p>}
    </main>
  );
};
