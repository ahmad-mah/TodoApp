import { useMutation, useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';

const useTodos = () => {
  return useQuery(api.todos.getTodos);
};

const useCompletedTodos = () => {
  return useQuery(api.todos.getCompletedTodos);
};
const useAddTodo = () => {
  return useMutation(api.todos.addTodo);
};

const useUpdateTodo = () => {
  return useMutation(api.todos.updateTodo);
};

const useToggleTodo = () => {
  return useMutation(api.todos.toggleTodo);
};
const useDeleteTodo = () => {
  return useMutation(api.todos.deleteTodo);
};
const useDeleteTodos = () => {
  return useMutation(api.todos.deleteMultipleTodos);
};
const useClearTodos = () => {
  return useMutation(api.todos.clearTodos);
};

export {
  useTodos,
  useCompletedTodos,
  useAddTodo,
  useUpdateTodo,
  useToggleTodo,
  useDeleteTodo,
  useDeleteTodos,
  useClearTodos,
};
