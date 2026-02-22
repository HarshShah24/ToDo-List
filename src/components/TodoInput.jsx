import React from "react";
import "../App.css";

function TodoInput({ onAdd }) {
  const [inputTask, setInputTask] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(inputTask);
    console.log(inputTask);
    setInputTask("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="input-group">
        <input
          type="text"
          placeholder="enter input task here ..."
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default TodoInput;
