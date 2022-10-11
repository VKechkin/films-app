import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { filmService } from "@services/filmService";

import { initialState } from "@const";

import { getUpdateData } from "@utils";

const { getFilms } = filmService;

export const getFilmsThunk = createAsyncThunk(
  "film/films",
  async (_, thunkAPI) => {
    try {
      const { data } = await getFilms();
      const updateData = getUpdateData(data);

      thunkAPI.dispatch(setList(updateData));
    } catch (error) {
      return thunkAPI.rejectWithValue("Не удалось загрузить!");
    }
  }
);

const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {
    setList(state, action) {
      state.list = action.payload;
    },
  },
});

export const { setList } = filmSlice.actions;

export default filmSlice.reducer;
