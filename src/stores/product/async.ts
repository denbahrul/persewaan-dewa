import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiV1 } from "../../libs/api";
import { CreateProductDTO } from "../../validation/productSchema";
import { IProduct } from "../../types/product";
import Swal from "sweetalert2";

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (_, thunkAPI) => {
    try {
      const res = await apiV1.get("/product");

      return res.data.data;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);

export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (productId: number, thunkAPI) => {
    try {
      const res = await apiV1.get(`/product/${productId}`);

      return res.data.data;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);

export const createProduct = createAsyncThunk<IProduct, CreateProductDTO>(
  "product/createProduct",
  async (data, thunkAPI) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (key === "imageUrl" && value instanceof FileList) {
          Array.from(value).forEach((file) => {
            formData.append("imageUrl", file);
          });
        } else if (key !== "imageUrl") {
          formData.append(key, value);
        }
      });
      const res = await apiV1.post(`/product`, formData);
      Swal.fire({
        icon: "success",
        title: res.data.message,
        showConfirmButton: false,
        iconColor: "#006dfc",
        timer: 1500,
      });
      return res.data.data;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        Swal.fire({
          icon: "error",
          title: "Oops..",
          text: `${error.message}`,
        });

        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);

// export const updateProduct = createAsyncThunk<
//   IProduct,
//   { data: UpdateProductDTO; productId: number }
// >("product/updateProduct", async ({ data, productId }, thunkAPI) => {
//   try {
//     const formData = new FormData();
//     Object.entries(data).forEach(([key, value]) => {
//       if (key === "productImage" && value instanceof FileList) {
//         Array.from(value).forEach((file) => {
//           formData.append("productImage", file);
//         });
//       } else if (key !== "productImage") {
//         formData.append(key, value);
//       }
//     });
//     const res = await apiV1.put(`/product/update/${productId}`, formData);
//     Swal.fire({
//       icon: "success",
//       title: res.data.message,
//       showConfirmButton: false,
//       iconColor: "#006dfc",
//       timer: 1500,
//     });
//     return res.data.product;
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

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id: number, thunkAPI) => {
    try {
      const res = await apiV1.delete(`/product/delete/${id}`);
      Swal.fire({
        icon: "success",
        title: res.data.message,
        showConfirmButton: false,
        iconColor: "#006dfc",
        timer: 1500,
      });
      return res.data.data.id;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);
