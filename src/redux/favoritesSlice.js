import { createSlice } from "@reduxjs/toolkit";

// Функція для збереження обраних кемперів у localStorage
const saveFavoritesToLocalStorage = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

// Ініціалізація обраних кемперів із localStorage (якщо вони там є)
const loadFavoritesFromLocalStorage = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: loadFavoritesFromLocalStorage(),
  },
  reducers: {
    addFavorite: (state, action) => {
      // Перевірка, чи вже є кемпер в обраних
      if (!state.items.some((camper) => camper.id === action.payload.id)) {
        state.items.push(action.payload);
        saveFavoritesToLocalStorage(state.items);
      }
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter(
        (camper) => camper.id !== action.payload
      );
      saveFavoritesToLocalStorage(state.items);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
