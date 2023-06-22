import { create } from 'zustand'
import { initialState } from './initialValue'

export const useTodoListStore = create((set) => ({
  todos: initialState,

  add: (newTodo) => set((state) => ({ todos: [...state.todos, newTodo] })),

  update: (updateTodo, updateIndex) =>
    set((state) => (state.todos[updateIndex] = updateTodo)),

  remove: (index) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo !== state.todos[index]),
    })),

  toggleStatus: (toggleIndex) =>
    set(
      (state) =>
        (state.todos[toggleIndex] = {
          ...state.todos[toggleIndex],
          completed: !state.todos[toggleIndex].completed,
        })
    ),
}))
