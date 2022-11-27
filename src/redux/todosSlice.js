import { createSlice } from '@reduxjs/toolkit';

const initialState = { todos: [{ id: 1, text: 'first todo' }] };

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(item => item.id !== action.payload);
    },
  },
});

const { actions, reducer } = todosSlice;

export default reducer;

export const { addTodo, removeTodo } = actions;
