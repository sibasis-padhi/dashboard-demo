import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchUser from "../../apis/getAllUsers";

export const fetchAsynUser = createAsyncThunk(
  "users/fetchAsynUser",
  async () => {
    const response = await fetchUser.get("/users").catch((err) => {
      console.log("Err", err);
    });
    // console.log(response.data);
    return response.data;
  }
);

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers: (state, { payload }) => {
      state.users = payload;
    },
  },
  extraReducers: {
    [fetchAsynUser.pending]: () => {
      //   console.log("pending");
    },
    [fetchAsynUser.fulfilled]: (state, { payload }) => {
      //   console.log("Doctor Details Fetched Successfully!");
      return { ...state, users: payload };
    },
    [fetchAsynUser.rejected]: () => {
      console.log("Rejected!");
    },
  },
});

export const { addUsers } = userSlice.actions;
export const getUserList = (state) => state.users.users;
export default userSlice.reducer;
