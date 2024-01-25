import { createSlice } from "@reduxjs/toolkit";

const todosState = {
  list: [""],
};

const todosSlice = createSlice({
  name: "todos",
  initialState: todosState,
  reducers: {
    deleteList: (state) => {
      state.list = [""];
    },
    addList: (state, { payload }) => {
      state.list = [payload];
    },
  },
});

export const { deleteList, addList } = todosSlice.actions;
export default todosSlice.reducer;