import { memo } from "react";
import "./index.css";

interface IButtonBookMark {
  isActive: boolean;
  text: string;
  id: number;
  onClick: (id: number) => void;
}

export const ButtonBookMark = memo(
  ({ text, id, isActive, onClick }: IButtonBookMark) => {
    return (
      <button
        className={isActive ? "btn__bookMark active" : "btn__bookMark"}
        onClick={() => onClick(id)}
      >
        {text}
      </button>
    );
  }
);
