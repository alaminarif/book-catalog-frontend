import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  test: 0,
};
const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},
});

// export const {} = testSlice.actions;
export default testSlice.reducer;
