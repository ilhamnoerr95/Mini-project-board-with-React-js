import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import konfigurasi from "config/Config";
// import { useCookies } from "react-cookie";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirm: "",
  message: "",
};
// CALL API REGISTER HERE
export const submitRegister =
  (name, email, password, confirm) => async (dispatch) => {
    let data = {
      name,
      email,
      password,
      confirm,
    };

    var config = {
      method: "post",
      url: konfigurasi.api.baseUrl + "signup",
      headers: {},
      data: data,
    };
    axios(config)
      .then((response) => {
        console.log(response.data);
        dispatch(actionMessage(response.message));
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  };

// CALL API LOGIN HERE
// eslint-disable-next-line no-unused-vars
export const submitLogin = (email, password) => async (dispatch) => {
  let data = {
    email,
    password,
  };

  var config = {
    method: "post",
    url: konfigurasi.api.baseUrl + "auth/login",
    headers: {},
    data: data,
  };
  axios(config)
    .then((response) => {
      // console.log(response.data.auth_token);
      localStorage.setItem("token", JSON.stringify(response.data.auth_token));
    })
    .catch((error) => {
      console.log(error.response.data.error);
    });
};
export const authentication = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    actionName: (state, action) => {
      state.name = action.payload;
    },
    actionEmail: (state, action) => {
      state.email = action.payload;
    },
    actionPassword: (state, action) => {
      state.password = action.payload;
    },
    actionConfirm: (state, action) => {
      state.confirm = action.payload;
    },
    actionMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { actionName, actionMessage } = authentication.actions;

export default authentication.reducer;
