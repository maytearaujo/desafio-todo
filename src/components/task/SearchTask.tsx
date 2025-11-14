import useTodos from "../../hooks/useTodos";

const OrqSearchTask = () => {
    const { search, setSearch } = useTodos();

  return (
    <div>
      <div className="orq-list-task">
        <form className="search-form">
          <label>Pesquisar Tarefa: </label>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Digite para buscar..."
          />
        </form>
      </div>
    </div>
  );
};

export default OrqSearchTask;
