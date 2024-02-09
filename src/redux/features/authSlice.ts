import { createSlice } from "@reduxjs/toolkit";
type InitialType = {
  value: AuthType;
};
type AuthType = {
  isAuth: boolean;
  userName: string;
  uid: string;
};
const initialState: InitialType = {
  value: {
    isAuth: false,
    userName: "",
    uid: "",
  },
};
export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    login: (state, { payload }) => {
      return {
        ...state,
        value: {
          isAuth: true,
          userName: payload,
          uid: "nasnfafslasmfals",
        },
      };
    },
  },
});
export const { login, logOut } = auth.actions;
export default auth.reducer;
