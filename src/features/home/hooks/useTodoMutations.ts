import { useDeleteTodo, useToggleTodo, useUpdateTodo } from '../api/useTodos';

export default function useTodoMutations() {
  const toggle = useToggleTodo();
  const update = useUpdateTodo();
  const remove = useDeleteTodo();

  return {
    toggleTodo: toggle,
    updateTodo: update,
    deleteTodo: remove,
  } as const;
}
