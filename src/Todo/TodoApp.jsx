import { useEffect, useState } from "react";
import TodoList from "./TodoList";

export default function TodoApp() {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(taskList));
  }, [taskList]);

  const addTask = () => {
    setTaskList([
      ...taskList,
      { id: Date.now(), task: newTask, completed: false },
    ]);
    setNewTask("");
  };
  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id != id));
  };

  const completed = (id) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={() => addTask()}>Add Task</button>
      <TodoList
        taskList={taskList}
        deleteTask={deleteTask}
        completed={completed}
      />
    </div>
  );
}
