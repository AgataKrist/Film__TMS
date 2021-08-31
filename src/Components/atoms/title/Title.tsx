import { memo } from "react";
import "./index.css";

interface ITitle {
  title: string;
  isShort?: boolean;
}

export const Title = memo(({ title, isShort }: ITitle) => (
  <div className={isShort ? "shortFilm__title-wrapper" : "film__title-wrapper"}>
    <a href="#" className={"film__title-link"}>
      <h2 className={!isShort ? "film__title" : "film__title-short"}>
        {title}
      </h2>
    </a>
  </div>
));
