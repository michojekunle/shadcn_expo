"use client";
import { ChangeEvent, FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

interface Props {
  createTodo: (value: string) => void;
}

const AddTodo: FC<Props> = ({ createTodo }) => {
  // State for handling input value
  const [input, setInput] = useState("");

  // Event handler for input change
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // Event handler for adding a new todo
  const handleAdd = async () => {
    if(input !== '') {
      createTodo(input);
      setInput("");
    }
  };

  // Rendering the AddTodo component
  return (
    <div className="w-full flex gap-3 my-6">
      {/* Input field for entering new todo text */}
      <Input
        type="text"
        // className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
        onChange={handleInput}
        value={input}
        placeholder="Add to-do"
      />
      {/* Button for adding a new todo */}
      <Button
        variant="outline"
        onClick={handleAdd}
      >
        <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
          Add
        </span>
      </Button>
    </div>
  );
};

export default AddTodo;