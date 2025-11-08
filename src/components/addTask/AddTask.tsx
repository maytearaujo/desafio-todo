import { useLocalStorage } from "../../hooks/usePersistedState";

const OrqAddTask = () => {
  const [title, setTitle] = useLocalStorage("data", "");
  const [concluded, setConcluded] = useLocalStorage("data", "concluded: false");

  return (
    <div>
      <form>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Tarefa"
        />
        <label>
          <input
            type="checkbox"
            checked={concluded}
            onChange={(e) => setConcluded(e.target.checked)}
          />{" "}
          Tarefa Concluída?
        </label>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default OrqAddTask;
