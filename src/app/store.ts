import { configureStore } from "@reduxjs/toolkit";
import weddingInspirationReducer from "../stores/wedding-inspiration/slice";

export const store = configureStore({
  reducer: {
    weddingInspiration: weddingInspirationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
