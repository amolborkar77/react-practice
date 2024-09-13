//  Implement a Todo List: Create a simple todo list application where users can add,
//  edit, and delete tasks.
import React, { useState } from "react";

const LIST = ["Wake Up", "Go to Gym", "Take your Diet", "Take a Bath"];

const TodoList = () => {
  const [items, setItems] = useState(LIST);
  const [todo, setTodo] = useState("");
  const [error, setError] = useState("");

  const addTodo = () => {
    if (todo.trim() === "") {
      setError("can't add empty todo");
      return;
    }
    setItems((prev) => [...prev, todo]);
    setTodo("");
  };

  return (
    <>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && addTodo()}
        style={{ border: `1px solid ${error ? "red" : "grey"}` }}
        onFocus={() => setError("")}
      />
      <button onClick={addTodo}>Add Todo</button>
      <div style={{ color: "red", minHeight: "20px" }}>{error}</div>

      <ul>
        {items.map((el, id) => (
          <li key={id}>
            {el}
            <button onClick={() => setItems(items.filter((i) => i !== el))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
