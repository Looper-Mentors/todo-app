import React from "react";

const deleteTask = (task: any) => {
  let tasks1: any = localStorage.getItem("tasks");
  const tasks = tasks1 ? JSON.parse(tasks1.toString()) : [];
  const tsks = [];
  for (let t of tasks) {
    if (t !== task) tsks.push(t);
  }
  localStorage.setItem("tasks", JSON.stringify(tsks));
  window.location.reload();
};
const TasksList = (tasks: never[]) =>
  Object.keys(tasks).map((task: any) => (
    <>
      <h4
        key={task}
        id={task}
        onClick={() => {
          deleteTask(tasks.at(task));
        }}
      >
        {tasks.at(task)}
      </h4>
    </>
  ));
export default TasksList;
