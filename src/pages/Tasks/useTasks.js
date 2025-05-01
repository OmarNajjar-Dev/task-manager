import { useState, useMemo } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

/**
 * Custom hook to manage tasks with localStorage persistence and filtering.
 * @returns {object} {
 *   tasks: Array,        // filtered list of tasks
 *   addTask: Function,   // (title, description) => void
 *   toggleTask: Function,// (id) => void
 *   deleteTask: Function,// (id) => void
 *   filter: string,      // current filter ('all'|'completed'|'incomplete')
 *   setFilter: Function  // setter for filter
 * }
 */
export default function useTasks() {
  const [rawTasks, setRawTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("all");

  // Add a new task
  const addTask = ({ title, description }) => {
    const newTask = {
      id: Date.now().toString(),
      title,
      description,
      complete: false,
    };
    setRawTasks([...rawTasks, newTask]);
  };

  // Toggle complete/incomplete status
  const toggleTask = (id) => {
    setRawTasks(
      rawTasks.map((task) =>
        task.id === id ? { ...task, complete: !task.complete } : task
      )
    );
  };

  // Delete a task by id
  const deleteTask = (id) => {
    setRawTasks(rawTasks.filter((task) => task.id !== id));
  };

  // Compute filtered tasks based on filter state
  const tasks = useMemo(() => {
    switch (filter) {
      case "completed":
        return rawTasks.filter((task) => task.complete);
      case "incomplete":
        return rawTasks.filter((task) => !task.complete);
      default:
        return rawTasks;
    }
  }, [rawTasks, filter]);

  return { tasks, addTask, toggleTask, deleteTask, filter, setFilter };
}
