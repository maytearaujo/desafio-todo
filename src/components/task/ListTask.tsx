import { MdDelete } from "react-icons/md";
import useTodos from "../../hooks/useTodos";

const OrqListTask = () => {
  const { tasksFiltered, toggleTaskConcluded, removeTask } = useTodos();

  return (
    <table className="orq-list-task">
      <thead className="orq-list-task__header">
        <tr className="orq-list-task__header__row">
          <th className="orq-list-task__header__row__cell">Tarefa</th>
          <th className="orq-list-task__header__row__cell">Status</th>
          <th className="orq-list-task__header__row__cell">Excluir</th>
        </tr>
      </thead>
      <tbody className="orq-list-task__body">
        {tasksFiltered.map((task) => (
          <tr className="orq-list-task__row" key={task.id}>
            <td
              className={`orq-list-task__header__row__cell ${task.concluded ? "orq-list-task__header__row__cell--concluded" : ""}`}
            >
              {task.title}
            </td>
            <td className="orq-list-task__header__row__cell--center">
              <input
                type="checkbox"
                checked={task.concluded}
                onChange={() => toggleTaskConcluded(task.id)}
              />
            </td>
            <td className="orq-list-task__header__row__cell--center">
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
