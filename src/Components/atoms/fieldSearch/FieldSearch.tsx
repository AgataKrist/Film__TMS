import { memo } from "react";
import "./index.css";

interface IFieldSearch {}

export const FieldSearch = memo(() => {
  return (
    <label className={"label label__search"}>
      <div className={"field__title"}>Search in title and plot</div>
      <input type="text" />
    </label>
  );
});
