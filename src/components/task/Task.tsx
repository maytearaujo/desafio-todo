import type IOrqTodo from "../../models/interface";
import "../../styles/output.css";
import { useTodos } from "../../contexts/TodoContext";

interface IOrqTodoProps {
  task: IOrqTodo;
}

const OrqTask = ({ task }: IOrqTodoProps) => {
  const { toggleTodo, deleteTask } = useTodos();

  return (
    <form className="orqTask">
      <input type="checkbox" checked={task.concluded} className="orqTask__checkbox" onChange={() => toggleTodo(task.id)} />
      <label className={`orqTask__label ${task.concluded ? 'orqTask__label--checked' : ''}`}>
        {task.title}
      </label>
      <button 
        type="button" 
        className="orqTask__button" 
        onClick={() => deleteTask(task.id)}
      >
        Apagar
      </button>
    </form>

  );
};

export default OrqTask;