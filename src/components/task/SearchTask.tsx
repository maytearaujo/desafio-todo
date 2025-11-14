import useTodos from "../../hooks/useTodos";

const OrqSearchTask = () => {
  const { search, setSearch } = useTodos();

  return (
    <form className="orq-search-form">
      <label className="orq-search-form__label">Pesquisar Tarefa: </label>
      <input
        className="orq-search-form__input"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Digite para buscar..."
      />
    </form>
  );
};

export default OrqSearchTask;
