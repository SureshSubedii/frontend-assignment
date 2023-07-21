import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Defining the type for the state
interface ProductState {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rate: number;
  count: number;
  category:string
}

const initialState: ProductState = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  image: "",
  rate: 0,
  count: 0,
  category:''
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
    setId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
    setRate: (state, action: PayloadAction<number>) => {
      state.rate = action.payload;
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
});

export const {
  setTitle,
  setDescription,
  setImage,
  setId,
  setRate,
  setCount,
  setPrice,
  setCategory
} = productSlice.actions;

// State selector functions
export const selectTitle = (state: { product: ProductState }) => state.product.title;
export const selectDescription = (state: { product: ProductState }) => state.product.description;
export const selectImage = (state: { product: ProductState }) => state.product.image;
export const selectPrice = (state: { product: ProductState }) => state.product.price;
export const selectRate = (state: { product: ProductState }) => state.product.rate;
export const selectCount = (state: { product: ProductState }) => state.product.count;
export const selectCategory = (state: { product: ProductState }) => state.product.category;


export default productSlice.reducer;
