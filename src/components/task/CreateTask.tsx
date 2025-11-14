import useTodos from "../../hooks/useTodos";
import { useState } from "react";

const OrqCreateTask = () => {
  const [title, setTitle] = useState<string>("");
  const [concluded, setConcluded] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const { createTask } = useTodos();

  const handleCreateTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.trim().length !== 0) {
      createTask(title, concluded);
      setTitle("");
      setConcluded(false);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <form onSubmit={handleCreateTaskSubmit} className="orq-create-task">
      <div className="orq-create-task__form-components">
        <label className="orq-create-task__form-components__label">Tarefa </label>
        <input
          type="text"
          className="orq-create-task__form-components__input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Informe a tarefa"
        />
        <label className="orq-create-task__form-components__label">Concluída? </label>
        <input
          type="checkbox"
          name="concluded"
          className="orq-create-task__form-components__checkbox"
          checked={concluded}
          onChange={(e) => setConcluded(e.target.checked)}
        />

        <button className="orq-create-task__button" type="submit">
          Adicionar
        </button>
      </div>
      <div className="orq-create-task__span">
        {showError && <span style={{ color: "red" }}>Informe a tarefa</span>}
      </div>
    </form>
  );
};

export default OrqCreateTask;
