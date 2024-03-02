import { configureStore } from "@reduxjs/toolkit";
import  signUpUserSlice  from "../features/SignUp/signUp.Slice";

export const store = configureStore({
  reducer: {
    userSignUp: signUpUserSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
