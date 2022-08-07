const { configureStore } = require("@reduxjs/toolkit");
import Auth from "./Auth/Auth";
import Utils from "./Utils/Utils";
import Todos from "./Todos/Todos";

export const store = configureStore({
  reducer: {
    Auth,
    Utils,
    Todos,
  },
});
