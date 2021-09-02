import { memo } from "react";
import "./index.css";

interface IFieldGenre {
  values: string[];
  genreList: string[] | [];
  onChange: (value: string) => void;
  onClick: (value: string) => void;
}

export const FieldGenre = memo(
  ({ values, genreList, onChange, onClick }: IFieldGenre) => {
    return (
      <label className={"label label__genre"}>
        <div className={"field__title"}>Genres</div>
        <div className="genres__wrapper">
          <div className="tags">
            {genreList.map((genre) => {
              return (
                <div className={"tags__item"}>
                  {genre}
                  <span onClick={() => onClick(genre)} className={"tag__close"}>
                    X
                  </span>
                </div>
              );
            })}
          </div>
          <span className={"add"}>add</span>
          <select
            onChange={(e) => onChange(e.target.value)}
            className={"select"}
            value={""}
          >
            <option></option>
            {values.map((value, i) => {
              return (
                <option key={i} value={`${value}`}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>
      </label>
    );
  }
);
