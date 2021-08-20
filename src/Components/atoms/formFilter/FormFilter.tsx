import { memo } from "react";
import "./index.css";

export const FormFilter = memo(() => (
  <form className={"form__filter"} action="/">
    <label className={"label label__search"}>
      <div className={"field__title"}>Search in title and plot</div>
      <input type="text" />
    </label>
    <label className={"label label__countries"}>
      <div className={"field__title"}>Countries</div>
      <select>
        <option value="belarus">Беларусь</option>
        <option value="russia">Россия</option>
        <option value="usa">США</option>
      </select>
    </label>
    <label className={"label label__years"}>
      <div className={"field__title"}>Years</div>
      <label className={"from"}>
        <span>From</span>
        <input type="text" />
      </label>
      <label className={"to"}>
        <span>To</span>
        <input type="text" />
      </label>
    </label>
    <label className={"label label__rating"}>
      <div className={"field__title"}>Rating</div>
      <label className={"from"}>
        <span>From</span>
        <input type="text" />
      </label>
      <label className={"to"}>
        <span>To</span>
        <input type="text" />
      </label>
    </label>
    <label className={"label label__genre"}>
      <div className={"field__title"}>Genres</div>
      <div className="genres__wrapper">
        <div className="tags"></div>
        <button className="add">add</button>
      </div>
    </label>
  </form>
));
