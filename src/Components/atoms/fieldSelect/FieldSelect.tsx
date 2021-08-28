import { memo } from "react";
import "./index.css";

interface IFieldSelect {
  onChangeHandlerSelectCountre: (valueCountry: string) => void;
  values: string[];
  valueSelectCountry: string;
}

export const FieldSelect = memo(
  ({
    values,
    valueSelectCountry,
    onChangeHandlerSelectCountre,
  }: IFieldSelect) => {
    return (
      <label className={"label label__countries"}>
        <div className={"field__title"}>Countries</div>
        <select
          value={valueSelectCountry}
          onChange={(e) => {
            onChangeHandlerSelectCountre(e.target.value);
          }}
        >
          <option value=""></option>
          {values.map((value, i) => {
            return <option key={value} value={`${value}`}>{`${value}`}</option>;
          })}
        </select>
      </label>
    );
  }
);
