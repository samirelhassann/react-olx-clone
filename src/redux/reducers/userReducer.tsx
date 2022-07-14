import { createSlice } from "@reduxjs/toolkit";
import { IReducerAction } from "../../interfaces/IReducerAction";
import { IUser } from "../../interfaces/IUser";

const initialState: IUser = {
  name: "",
  email: "",
};

export const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state: IUser, action: IReducerAction) => {
      state.name = action.payload.name;
    },
    setEmail: (state: IUser, action: IReducerAction) => {
      state.email = action.payload.email;
    },
  },
});

export const { setName, setEmail } = slice.actions;

export default slice.reducer;
