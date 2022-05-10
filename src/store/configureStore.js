import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import api from "./middleware/api";
import error from "./middleware/error";

import { reducer } from "./reducer";

export const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), error, api],
});
