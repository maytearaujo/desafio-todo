import { useLocalStorage } from "../../hooks/usePersistedState";
import "../../sass/input.scss"
import { LOCAL_STORAGE_KEY } from "../../services/Service";
const OrqCreate
= () => {
  const [title, setTitle] = useLocalStorage(LOCAL_STORAGE_KEY, "");
  const [concluded, setConcluded] = useLocalStorage(LOCAL_STORAGE_KEY, "concluded: false");

  return (
    <div>
      <form className="orqFormTask">
        <input className="orqFormTask__input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Tarefa"
        />
        <label className="orqFormTask__label">
          <input className="orqFormTask__checkbox"
            type="checkbox"
            checked={concluded}
            onChange={(e) => setConcluded(e.target.checked)}
          />{" "}
          Tarefa Concluída?
        </label>
        <button className="orqformTask__button" type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default OrqCreate

