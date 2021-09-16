import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Title } from "../atoms/title";
import { InputLogin } from "./../atoms/inputLogin/InputLogin";
import { validateName, validateEmail } from "./../../helper/helper";
import { logining } from "../../router/utils";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const isValidUserName = validateName(userName);
  const isValidEmail = validateEmail(email);

  const isValid = () => {
    if (isValidUserName && isValidEmail) {
      return true;
    }
    return false;
  };

  const history = useHistory();
  const login = () => {
    if (isValidUserName && isValidEmail) {
      logining(userName);
      history.push("/films");
    }
  };
  const setUser = (value: string) => {
    setUserName(value);
  };
  const setMail = (value: string) => {
    setEmail(value);
  };
  return (
    <div style={{ marginLeft: "400px" }} className="App">
      <main>
        <Title title={"Login"} />
        <div
          style={{
            width: "250px",
            display: "flex",
            flexDirection: "column",
            background: "#fff",
            padding: "30px 20px 40px",
            borderRadius: "10px",
          }}
        >
          <InputLogin
            title={"name"}
            handlerSearchFilter={setUser}
            isValid={isValidUserName}
          />
          <InputLogin
            title={"mail"}
            handlerSearchFilter={setMail}
            isValid={isValidEmail}
          />
          <button onClick={login} disabled={!isValid()}>
            Login
          </button>
        </div>
      </main>
    </div>
  );
};
