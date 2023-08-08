import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios.get("http://jsonplaceholder.typicode.com/todos").then((response) => {
    return response.data;
    // return response.data.slice(0, 4);
  });
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    data: [],
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

// export const userActions = { ...userSlice.actions };
export default userSlice;
