export default function TodoItem({ taskItem, deleteTask, completed }) {
  return (
    <div>
      <span
        style={{ textDecoration: taskItem.completed ? "line-through" : "none" }}
        onClick={() => completed()}
      >
        {taskItem.task}
      </span>
      <button onClick={() => deleteTask()}>Delete</button>
    </div>
  );
}
