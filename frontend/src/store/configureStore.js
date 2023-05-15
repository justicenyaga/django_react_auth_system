import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import api from "./middlewares/api";
import reducer from "./reducer";

export default function () {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), api],
  });
}
