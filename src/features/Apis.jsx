import { createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
        "createUser",
    async (data, { rejectWithValue }) => {
      const response = await fetch(
        "https://66a223d2967c89168f1ef26b.mockapi.io/api/users",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      try {
        const result = await response.json();
        return result;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
  
  export const getAllUsers = createAsyncThunk(
    "getAllUsers",
    async (_, { rejectWithValue }) => {
      try {
        const response = await fetch(
          "https://66a223d2967c89168f1ef26b.mockapi.io/api/users",
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
  );
  
  export const getSingleUser = createAsyncThunk(
    "getSingleUser",
    async(id, {rejectWithValue})=>{
      try {
        const response = await fetch(
          `https://66a223d2967c89168f1ef26b.mockapi.io/api/users/${id}`,
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
    })
  