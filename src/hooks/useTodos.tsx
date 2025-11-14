import { useContext } from 'react'
import type { TOrqTodoContext } from '../models/interfaces';
import { TodoContext } from '../contexts/TodoContext';

const useTodos = (): TOrqTodoContext => {
    const context = useContext(TodoContext);

    if (!context) {
        throw new Error("Fora de contexto");
    }
  return context
}

export default useTodos
