import {
  boolean,
  pgTable,
  serial,
  text,
} from 'drizzle-orm/pg-core';

export const todo = pgTable(
  'todos',
  {
    id: serial('id').primaryKey(),
    text: text("text").notNull(),
    done: boolean("done").default(false).notNull(),
  },
);
