import { useDeleteTodo, useToggleTodo, useUpdateTodo, useClearTodos } from '../api/useTodos';

export default function useTodoMutations() {
  const toggle = useToggleTodo();
  const update = useUpdateTodo();
  const remove = useDeleteTodo();
  const clear = useClearTodos();

  return {
    toggleTodo: toggle,
    updateTodo: update,
    deleteTodo: remove,
    clearTodos: clear,
  } as const;
}
