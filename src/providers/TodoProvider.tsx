import type { ReactNode } from "react";
import { LOCAL_STORAGE_KEY } from "../services/Services";
import { useLocalStorage } from "../hooks/useLocalStorage";
import type IOrqTask from "../models/interfaces";
import type { TOrqTodoContext } from "../models/interfaces";
import { TodoContext } from "../contexts/TodoContext";


const TodoProvider = ( { children } : { children: ReactNode } ) => {
  const [tasks, setTasks] = useLocalStorage<IOrqTask[]>(LOCAL_STORAGE_KEY, []);
    
  const createTask = (title: string, concluded: boolean) => {

    const newId = 
      tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1;

      const newTask = {
        id: newId,
        title,
        concluded,
      };

      setTasks([...tasks, newTask]);
    }
    
    const value: TOrqTodoContext = {
      tasks,
      createTask,
    };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider