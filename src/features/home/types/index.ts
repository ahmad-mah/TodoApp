import { Id } from '../../../../convex/_generated/dataModel';

export type TodoItem = {
  text: string;
  isCompleted: boolean;
  _id: Id<'todos'>;
};

export default TodoItem;
