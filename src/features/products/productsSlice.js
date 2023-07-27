import { fetchDataProductsAPI } from "@/api/api";
import { RequestStatus } from "@/types/RequestStatus";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: RequestStatus.IDLE,
    error: null,
    hasNextPage: false,
    actualPage: 1,
  },
  reducers: {
    setDataProducts: (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    },
    setHasNextPage: (state, action) => {
      state.hasNextPage = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setActualPage: (state, action) => {
      state.actualPage = action.payload;
    },
    incrementActualPage: (state, _) => {
      state.actualPage += 1;
    },
    filterProductsByTitle: (state, action) => {
      const filteredData = state.data.filter((product) => {
        return product.title
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });
      state.data = filteredData;
    },
    orderProductsByIDAscending: (state, action) => {
      const orderedData = state.data.slice().sort((a, b) => {
        return a.id - b.id;
      });
      state.data = orderedData;
    },
    orderProductsByIDDescending: (state, _) => {
      const orderedData = state.data.sort((a, b) => {
        return b.id - a.id;
      });
      state.data = orderedData;
    },
    orderProductsByTitleAscending: (state, _) => {
      const orderedData = state.data.slice().sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      state.data = orderedData;
    },
    orderProductsByTitleDescending: (state, _) => {
      const orderedData = state.data.slice().sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
      state.data = orderedData;
    },
    orderProductsByPriceAscending: (state, _) => {
      const orderedData = state.data.slice().sort((a, b) => {
        return a.price - b.price;
      });
      state.data = orderedData;
    },
    orderProductsByPriceDescending: (state, _) => {
      const orderedData = state.data.slice().sort((a, b) => {
        return b.price - a.price;
      });
      state.data = orderedData;
    },
    orderProductsByRatingAscending: (state, _) => {
      const orderedData = state.data.slice().sort((a, b) => {
        return a.rating - b.rating;
      });
      state.data = orderedData;
    },
    orderProductsByRatingDescending: (state, action) => {
      const orderedData = state.data.slice().sort((a, b) => {
        return b.rating - a.rating;
      });
      state.data = orderedData;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = RequestStatus.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = RequestStatus.SUCCEEDED;
        state.data = state.data.concat(action.payload);
        state.hasNextPage = Boolean(action.payload.length);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = RequestStatus.FAILED;
        state.error = action.error.message;
      });
  },
});

export const {
  setDataProducts,
  setHasNextPage,
  setStatus,
  setActualPage,
  incrementActualPage,
  filterProductsByTitle,
  orderProductsByIDAscending,
  orderProductsByIDDescending,
  orderProductsByPriceAscending,
  orderProductsByPriceDescending,
  orderProductsByRatingAscending,
  orderProductsByRatingDescending,
  orderProductsByTitleAscending,
  orderProductsByTitleDescending,
} = productsSlice.actions;

export const selectAllProducts = (state) => state.products.data;

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { getState }) => {
    const state = getState();
    const data = await fetchDataProductsAPI(state.products.actualPage);
    return data;
  }
);
export default productsSlice.reducer;
