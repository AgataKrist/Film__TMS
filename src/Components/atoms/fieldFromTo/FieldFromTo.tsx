import { memo } from "react";
import "./index.css";

interface IFieldFromTo {
  title: string;
}

export const FieldFromTo = memo(({ title }: IFieldFromTo) => {
  return (
    <label className={"label from_to"}>
      <div className={"field__title"}>{title}</div>
      <label className={"from"}>
        <span>From</span>
        <input type="text" />
      </label>
      <label className={"to"}>
        <span>To</span>
        <input type="text" />
      </label>
    </label>
  );
});
