const AddTask = () => {
  return (
    <div>
      <label htmlFor="tarefa">Tarefa</label>
      <input type="text" name="" id="tarefa" />
      <label htmlFor="concluded">Concluida</label>
      <input type="checkbox" name="" id="concluded" />
      <button>Cadastrar</button>
    </div>
  );
};

export default AddTask;
