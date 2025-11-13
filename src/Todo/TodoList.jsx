import TodoItem from "./TodoItem";

export default function TodoList({ taskList, deleteTask, completed }) {
  return (
    <div>
      {taskList.map((taskItem) => (
        <TodoItem
          key={taskItem.id}
          taskItem={taskItem}
          deleteTask={() => deleteTask(taskItem.id)}
          completed={() => completed(taskItem.id)}
        />
      ))}
    </div>
  );
}
