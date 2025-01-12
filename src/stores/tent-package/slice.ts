import { createSlice } from "@reduxjs/toolkit";
import {
  createTentPackage,
  deleteTentPackage,
  getTentPackage,
  getTentPackageById,
} from "./async";
import { ITentPackage } from "../../types/tent-package";

interface TentPackageState {
  entities?: ITentPackage[];
  currentTentPackage?: ITentPackage | null;
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: TentPackageState = {
  entities: [],
  currentTentPackage: null,
  loading: "idle",
};
const tentPackageSlice = createSlice({
  name: "tentPackage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get tentPackage
    builder.addCase(getTentPackage.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(getTentPackage.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getTentPackage.rejected, (state) => {
      state.loading = "failed";
    });

    //get tentPackage by id
    builder.addCase(getTentPackageById.fulfilled, (state, action) => {
      state.currentTentPackage = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(getTentPackageById.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getTentPackageById.rejected, (state) => {
      state.currentTentPackage = null;
      state.loading = "failed";
    });

    //create tentPackage
    builder.addCase(createTentPackage.fulfilled, (state, action) => {
      state.entities = [...(state.entities || []), action.payload];
      state.loading = "succeeded";
    });
    builder.addCase(createTentPackage.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(createTentPackage.rejected, (state) => {
      state.loading = "failed";
    });

    // //update tentPackage
    // builder.addCase(updateTentPackage.fulfilled, (state, action) => {
    //   state.entities = state.entities?.map((tentPackage) =>
    //     tentPackage.id === action.payload.id ? action.payload : tentPackage,
    //   );
    //   state.loading = "succeeded";
    // });
    // builder.addCase(updateTentPackage.pending, (state) => {
    //   state.loading = "pending";
    // });
    // builder.addCase(updateTentPackage.rejected, (state) => {
    //   state.loading = "failed";
    // });

    //delete tentPackage
    builder.addCase(deleteTentPackage.fulfilled, (state, action) => {
      state.entities = state.entities?.filter(
        (tentPackage) => tentPackage.id !== action.payload,
      );
      state.loading = "succeeded";
    });
    builder.addCase(deleteTentPackage.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(deleteTentPackage.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export default tentPackageSlice.reducer;
