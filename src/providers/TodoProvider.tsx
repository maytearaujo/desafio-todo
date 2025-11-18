import { useState, type ReactNode } from "react";
import { LOCAL_STORAGE_KEY } from "../services/Services";
import { useLocalStorage } from "../hooks/useLocalStorage";
import type IOrqTask from "../models/interfaces";
import type { TOrqTodoContext } from "../models/interfaces";
import { TodoContext } from "../contexts/TodoContext";
import initialTasks from "../../data/data.json";

const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useLocalStorage<IOrqTask[]>(LOCAL_STORAGE_KEY, initialTasks.data);
  const [search, setSearch] = useState<string>("");

  const createTask = (title: string, concluded: boolean) => {
    const newId =
      tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1;

    const newTask = {
      id: newId,
      title,
      concluded,
    };

    setTasks([...tasks, newTask]);
  };

  const toggleTaskConcluded = (id: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, concluded: !task.concluded };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const removeTask = (id: number) => {
    const remaningTasks = tasks.filter((task) => task.id !== id);
    setTasks(remaningTasks);
  };

  const filteredTasks =
    search.length > 0
      ? tasks.filter((task) =>
          task.title.toLowerCase().includes(search.toLowerCase())
        )
      : tasks;

  const value: TOrqTodoContext = {
    tasks,
    tasksFiltered: filteredTasks,
    createTask,
    toggleTaskConcluded,
    removeTask,
    search,
    setSearch,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
