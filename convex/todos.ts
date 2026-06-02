import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

const getTodos = query({
  args: {},
  async handler(ctx) {
    const activeTodos = await ctx.db
      .query('todos')
      .withIndex('by_status_and_time', (q) => q.eq('isCompleted', false))
      .order('desc')
      .collect();

    const completedTodos = await ctx.db
      .query('todos')
      .withIndex('by_status_and_time', (q) => q.eq('isCompleted', true))
      .order('desc')
      .collect();

    return [...activeTodos, ...completedTodos];
  },
});

const getCompletedTodos = query({
  args: {},
  async handler(ctx) {
    return await ctx.db
      .query('todos')
      .withIndex('by_status_and_time', (q) => q.eq('isCompleted', true))
      .collect();
  },
});

const addTodo = mutation({
  args: { text: v.string() },

  handler: async (ctx, args) => {
    await ctx.db.insert('todos', {
      text: args.text,
      isCompleted: false,
      createdAt: Date.now(),
    });
  },
});

const updateTodo = mutation({
  args: {
    id: v.id('todos'),
    text: v.string(),
  },
  async handler(ctx, args) {
    await ctx.db.patch(args.id, {
      text: args.text,
    });
  },
});

const toggleTodo = mutation({
  args: {
    id: v.id('todos'),
  },
  async handler(ctx, args) {
    const todo = await ctx.db.get(args.id);
    if (!todo) return;
    await ctx.db.patch(args.id, {
      isCompleted: !todo.isCompleted,
    });
  },
});

const deleteTodo = mutation({
  args: {
    id: v.id('todos'),
  },
  async handler(ctx, args) {
    await ctx.db.delete(args.id);
  },
});

const deleteMultipleTodos = mutation({
  args: {
    ids: v.array(v.id('todos')),
  },
  handler: async (ctx, args) => {
    await Promise.all(args.ids.map((id) => ctx.db.delete(id)));
  },
});

const clearCompletedTodos = mutation({
  args: {},

  handler: async (ctx) => {
    const completed = ctx.db
      .query('todos')
      .withIndex('by_status_and_time', (q) => q.eq('isCompleted', true));

    for await (const todo of completed) {
      await ctx.db.delete(todo._id);
    }
  },
});

const clearTodos = mutation({
  args: {},

  handler: async (ctx) => {
    for await (const todo of ctx.db.query('todos')) {
      await ctx.db.delete(todo._id);
    }
  },
});

export {
  getTodos,
  addTodo,
  updateTodo,
  toggleTodo,
  deleteTodo,
  deleteMultipleTodos,
  clearCompletedTodos,
  clearTodos,
  getCompletedTodos,
};
