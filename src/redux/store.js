import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campersSlice";
import favoritesReducer from "./favoritesSlice";

export default configureStore({
  reducer: {
    campers: campersReducer,
    favorites: favoritesReducer,
  },
});
