import { configureStore } from '@reduxjs/toolkit';
import todosReducer from "/src/features/todos"; 

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;