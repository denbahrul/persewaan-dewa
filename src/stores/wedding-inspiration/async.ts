import { createAsyncThunk } from "@reduxjs/toolkit";
// import Swal from "sweetalert2";
import { apiV1 } from "../../libs/api";
// import {
//   CreateWeddingINspirationDTO,
//   UpdateWeddingINspirationDTO,
// } from "../../validation/weddingInspirationSchema";
// import { IWeddingInspiration } from "../../types/wedding-inspiration";

export const getWeddingInspiration = createAsyncThunk(
  "weddingInspiration/getWeddingInspiration",
  async (_, thunkAPI) => {
    try {
      const res = await apiV1.get("/wedding-inspiration");

      return res.data.data;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);

// export const getWeddingInspirationById = createAsyncThunk(
//   "weddingInspiration/getWeddingInspirationById",
//   async (weddingInspirationId: number, thunkAPI) => {
//     try {
//       const res = await apiV1.get(`/weddingInspiration/${weddingInspirationId}`);

//       return res.data.data;
//     } catch (error) {
//       console.log(error);
//       if (error instanceof Error) {
//         return thunkAPI.rejectWithValue(error.message);
//       }
//     }
//   },
// );

// export const createWeddingINspiration = createAsyncThunk<
//   IWeddingInspiration,
//   CreateWeddingINspirationDTO
// >("weddingInspiration/createWeddingINspiration", async (data, thunkAPI) => {
//   try {
//     const formData = new FormData();
//     Object.entries(data).forEach(([key, value]) => {
//       if (key === "weddingInspirationImage" && value instanceof FileList) {
//         Array.from(value).forEach((file) => {
//           formData.append("weddingInspirationImage", file);
//         });
//       } else if (key !== "weddingInspirationImage") {
//         formData.append(key, value);
//       }
//     });
//     const res = await apiV1.post(`/weddingInspiration/create`, formData);
//     Swal.fire({
//       icon: "success",
//       title: res.data.message,
//       showConfirmButton: false,
//       iconColor: "#006dfc",
//       timer: 1500,
//     });
//     return res.data.data;
//   } catch (error) {
//     console.log(error);
//     if (error instanceof Error) {
//       Swal.fire({
//         icon: "error",
//         title: "Oops..",
//         text: `${error.message}`,
//       });

//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// });

// export const updateWeddingINspiration = createAsyncThunk<
//   IWeddingInspiration,
//   { data: UpdateWeddingINspirationDTO; weddingInspirationId: number }
// >("weddingInspiration/updateWeddingINspiration", async ({ data, weddingInspirationId }, thunkAPI) => {
//   try {
//     const formData = new FormData();
//     Object.entries(data).forEach(([key, value]) => {
//       if (key === "weddingInspirationImage" && value instanceof FileList) {
//         Array.from(value).forEach((file) => {
//           formData.append("weddingInspirationImage", file);
//         });
//       } else if (key !== "weddingInspirationImage") {
//         formData.append(key, value);
//       }
//     });
//     const res = await apiV1.put(`/weddingInspiration/update/${weddingInspirationId}`, formData);
//     Swal.fire({
//       icon: "success",
//       title: res.data.message,
//       showConfirmButton: false,
//       iconColor: "#006dfc",
//       timer: 1500,
//     });
//     return res.data.weddingInspiration;
//   } catch (error) {
//     console.log(error);
//     if (error instanceof Error) {
//       Swal.fire({
//         icon: "error",
//         title: "Oops..",
//         text: `${error.message}`,
//       });

//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// });

// export const deleteWeddingINspiration = createAsyncThunk(
//   "weddingInspiration/deleteWeddingINspiration",
//   async (id: number, thunkAPI) => {
//     try {
//       const res = await apiV1.delete(`/weddingInspiration/delete/${id}`);
//       Swal.fire({
//         icon: "success",
//         title: res.data.message,
//         showConfirmButton: false,
//         iconColor: "#006dfc",
//         timer: 1500,
//       });
//       return res.data.data.id;
//     } catch (error) {
//       console.log(error);
//       if (error instanceof Error) {
//         return thunkAPI.rejectWithValue(error.message);
//       }
//     }
//   },
// );
