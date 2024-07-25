import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create action
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


export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store the error message or object
      });

    builder
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload; // Replace users array with the fetched data
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store the error message or object
      });


    builder
      .addCase(getSingleUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload; // Replace users array with the fetched data
      })
      .addCase(getSingleUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store the error message or object
      });

      
  },
  
});

export default userDetail.reducer;
