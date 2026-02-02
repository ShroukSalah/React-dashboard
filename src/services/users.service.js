import { api } from "./api";

export const getUsers = async () => {
  const response = await api.get("/users");
  return response.data.users;
};

export const getUserById = async (id) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};