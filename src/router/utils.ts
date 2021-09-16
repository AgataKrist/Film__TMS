const TOKEN_KEY = "jwt";

export const logining = (userName: string) => {
  localStorage.setItem("USER_NAME", userName);
};

export const logout = () => {
  localStorage.removeItem("USER_NAME");
};

export const isLogin = () => {
  if (localStorage.getItem("USER_NAME")) {
    return true;
  }

  return false;
};
