import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userLogout } from "@/ApiCalls/users";
import { Logout } from "@/Interfaces/interface";

export const LogOutUser = createAsyncThunk("user/logOut", async () => {
  try {
    const res = await userLogout();
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

interface LogOutState {
  user: Logout;
  isLoading: boolean;
  error: any;
}

const initialState: LogOutState = {
  user: {},
  isLoading: false,
  error: null,
};

export const logOutUserSlice = createSlice({
  name: "userLogOut",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(LogOutUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(LogOutUser.fulfilled, (state, action: PayloadAction<Logout>) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(LogOutUser.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export default logOutUserSlice.reducer;
