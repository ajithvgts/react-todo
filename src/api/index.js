import axios from "axios";

export const getTodos = () =>
  axios({
    method: "GET",
    url: import.meta.env.VITE_API_BASE_URL + "todos",
  });

export const updateTodo = ({ id, data }) =>
  axios({
    method: "PUT",
    url: import.meta.env.VITE_API_BASE_URL + "update-todo/" + id,
    data,
  });

export const createTodo = ({ data }) =>
  axios({
    method: "POST",
    url: import.meta.env.VITE_API_BASE_URL + "create-todo",
    data,
  });

export const deleteTodo = ({ id }) =>
  axios({
    method: "DELETE",
    url: import.meta.env.VITE_API_BASE_URL + "delete-todo/" + id,
  });
