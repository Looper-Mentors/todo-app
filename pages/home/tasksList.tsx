import React, { useReducer, useState } from "react";

const TasksList = (tasks: never[]) => {
  let i: number = 0;
  let j: number = 0;

  return tasks.map((task: string) => (
    <>
      <h4
        key={j++}
        id={"task" + i++}
        onClick={() => {
          let tasks1: any = localStorage.getItem("tasks");
          const tasks = tasks1 ? JSON.parse(tasks1.toString()) : [];

          const tsks = [];

          for (let t of tasks) {
            if (t !== task) tsks.push(t);
          }
          localStorage.setItem("tasks", JSON.stringify(tsks));
          window.location.reload();
        }}
      >
        {task}
      </h4>
    </>
  ));
};

export default TasksList;
