import { memo } from "react";
import "./index.css";
import ava from "../../../Accets/IMG/Ava.svg";

interface ISign {
  name: string;
}

export const Sign = memo(({ name }: ISign) => (
  <div className="header__sign">
    <span className={"sign__name"}>{name}</span>
    <span className={"sign__ava"}>
      <a href="#">
        <img src={ava} alt="ava" />
      </a>
    </span>
  </div>
));
