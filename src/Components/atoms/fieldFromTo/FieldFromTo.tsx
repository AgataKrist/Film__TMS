import { memo } from "react";
import "./index.css";

interface IFieldFromTo {
  isActive: boolean;
  FIELD_NAME: string;
  field: string;
  from: string | null;
  to: string | null;
  onChange: (value: string, type: string, field: string) => void;
}

export const FieldFromTo = memo(
  ({ FIELD_NAME, onChange, field }: IFieldFromTo) => {
    return (
      <label className={"label from_to"}>
        <div className={"field__title"}>{FIELD_NAME}</div>
        <label className={"from"}>
          <span>From</span>
          <input
            onChange={(e) => onChange(e.target.value, "from", field)}
            type="text"
          />
        </label>
        <label className={"to"}>
          <span>To</span>
          <input
            onChange={(e) => onChange(e.target.value, "to", field)}
            type="text"
          />
        </label>
      </label>
    );
  }
);
