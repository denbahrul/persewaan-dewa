import { configureStore } from "@reduxjs/toolkit";
import weddingInspirationReducer from "../stores/wedding-inspiration/slice";
import productReducer from "../stores/product/slice";
import tentPackageReducer from "../stores/tent-package/slice";

export const store = configureStore({
  reducer: {
    weddingInspiration: weddingInspirationReducer,
    product: productReducer,
    tentPackage: tentPackageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
