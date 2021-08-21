import { memo } from "react";
import "./index.css";

export const FieldGenre = memo(() => {
  return (
    <label className={"label label__genre"}>
      <div className={"field__title"}>Genres</div>
      <div className="genres__wrapper">
        <div className="tags"></div>
        <button className="add">add</button>
      </div>
    </label>
  );
});
