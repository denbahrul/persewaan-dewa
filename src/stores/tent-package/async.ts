import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiV1 } from "../../libs/api";
// import Swal from "sweetalert2";
// import { ITentPackage } from "../../types/tentPackage";
// import {
//   CreateTentPackageDTO,
//   UpdateTentPackageDTO,
// } from "../../validation/tentPackageSchema";

export const getTentPackage = createAsyncThunk(
  "tentPackage/getTentPackage",
  async (_, thunkAPI) => {
    try {
      const res = await apiV1.get("/tent-package");

      return res.data.data;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);

export const getTentPackageById = createAsyncThunk(
  "tentPackage/getTentPackageById",
  async (tentPackageId: number, thunkAPI) => {
    try {
      const res = await apiV1.get(`/tentPackage/${tentPackageId}`);

      return res.data.data;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);

// export const createTentPackage = createAsyncThunk<ITentPackage, CreateTentPackageDTO>(
//   "tentPackage/createTentPackage",
//   async (data, thunkAPI) => {
//     try {
//       const formData = new FormData();
//       Object.entries(data).forEach(([key, value]) => {
//         if (key === "tentPackageImage" && value instanceof FileList) {
//           Array.from(value).forEach((file) => {
//             formData.append("tentPackageImage", file);
//           });
//         } else if (key !== "tentPackageImage") {
//           formData.append(key, value);
//         }
//       });
//       const res = await apiV1.post(`/tentPackage/create`, formData);
//       Swal.fire({
//         icon: "success",
//         title: res.data.message,
//         showConfirmButton: false,
//         iconColor: "#006dfc",
//         timer: 1500,
//       });
//       return res.data.data;
//     } catch (error) {
//       console.log(error);
//       if (error instanceof Error) {
//         Swal.fire({
//           icon: "error",
//           title: "Oops..",
//           text: `${error.message}`,
//         });

//         return thunkAPI.rejectWithValue(error.message);
//       }
//     }
//   },
// );

// export const updateTentPackage = createAsyncThunk<
//   ITentPackage,
//   { data: UpdateTentPackageDTO; tentPackageId: number }
// >("tentPackage/updateTentPackage", async ({ data, tentPackageId }, thunkAPI) => {
//   try {
//     const formData = new FormData();
//     Object.entries(data).forEach(([key, value]) => {
//       if (key === "tentPackageImage" && value instanceof FileList) {
//         Array.from(value).forEach((file) => {
//           formData.append("tentPackageImage", file);
//         });
//       } else if (key !== "tentPackageImage") {
//         formData.append(key, value);
//       }
//     });
//     const res = await apiV1.put(`/tentPackage/update/${tentPackageId}`, formData);
//     Swal.fire({
//       icon: "success",
//       title: res.data.message,
//       showConfirmButton: false,
//       iconColor: "#006dfc",
//       timer: 1500,
//     });
//     return res.data.tentPackage;
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

// export const deleteTentPackage = createAsyncThunk(
//   "tentPackage/deleteTentPackage",
//   async (id: number, thunkAPI) => {
//     try {
//       const res = await apiV1.delete(`/tentPackage/delete/${id}`);
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
