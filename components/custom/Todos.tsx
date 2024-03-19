"use client";
import { FC, useState } from "react";
import { todoType } from "@/types/todoType";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { addTodo, deleteTodo, editTodo, toggleTodo } from "@/actions/todoActions";

interface Props {
  todos: todoType[];
}

const Todos: FC<Props> = ({ todos }) => {
  // State to manage the list of todo items
  const [todoItems, setTodoItems] = useState<todoType[]>(todos);

  // Function to create a new todo item
  const createTodo = (text: string) => {
    const id = (todoItems.at(-1)?.id || 0) + 1;
    addTodo(id, text);
    setTodoItems((prev) => [...prev, { id: id, text, done: false }]);
  };

  // Function to change the text of a todo item
  const changeTodoText = (id: number, text: string) => {
    setTodoItems((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
    editTodo(id, text);
  };

  // Function to toggle the "done" status of a todo item
  const toggleIsTodoDone = (id: number) => {
    setTodoItems((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    );
    toggleTodo(id);
  };

  // Function to delete a todo item
  const deleteTodoItem = (id: number) => {
    setTodoItems((prev) => prev.filter((todo) => todo.id !== id));
    deleteTodo(id);
  };

  // Rendering the Todo List component
  return (
    <main className="flex mx-auto max-w-xl w-full flex-col items-center px-4 py-11 md:p-16">
      <h1 className='text-4xl md:text-7xl font-mono font-bold text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>Todos</h1>
      {/* Adding Todo component for creating new todos */}
      <AddTodo createTodo={createTodo} />
      <div className="w-full flex flex-col mt-8 mb-5 gap-4 ">
        {/* Mapping through todoItems and rendering Todo component for each */}
        {todoItems.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            changeTodoText={changeTodoText}
            toggleIsTodoDone={toggleIsTodoDone}
            deleteTodoItem={deleteTodoItem}
          />
        ))}
      </div>
    </main>
  );
};

export default Todos;