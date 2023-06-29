import { createSlice } from "@reduxjs/toolkit";
import Home from "../pages/Home";



const pageSlice = createSlice({
  name: "page",
  initialState: <Home />,
  reducers: {
    changePage: (state, action) => (state = action.payload),
  },
});

export const { changePage } = pageSlice.actions;
export default pageSlice.reducer;
