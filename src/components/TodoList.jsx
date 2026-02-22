import TodoItem from "./TodoItem";

function TodoList({ tasks, onDelete, onToggle }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <TodoItem task={task} onDelete={onDelete} onToggle={onToggle} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
