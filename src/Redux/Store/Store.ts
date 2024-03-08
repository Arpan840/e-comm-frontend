import { configureStore } from "@reduxjs/toolkit";
import logOutReducer from "../features/SignUp/Logout.Slice";
import signUpUserSlice from "../features/SignUp/signUp.Slice";
import loginUserSlice from "../features/SignUp/Login.Slice";

export const store = configureStore({
  reducer: {
    userSignUp: signUpUserSlice,
    userLogin: loginUserSlice,
    userLogout: logOutReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
