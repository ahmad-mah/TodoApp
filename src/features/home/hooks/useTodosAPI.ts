import {
    useAddTodo,
    useCompletedTodos,
    useDeleteTodo,
    useTodos,
    useToggleTodo,
    useUpdateTodo,
} from '../api/useTodos';

export default function useTodosAPI() {
  return {
    todos: useTodos(),
    completed: useCompletedTodos(),
    addTodo: useAddTodo(),
    updateTodo: useUpdateTodo(),
    toggleTodo: useToggleTodo(),
    deleteTodo: useDeleteTodo(),
  } as const;
}
