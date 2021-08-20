import { memo } from "react";
import "./index.css";

interface IBtnFilter {
  isActive?: boolean;
  text: string;
}

export const BtnFilter = memo(({ isActive, text }: IBtnFilter) => (
  <button className={isActive ? "btn__filter active" : "btn__filter"}>
    {text}
  </button>
));
