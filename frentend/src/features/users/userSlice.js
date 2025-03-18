// 1. always import 2 things first
import {
  createAsyncThunk,
  createSlice,
  vreateAsyncThunk,
} from "@reduxjs/toolkit";
import { logUser, registerUser, regUser, verifyOTP } from "./userService";

// get user from the localstorage

const isUser = JSON.parse(localStorage.getItem("myUser"));

// 2. define your initial state
const initialState = {
  user: isUser ? isUser : null,
  userLoading: false,
  userMessage: "",
  userError: false,
  userSuccess: false,
};

// 5. call the service function

export const registerMyUser = createAsyncThunk(
  "register-user",
  async (data, thunkAPI) => {
    try {
      return await regUser(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const loginMyUser = createAsyncThunk(
  "login-user",
  async (data, thunkAPI) => {
    try {
      return await logUser(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const verifyOTPData = createAsyncThunk(
  "verify-OTP",
  async (otpData, thunkAPI) => {
    try {
      let token = thunkAPI.getState().auth.user.token;
      return await verifyOTP(otpData, token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// 3. create your slice / global state

export const myUserSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userReset: (state) => {
      state.userLoading = false;
      state.userError = false;
      state.userSuccess = false;
      state.userMessage = "";
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("myUser"); // Ensure it matches the key where the user is stored
    },
  },
  // 6. handle the apis state
  extraReducers: (builder) => {
    builder
      .addCase(registerMyUser.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(registerMyUser.rejected, (state, action) => {
        state.userLoading = false;
        state.userMessage = action.payload;
        state.userError = true;
      })
      .addCase(registerMyUser.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.user = action.payload;
      })
      .addCase(loginMyUser.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(loginMyUser.rejected, (state, action) => {
        state.userLoading = false;
        state.userMessage = action.payload;
        state.userError = true;
      })
      .addCase(loginMyUser.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.user = action.payload;
      })
      .addCase(verifyOTPData.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(verifyOTPData.rejected, (state, action) => {
        state.userLoading = false;
        state.userMessage = action.payload;
        state.userError = true;
      })
      .addCase(verifyOTPData.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.user = action.payload;
      });
  },
});

// 4. export from registration of reducer to make it global
export default myUserSlice.reducer;
export const { userReset, logoutUser } = myUserSlice.actions;
