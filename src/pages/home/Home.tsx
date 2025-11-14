import OrqCreate from "../../components/task/CreateTask";
import OrqListTask from "../../components/task/ListTask";
import OrqSearchTask from "../../components/task/SearchTask";
import "../../styles/output.css";

const OrqHome = () => {
  return (
    <div className="orqHome">
      <h1 className="orqHome__title">Lista de Tarefas</h1>
      <div className="orqHome__components">
        <OrqSearchTask />
        <OrqListTask />
        <OrqCreate />
      </div>
    </div>
  );
};

export default OrqHome;
