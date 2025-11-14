import useTodos from "../../hooks/useTodos";
import "../../styles/output.css";
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
    <div>
      <form onSubmit={handleCreateTaskSubmit} className="orq-form-create-task" >
        <label className="orq-form-create-task__label">Tarefa </label>
        <input
          type="text"
          className="orq-form-create-task__input"
          // value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Informe a tarefa"
        />
        <label className="orq-form-create-task__label">Concluída? </label>
        <input
          type="checkbox"
          name="concluded"
          className="orq-form-create-task__checkbox"
          checked={concluded}
          onChange={(e) => setConcluded(e.target.checked)}
        />

        {showError && <span style={{ color: "red" }}>Informe a tarefa</span>}

        <button className="orq-form-create-task__button" type="submit">
          Adicionar
        </button>
      </form>
    </div>
  );
};

export default OrqCreateTask;
