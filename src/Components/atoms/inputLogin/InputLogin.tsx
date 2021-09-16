import { memo } from "react";
import "./index.css";

interface IInputLogin {
  handlerSearchFilter: (text: string) => void;
  value?: string;
  title: string;
  isValid: boolean;
}

export const InputLogin = memo(
  ({ handlerSearchFilter, value, title, isValid }: IInputLogin) => {
    return (
      <div style={{ width: "150px" }}>
        <label>{title}</label>
        <input
          onChange={(e) => handlerSearchFilter(e.target.value)}
          type="text"
          style={
            isValid
              ? { marginBottom: "20px" }
              : {
                  marginBottom: "20px",
                  border: "1px solid red",
                  outline: "1px solid red",
                }
          }
        />
      </div>
    );
  }
);
