import { createSlice } from "@reduxjs/toolkit";
import type { InitialState } from "./index.types";
import { getUsers } from "@/redux/actions/user";

const initialState: InitialState = {
  data: [],
  loading: true,
  error: null,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET ALL USER
      .addCase(getUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.loading = false;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default user.reducer;
