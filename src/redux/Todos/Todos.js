import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import konfigurasi from "config/Config";

const initialState = {
  getTodos: [],
  token: "",
};

// GET GROUP
// eslint-disable-next-line no-unused-vars
export const getGroup = () => async (dispatch, state) => {
  var config = {
    method: "GET",
    url: konfigurasi.api.baseUrl + "todos",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
      "Content-Type": "application/json",
    },
  };
  axios(config)
    .then((response) => {
      console.log(response.data);
      dispatch(setTodos(response.data));
    })
    .catch((error) => {
      console.error(error);
    });
};

// CREATE GROUP
export const addGroup = (title, description) => async () => {
  let data = {
    title,
    description,
  };

  var config = {
    method: "post",
    url: konfigurasi.api.baseUrl + "todos",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
      "Content-Type": "application/json",
    },
    data: data,
  };
  axios(config)
    .then((response) => {
      console.log(response.data);
      // dispatch(actionMessage(response.message));
    })
    .catch((error) => {
      console.log(error.response.data.error);
    });
};
export const todos = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.getTodos = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setTodos, setToken } = todos.actions;

export const selectGroup = (state) => state.Todos.getTodos;

export default todos.reducer;
