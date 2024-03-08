import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userLogin } from "@/ApiCalls/users";
import { Login } from "@/Interfaces/userInterface";

export const LoginUser = createAsyncThunk(
    "user/signUp",
    async (userData: Login) => {
      try {
        const res = await userLogin(userData);
        return res.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  );

  const initialState: {
    user: Login;
    isLoading: boolean;
    error: any;
  } = {
    user: {
        userId: "",
        password: "",
    },
    isLoading: false,
    error: null,
  };
  
  export const loginUserSlice = createSlice({
    name: "userLogin",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(LoginUser.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(LoginUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.user = action.payload;
          state.error = null;
        })
        .addCase(LoginUser.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
          state.error = action.error;
        });
    },
  });

  export default loginUserSlice.reducer;
  