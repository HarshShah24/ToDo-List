import "../App.css";

function TodoItem({ task, onDelete, onToggle }) {
  return (
    <>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span>{task.text}</span>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </>
  );
}

export default TodoItem;
