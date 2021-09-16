import { memo } from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

interface II {
  Icon: any;
  isDark?: boolean;
  way: string;
}

export const SidebarItem = ({ Icon, isDark, way }: II) => {
  return (
    <Link to={way}>
      <span
        className={!isDark ? "link__itemSidebar" : "link__itemSidebar-dark"}
      >
        <Icon className={"icon__item"} style={"icon__item"} />
      </span>
    </Link>
  );
};
