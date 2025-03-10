import axios from "axios";

const TaskItem = ({ task, fetchTasks }) => {
  const markComplete = async () => {
    await axios.put(`http://localhost:5000/api/tasks/${task._id}`);
    fetchTasks();
  };

  const deleteTask = async () => {
    await axios.delete(`http://localhost:5000/api/tasks/${task._id}`);
    fetchTasks();
  };

  return (
    <div>
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.title}</span>
      {!task.completed && <button onClick={markComplete}>Complete</button>}
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default TaskItem;
