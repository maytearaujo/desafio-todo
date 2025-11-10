import { createContext, useContext, useEffect, useState } from "react";
import type IOrqTodo from "../models/interface";
import { LOCAL_STORAGE_KEY, setItem } from "../services/Services";

interface TodoContextType {
    todos: IOrqTodo[];
    addTodo: (title: string) => void;
    toggleTodo: (index: number) => void;
    deleteTask: (index: number) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: any }) => {
    const [todos, setTodos] = useState(() => {
        const localtodos = localStorage.getItem("data");
        return localtodos ? JSON.parse(localtodos) : []
    });

      useEffect(() => {
        if(todos.length > 0){

            setItem(LOCAL_STORAGE_KEY, todos);
        }
      }, [todos]);

    const addTodo = (title: string) => {
        const newTodo = { id: todos.length + 1, title, concluded: false } as IOrqTodo;
        setTodos([...todos, newTodo]);
    }

    const toggleTodo = (index: number) => {
        const newTodos = todos.map((todo: IOrqTodo, i: number) => {
            if (i === index) {
                return { ...todo, concluded: !todo.concluded };
            }
            return todo;
        });
        setTodos(newTodos);
    }
    
    const deleteTask = (id: number) => {
        const remainingTodos = todos.filter(todo => todo.id !== id);
        setTodos(remainingTodos);
    }

    return (
        <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTask }}>
            {children}
        </TodoContext.Provider>
    );
}

export const useTodos = (): TodoContextType => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("Não está dentro do contexto");
    }
    return context;
}

export default TodoContext;