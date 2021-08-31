import { memo } from "react";
import "./index.css";

interface IFieldGenre {
  values: string[];
}

export const FieldGenre = memo(({ values }: IFieldGenre) => {
  return (
    <label className={"label label__genre"}>
      <div className={"field__title"}>Genres</div>
      <div className="genres__wrapper">
        <div className="tags"></div>
        <span className={"add"}>add</span>
        <select className={"select"} value={""}>
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
});
