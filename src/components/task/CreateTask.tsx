import "../../styles/output.css"
import { useState } from "react";
import { useTodos } from "../../contexts/TodoContext";
const OrqCreateTask = () => {
  const [inputText, setInputText] = useState("");
  const [check, setCheck] = useState(false);
  const { addTodo } = useTodos();

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = inputText.trim();
    if (text.length === 0) return;

    addTodo(text, check);

    setInputText("");
    setCheck(false);
  };

  return (
    <div>
      <form className="orqFormTask" onSubmit={addTask}>
        <input className="orqFormTask__input"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Tarefa"
        />
        <label className="orqFormTask__label">
          <input className="orqFormTask__checkbox"
            type="checkbox"
            checked={check}
            onChange={(e) => setCheck(e.target.checked)}
          />
          Tarefa Concluída?
        </label>
        <button className="orqformTask__button" type="submit">Adicionar</button>

      </form>
    </div>
  );
};

export default OrqCreateTask