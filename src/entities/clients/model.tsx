import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ClientState {
  activClientId: number;
}

const initialState: ClientState = {
  activClientId: 1,
};

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    setActiveClientId: (state, action: PayloadAction<number>) => {
      state.activClientId = action.payload;
    },
  },
});

export const { setActiveClientId } = clientSlice.actions;

export default clientSlice.reducer;
