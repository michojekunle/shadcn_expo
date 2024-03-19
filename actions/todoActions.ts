"use server";
import {eq, not} from "drizzle-orm";
import {revalidatePath} from "next/cache";

import db from "@/db/drizzle";
import {todo} from "@/db/schema";
import { seed } from "@/db/seed";

export const getData = async () => {

  try {
    const todos = await db.select().from(todo);
    return todos;
  } catch (e: any) {
    if (e.message === `relation "users" does not exist`) {
      console.log(
        'Table does not exist, creating and seeding it with dummy data now...'
      )
      // Table is not created yet
      await seed()
      const startTime = Date.now()
      const todos = await db.select().from(todo)
      return todos;
    } else {
      throw e
    }
  }
};

export const addTodo = async (id: number, text: string) => {
  await db.insert(todo).values({
    id: id,
    text: text,
  });
};

export const deleteTodo = async (id: number) => {
  await db.delete(todo).where(eq(todo.id, id));

  revalidatePath("/todos");
};

export const toggleTodo = async (id: number) => {
  await db
    .update(todo)
    .set({
      done: not(todo.done),
    })
    .where(eq(todo.id, id));

  revalidatePath("/todos");
};

export const editTodo = async (id: number, text: string) => {
  await db
    .update(todo)
    .set({
      text: text,
    })
    .where(eq(todo.id, id));

  revalidatePath("/todos");
};