import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

export const ProductApi = createAsyncThunk(
    "ProductApi",
    async(_,{rejectWithValue}) =>{
        try {
            const response = await fetch(
              "https://fakestoreapi.com/products",
              {
                method: "GET",
                headers: { "Content-Type": "application/json" },
              }
            );
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const result = await response.json();
            return result;
          } catch (error) {
            return rejectWithValue(error.message);
          }
    }
)


export const SingleProductApi = createAsyncThunk(
  "SingleProductApi",
  async(id,{rejectWithValue}) =>{
      try {
          const response = await fetch(
            `https://fakestoreapi.com/products/${id}`,
            {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            }
          );
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          return result;
        } catch (error) {
          return rejectWithValue(error.message);
        }
  }
)
export const ProductsSlice = createSlice({
    name:"ProuctsSlice",
    initialState:{
        Products:[],
        SingleProduct:null,
        loading:true,
        error:null
    },
    extraReducers:(builder)=>{
        builder
        .addCase(ProductApi.pending,(state)=>{state.loading = true;})
        .addCase(ProductApi.fulfilled,(state,action)=>{state.loading = false,state.Products.push(action.payload)})
        .addCase(ProductApi.rejected,(state,action)=>{state.loading = false,state.error = action.payload})


        builder
        .addCase(SingleProductApi.pending,(state)=>{state.loading = true;})
        .addCase(SingleProductApi.fulfilled,(state,action)=>{state.loading = false,state.SingleProduct = action.payload})
        .addCase(SingleProductApi.rejected,(state,action)=>{state.loading = false,state.error = action.payload})

    }
})

export default ProductsSlice.reducer   