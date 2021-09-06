import { memo } from "react";
import "./index.css";

interface ISwitch {
  checked: boolean;
  text: string;
  onChange: (id: number, checked: boolean) => void;
  id: number;
}

export const Switch = memo(({ text, id, onChange, checked }: ISwitch) => {
  return (
    <div className={"swith__wrapper"}>
      <span className={"switch__text"}>{text}</span>
      <label className="switch">
        <input
          checked={checked}
          onChange={() => onChange(id, checked)}
          type="checkbox"
        />
        <span className="slider" />
      </label>
    </div>
  );
});
