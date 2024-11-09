import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

// Асинхронна дія для отримання кемперів з першої сторінки
export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async () => {
    const response = await axios.get(`${API_URL}?page=1&limit=10`);
    return response.data;
  }
);

// Асинхронна дія для отримання додаткових кемперів на наступній сторінці
export const fetchMoreCampers = createAsyncThunk(
  "campers/fetchMoreCampers",
  async (_, { getState }) => {
    const { campers } = getState();
    const nextPage = campers.currentPage + 1;

    const response = await axios.get(`${API_URL}?page=${nextPage}&limit=10`);
    return { data: response.data, nextPage };
  }
);

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    currentPage: 1,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.currentPage = 1;
      })
      .addCase(fetchMoreCampers.fulfilled, (state, action) => {
        state.items = [...state.items, ...action.payload.data];
        state.currentPage = action.payload.nextPage;
      })
      .addCase(fetchCampers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchMoreCampers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMoreCampers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default campersSlice.reducer;
