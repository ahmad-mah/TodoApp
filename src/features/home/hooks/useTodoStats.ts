import { useMemo } from 'react';
import { useCompletedTodos, useTodos } from '../api/useTodos';

export default function useTodoStats() {
  const todos = useTodos();
  const completed = useCompletedTodos();

  const total = todos?.length ?? 0;
  const completedCount = completed?.length ?? 0;
  const active = total - completedCount;
  const percentage = total > 0 ? (completedCount / total) * 100 : 0;

  return useMemo(
    () => ({ total, completed: completedCount, percentage, active }),
    [todos?.length, completed?.length, active]
  );
}
