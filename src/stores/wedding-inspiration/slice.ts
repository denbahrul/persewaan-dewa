import { createSlice } from "@reduxjs/toolkit";
import {
  //   createWeddingInspiration,
  //   deleteWeddingInspiration,
  getWeddingInspiration,
  //   getWeddingInspirationById,
  //   updateWeddingInspiration,
} from "./async";
import { IWeddingInspiration } from "../../types/wedding-inspiration";

interface WeddingInspirationState {
  entities?: IWeddingInspiration[];
  //   currentWeddingInspiration?: IWeddingInspiration | null;
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: WeddingInspirationState = {
  entities: [],
  //   currentWeddingInspiration: null,
  loading: "idle",
};
const weddingInspirationSlice = createSlice({
  name: "weddingInspiration",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get weddingInspiration
    builder.addCase(getWeddingInspiration.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(getWeddingInspiration.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getWeddingInspiration.rejected, (state) => {
      state.loading = "failed";
    });

    // //get weddingInspiration by id
    // builder.addCase(getWeddingInspirationById.fulfilled, (state, action) => {
    //   state.currentWeddingInspiration = action.payload;
    //   state.loading = "succeeded";
    // });
    // builder.addCase(getWeddingInspirationById.pending, (state) => {
    //   state.loading = "pending";
    // });
    // builder.addCase(getWeddingInspirationById.rejected, (state) => {
    //   state.currentWeddingInspiration = null;
    //   state.loading = "failed";
    // });

    // //create weddingInspiration
    // builder.addCase(createWeddingInspiration.fulfilled, (state, action) => {
    //   state.entities = [...(state.entities || []), action.payload];
    //   state.loading = "succeeded";
    // });
    // builder.addCase(createWeddingInspiration.pending, (state) => {
    //   state.loading = "pending";
    // });
    // builder.addCase(createWeddingInspiration.rejected, (state) => {
    //   state.loading = "failed";
    // });

    // //update weddingInspiration
    // builder.addCase(updateWeddingInspiration.fulfilled, (state, action) => {
    //   state.entities = state.entities?.map((weddingInspiration) =>
    //     weddingInspiration.id === action.payload.id ? action.payload : weddingInspiration,
    //   );
    //   state.loading = "succeeded";
    // });
    // builder.addCase(updateWeddingInspiration.pending, (state) => {
    //   state.loading = "pending";
    // });
    // builder.addCase(updateWeddingInspiration.rejected, (state) => {
    //   state.loading = "failed";
    // });

    // //delete weddingInspiration
    // builder.addCase(deleteWeddingInspiration.fulfilled, (state, action) => {
    //   state.entities = state.entities?.filter(
    //     (weddingInspiration) => weddingInspiration.id !== action.payload,
    //   );
    //   state.loading = "succeeded";
    // });
    // builder.addCase(deleteWeddingInspiration.pending, (state) => {
    //   state.loading = "pending";
    // });
    // builder.addCase(deleteWeddingInspiration.rejected, (state) => {
    //   state.loading = "failed";
    // });
  },
});

export default weddingInspirationSlice.reducer;
