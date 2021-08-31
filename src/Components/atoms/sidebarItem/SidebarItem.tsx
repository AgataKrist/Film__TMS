import { memo } from "react";
import "./index.css";

interface II {
  Icon: any;
  isDark?: boolean;
}

export const SidebarItem = ({ Icon, isDark }: II) => {
  return (
    <a
      className={!isDark ? "link__itemSidebar" : "link__itemSidebar-dark"}
      href="#"
    >
      <Icon className={"icon__item"} style={"icon__item"} />
    </a>
  );
};
