import { memo } from "react";
import "./index.css";
import {
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
} from "../../../Accets/IMG/sidebarIcon/icons";
import { SidebarItem } from "../../atoms/sidebarItem/SidebarItem";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Sidebar = memo(() => {
  return (
    <div className="wrapper__sidebar">
      <div className="sidebar__content">
        <SidebarItem Icon={Icon1} way={"/"} />
        <SidebarItem Icon={Icon2} way={"/films"} />
        {/*<SidebarItem Icon={Icon3}  />
         <SidebarItem Icon={Icon4} />
        <SidebarItem Icon={Icon5} />
        <SidebarItem Icon={Icon6} />
        <SidebarItem Icon={Icon7} isDark={true} /> */}
      </div>
    </div>
  );
});
