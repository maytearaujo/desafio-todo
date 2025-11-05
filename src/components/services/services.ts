import type { IOrqTodo } from "../model/interfaces";

const LOCAL_STORAGE_KEY = 'todos';

const SOrqTodo {
    getTodos: (): IOrqTodo[] => {
        const todoStr = localStorage.getItem(LOCAL_STORAGE_KEY);
        return todoStr ? JSON.parse(todoStr) : [];
    }

    addTodos: (title: string): IOrqTodo => {
        const todos = SOrqTodo.getTodos();
        const newTodo = IOrqTodo = {id: todos.length+1, title, concluded: false}

        const updateTodoS =  [...todos, newTodo]

        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodoS))
        return newTodo;
    }
}

export default SOrqTodo