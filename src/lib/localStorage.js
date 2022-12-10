import ExpiredStorage from "expired-storage";

export const getAuthToken = () => {
  if (localStorage.getItem("user_token")) {
    return localStorage.getItem("user_token");
  }
  return "";
};

export const removeAuthToken = () => {
  localStorage.removeItem("user_token");
};

export const setAuthToken = async (token) => {
  let expiredStorage = new ExpiredStorage();
  expiredStorage.setItem("user_token", token, 43200); //43200 - 12hrs
  // localStorage.setItem('user_token', token);
  return true;
};

export const setTheme = async (theme) => {
  if (theme === "dark") {
    document.body.classList.add("light_theme");
  } else {
    document.body.classList.remove("light_theme");
  }
  localStorage.setItem("theme", theme);
  return theme;
};

export const getTheme = () => {
  let theme = localStorage.getItem("theme");
  if (theme) {
    if (theme === "dark") {
      document.body.classList.add("light_theme");
    } else if (theme === "light") {
      document.body.classList.remove("light_theme");
    }
  } else {
    theme = "light";
  }
  return theme;
};
