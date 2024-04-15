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

export const fetchAsyncUserAdd = createAsyncThunk(
  "users/fetchAsyncUserAdd",
  async ({ values }) => {
    const response = await fetchUser.post("/register", values).catch((err) => {
      console.log("Err", err);
    });
    return response.data?.user;
  }
);

export const fetchAsynUserById = createAsyncThunk(
  "userByID/fetchAsynUserById",
  async (id) => {
    const response = await fetchUser.get(`/user/${id}`).catch((err) => {
      console.log("Err", err);
    });
    // console.log(response.data);
    return response.data;
  }
);

const initialState = {
  users: [],
  addNewUser: [],
  userByID: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state, { payload }) => {
      state.users = payload;
    },
    addNewUser: (state, { payload }) => {
      state.addNewUser = payload;
    },
    userByID: (state, { payload }) => {
      state.userByID = payload.users;
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
    [fetchAsyncUserAdd.fulfilled]: (state, { payload }) => {
      return { ...state, addNewUser: payload };
    },
    [fetchAsynUserById.fulfilled]: (state, { payload }) => {
      return { ...state, userByID: payload };
    },
    [fetchAsynUser.rejected]: () => {
      console.log("Rejected!");
    },
  },
});

export const { getUsers, addNewUser, userByID } = userSlice.actions;
export const getUserList = (state) => state.users.users;
export const getUserById = (state) => state.users.userByID;
export default userSlice.reducer;
