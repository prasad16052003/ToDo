import TaskItem from "./TaskItem.js";

const TaskList = ({ tasks, fetchTasks }) => {
  return (
    <div>
      <h2>All Tasks</h2>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} fetchTasks={fetchTasks} />
      ))}
    </div>
  );
};

export default TaskList;
