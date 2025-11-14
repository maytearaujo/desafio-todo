import { MdDelete } from "react-icons/md";
import useTodos from "../../hooks/useTodos";

const OrqListTask = () => {
  const { tasksFiltered, toggleTaskConcluded, removeTask } = useTodos();

  return (
    <table className="orq-table-task">
      <thead>
        <tr>
          <th>Tarefa</th>
          <th>Status</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        {tasksFiltered.map((task) => (
          <tr key={task.id}>
            <td
              className={task.concluded ? "orq-table-task-concluded" : "orq-table-task"}
            >
              {task.title}
            </td>
            <td>
              <input
                type="checkbox"
                checked={task.concluded}
                onChange={() => toggleTaskConcluded(task.id)}
              />
            </td>
            <td>
              <button
                type="button"
                onClick={() => removeTask(task.id)}
                aria-label={`Excluir tarefa ${task.title}`}
              >
                <MdDelete />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrqListTask;
