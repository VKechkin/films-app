import { combineReducers, configureStore } from "@reduxjs/toolkit";

import filmSlice from "@store/filmSlice";

const rootReducer = combineReducers({
  film: filmSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
