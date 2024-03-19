import { sql } from '@vercel/postgres'
import db from '@/db/drizzle'
import { todo } from '@/db/schema'

const newTodos: any[] = [
  {
    todo: 'First Task!'
  },
  {
    todo: 'Second Task!!'
  },
  {
    todo: 'Third Task!!!'
  },
]

export async function seed() {
  // Create table with raw SQL
  const createTable = await sql.query(`
      CREATE TABLE IF NOT EXISTS todos (
        id SERIAL PRIMARY KEY,
        text VARCHAR(255) NOT NULL,
        done BOOLEAN DEFAULT FALSE NOT NULL,
      );
  `)
  console.log(`Created "todos" table`)

  const insertedTodos: any[] = await db
    .insert(todo)
    .values(newTodos)
    .returning()
  console.log(`Seeded ${insertedTodos.length} users`)

  return {
    createTable,
    insertedTodos,
  }
}