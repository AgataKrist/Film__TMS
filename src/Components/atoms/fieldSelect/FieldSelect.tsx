import { memo } from "react";
import "./index.css";

interface IFieldSelect {
  values: string[];
}

export const FieldSelect = memo(({ values }: IFieldSelect) => {
  return (
    <label className={"label label__countries"}>
      <div className={"field__title"}>Countries</div>
      <select>
        {values.map((value) => {
          return <option value={`${value}`}>{`${value}`}</option>;
        })}
      </select>
    </label>
  );
});
