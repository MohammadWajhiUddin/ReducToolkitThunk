import React from 'react'
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

export const GetAllCategories = createAsyncThunk(
    "GetAllCategories",
    async(_,{rejectWithValue}) =>{
        try {
            const response = await fetch(
              "https://fakestoreapi.com/products/categories",
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
        categories:[],
        loading:false,
        error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(GetAllCategories.pending,(state)=>{state.loading = true})
        builder.addCase(GetAllCategories.fulfilled,(state)=>{state.loading = false,state.categories.push(action.payload)})
        builder.addCase(GetAllCategories.rejected,(state)=>{state.loading = false,state.error = action.payload})

    }
})

export default ProductsSlice.reducer   