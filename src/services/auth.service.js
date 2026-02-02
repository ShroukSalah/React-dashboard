import { api } from "./api";

// LOGIN
export const loginService = (data) => {
  return api.post("/auth/login", {
    username: data.username,
    password: data.password,
  });
};

// SIGNUP
export const signupService = (data) => {
  return api.post("/users/add", data);
};
