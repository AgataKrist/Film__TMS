import { memo } from "react";
import * as React from "react";
import "./index.css";
import { IFilm } from "./../../../types/index";

interface IDescription {
  film: any;
}

export const Description = memo(({ film }: IDescription) => {
  const values = Object.values(film);
  const needKey = [
    "year",
    "released",
    "runtime",
    "boxOffice",
    "genre",
    "country",
    "production",
    "writer",
    "director",
    "actors",
  ];
  const listDescriptionFilm = (
    <ul className={"list"}>
      {Object.keys(film)
        .filter((fieldKey) => {
          if (needKey.includes(fieldKey)) {
            return fieldKey;
          }
        })
        .map((fieldKey, i) => {
          const order = { order: needKey.indexOf(fieldKey) + 1 };

          const value = values
            .filter((value) => {
              if (value === film[fieldKey]) {
                return value;
              }
            })
            .toString();
          return (
            <li style={order} key={i}>
              <span className={"description__name"}>{fieldKey}</span>
              <span className={"description__value"}>{value}</span>
            </li>
          );
        })}
    </ul>
  );

  return <div>{listDescriptionFilm}</div>;
});
