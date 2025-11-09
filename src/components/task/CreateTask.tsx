import type IOrqTodo from "../../models/interface";
import "../../styles/output.css"
import { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/usePersistedState";
import { data, LOCAL_STORAGE_KEY, setItem } from "../../services/Services";
const OrqCreateTask = () => {
  const [inputText, setInputText] = useState("");
  const [check, setCheck] = useState(false);
  const [task, setTask] = useLocalStorage(LOCAL_STORAGE_KEY, data);

  useEffect(() => {
    setItem(LOCAL_STORAGE_KEY, task);
  }, [task]);

  const addTask = (e: any) => {
    e.preventDefault();

    const text = inputText.trim();
    if (text.length === 0) return;

    setTask((prevState: IOrqTodo[]) => [
      ...prevState,
      {
        id: prevState.length + 1,
        title: text,
        concluded: check
      },
    ]);

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

