import { createSlice } from "@reduxjs/toolkit";
type InitialStateType = {
  isDark: boolean;
};
const initialState: InitialStateType = {
  isDark: true,
};
export const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDark: (state) => {
      document.body.classList.toggle("dark");
      return {
        ...state,
        isDark: !state.isDark,
      };
    },
  },
});

export const { toggleDark } = theme.actions;
export default theme.reducer;
