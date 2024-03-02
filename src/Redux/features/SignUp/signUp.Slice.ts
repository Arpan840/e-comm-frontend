import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userSignUp } from "@/ApiCalls/users";
import { Person } from "@/Interfaces/userInterface";

export const SignUpUser = createAsyncThunk(
  "user/signUp",
  async (userData: Person) => {
    try {
      const res = await userSignUp(userData);
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const initialState: {
  user: Person;
  isLoading: boolean;
  error: any;
} = {
  user: {
    userName: "",
    lastName: "",
    firstName: "",
    email: "",
    contactNumber: "",
    password: "",
  },
  isLoading: false,
  error: null,
};

export const signUpUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SignUpUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(SignUpUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(SignUpUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default signUpUserSlice.reducer;
