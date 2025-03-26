import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";

export const fetchProducts = createAsyncThunk(
  "shopping/fetchProducts",
  async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (err) {
      console.log("Failling while fetching the data", err);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "shopping/deleteProduct",
  async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return id;
    } catch (err) {
      console.log("failling while deleting the product", err);
    }
  }
);

export const editProduct = createAsyncThunk(
  "shopping/editProduct",
  async (updatedProduct) => {
    try {
      const response = await axios.put(
        `${API_URL}/${updatedProduct.id}`,
        updatedProduct
      );
      return response.data;
    } catch (err) {
      console.log("failling while editing the product", err);
    }
  }
);

const shoppingSlice = createSlice({
  name: "shopping",
  initialState: {
    products: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(
          (product) => product.id === action.payload.id
        );
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      });
  },
});

export default shoppingSlice.reducer;
