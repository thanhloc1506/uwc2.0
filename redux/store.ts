import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { createWrapper } from "next-redux-wrapper";

export const makeStore = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: true,
});

// export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = typeof makeStore.dispatch;
export type RootState = ReturnType<typeof makeStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;

// export const wrapper = createWrapper<AppStore>(makeStore);
