import { memo } from "react";
import "./index.css";

interface IFieldSearch {
  handlerSearchFilter: (text: string) => void;
  value: string;
}

export const FieldSearch = memo(
  ({ handlerSearchFilter, value }: IFieldSearch) => {
    return (
      <label className={"label label__search"}>
        <div className={"field__title"}>Search in title and plot</div>
        <input
          value={value}
          onChange={(e) => handlerSearchFilter(e.target.value)}
          type="text"
        />
      </label>
    );
  }
);
