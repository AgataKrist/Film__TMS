import { memo } from "react";
import "./index.css";

interface IButtonSorting {
  isActive: boolean;
  field: string;
  FIELD_NAME: string;
  handlerSorting: (field: string) => void;
}

export const ButtonSorting = memo(
  ({ isActive, FIELD_NAME, field, handlerSorting }: IButtonSorting) => (
    <button
      className={isActive ? "btn__filter active" : "btn__filter"}
      onClick={() => handlerSorting(field)}
    >
      {FIELD_NAME}
    </button>
  )
);
