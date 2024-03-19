import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import {
  boolean,
  pgTable,
  serial,
  text,
  uniqueIndex,
} from 'drizzle-orm/pg-core';

// Use this object to send drizzle queries to your DB
export const db = drizzle(sql);
// Create a pgTable that maps to a table in your DB
export const TodoTable = pgTable(
  'todos',
  {
    id: serial('id').primaryKey(),
    text: text("text").notNull(),
    done: boolean("done").default(false).notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(users.id),
    };
  },
);

export const getTodoTable = async () => {
  const selectResult = await db.select().from(TodoTable);
  console.log('Results', selectResult);
};