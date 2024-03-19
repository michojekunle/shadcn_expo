"use client";
import { ChangeEvent, FC, useState } from "react";
import { todoType } from "@/types/todoType";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox"
import { DeleteTodo } from "./DeleteTodo";

interface Props {
  todo: todoType;
  changeTodoText: (id: number, text: string) => void;
  toggleIsTodoDone: (id: number, done: boolean) => void;
  deleteTodoItem: (id: number) => void;
}

const Todo: FC<Props> = ({
  todo,
  changeTodoText,
  toggleIsTodoDone,
  deleteTodoItem,
}) => {
  // State for handling editing mode
  const [editing, setEditing] = useState(false);

  // State for handling text input
  const [text, setText] = useState(todo.text);

  // State for handling "done" status
  const [isDone, setIsDone] = useState(todo.done);

  // Event handler for text input change
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // Event handler for toggling "done" status
  const handleIsDone = async () => {
    toggleIsTodoDone(todo.id, !isDone);
    setIsDone((prev) => !prev);
  };

  // Event handler for initiating the edit mode
  const handleEdit = () => {
    setEditing(true);
  };

  // Event handler for saving the edited text
  const handleSave = async () => {
    changeTodoText(todo.id, text);
    setEditing(false);
  };

  // Event handler for canceling the edit mode
  const handleCancel = () => {
    setEditing(false);
    setText(todo.text);
  };

  // Event handler for deleting a todo item
  const handleDelete = () => {
    deleteTodoItem(todo.id);
  };

  // Rendering the Todo component
  return (
    <div className="flex items-center gap-2 p-4 border-slate-200 dark:border-slate-800 border-solid border rounded-lg">
      {/* Checkbox for marking the todo as done */}
      <Checkbox
        // className="text-blue-200 rounded-sm h-4 w-4"
        checked={isDone}
        onCheckedChange={handleIsDone}
      />
      {/* Input field for todo text */}
      <Input
        type="text"
        value={text}
        onChange={handleTextChange}
        readOnly={!editing}
        className={`${
          todo.done ? "line-through" : ""
        } outline-none read-only:border-transparent w-full`}
      />
      {/* Action Buttons for editing, saving, canceling, and deleting */}
      <div className="flex gap-1 ml-auto">
        {editing ? (
          <Button
            onClick={handleSave}
            variant='secondary'
          >
            Save
          </Button>
        ) : (
          <Button
            onClick={handleEdit}
            variant='ghost'
          >
            <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">Edit</span>
          </Button>
        )}
        {editing ? (
          <Button
            onClick={handleCancel}
            variant='destructive'
          >
            Close
          </Button>
        ) : (
          <DeleteTodo callback={handleDelete}/>
        )}
      </div>
    </div>
  );
};

export default Todo;