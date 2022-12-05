import Head from "next/head";
import React from "react";
import { useEffect, useRef, useState } from "react";
import styles from "./home.module.scss";
import TasksList from "./tasksList";

const isFound = (arr: never[], val: any) => {
  for (let v of arr) {
    if (v === val) return true;
  }
  return false;
};

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const [count, setCount] = useState(0);
  const [toggled, setToggled] = useState(false);
  const handleToggleBody = () => {
    setToggled(!toggled);
  };
  const inputRef = useRef(null);

  useEffect(() => {
    let tasks1: any = localStorage.getItem("tasks");
    const tasks = tasks1 ? JSON.parse(tasks1.toString()) : [];
    setTasks(tasks ? tasks : []);
  }, []);

  useEffect(() => {
    addEventListener("keypress", ({ key }: any) => {
      if (key == "Enter") {
        handleClick();
      }
    });
  }, []);

  const handleClick = () => {
    let tasks: any = JSON.parse(
      // @ts-ignore
      localStorage.getItem("tasks") ? localStorage.getItem("tasks") : []
    );
    // @ts-ignore
    if (inputRef.current.value && !isFound(tasks, inputRef.current.value)) {
      // @ts-ignore
      tasks.push(inputRef.current.value);
    }

    setTasks(tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setCount(tasks.length);
    // @ts-ignore
    inputRef.current.value = "";
  };

  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="Todo App" content="Todo App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.todoContainer}>
        <h1 className={styles.title}>Todo App</h1>
        <p className={styles.description}>What are your tasks for today.</p>

        <div className={styles.form}>
          <input
            type="text"
            name="text"
            autoComplete="off"
            required
            ref={inputRef}
          />
          <label htmlFor="text" className={styles.labelname}>
            <span className={styles.contentname}>Your Text</span>
          </label>
        </div>

        <br />
        <div id="tasksTable">{TasksList(tasks)}</div>
      </div>

      <footer className={styles.footer}>
        <a href="https://loop.org.il" target="_blank" rel="noopener noreferrer">
          <p> Created With {"<"}3 by Loopers </p>
        </a>
      </footer>
    </>
  );
}
