
import CardTask from "../../components/cardTask/CardTask";
import Task from "../../components/task/task";
import "../../sass/input.scss";

const OrqHome = () => {
  return (
    <div className="orqHome">
      <h1 className="orqHome__title">To Do List</h1>
      <div className="orqHome__components">
        <Task />
        <CardTask />
      </div>
    </div>
  );
};

export default OrqHome;
