import { memo } from "react";
import "./index.css";

interface IPageTitle {
  pageTitle: string;
}

export const PageTitle = memo(({ pageTitle }: IPageTitle) => (
  <div className="page__title">
    <h2 className="page__title-text">{pageTitle}</h2>
  </div>
));
