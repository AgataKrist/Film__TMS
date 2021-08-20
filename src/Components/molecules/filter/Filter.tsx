import * as React from "react";
import { memo } from "react";
import { BtnFilter } from "../../atoms/filterCardBtn";
import { Title } from "../../atoms/title";
import "./index.css";
import { FormFilter } from "./../../atoms/formFilter/FormFilter";

export const Filter = memo(() => {
  return (
    <div className={"filterBOX__wrapper"}>
      <div className="filterBOX__content">
        <div className="sort">
          <Title title={"Sort by:"} />
          <div className="btn__group">
            <BtnFilter text={"Rating"} isActive={true} />
            <BtnFilter text={"Year"} />
          </div>
        </div>
        <div className="filter">
          <Title title={"Filter:"} />
          <FormFilter />
        </div>
        <BtnFilter text={"Show results"} isActive={true} />
      </div>
    </div>
  );
});
