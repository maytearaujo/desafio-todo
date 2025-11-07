import OrqAddTask from "../../components/addTask/AddTask";
import OrqCardTask from "../../components/cardTask/CardTask";
import "../../sass/input.scss";

const Home = () => {
  return (
    <div className="orqHome">
      <h1 className="orqHome__title">To Do List</h1>
      <div className="orqHome__components">
        <OrqAddTask />
        <OrqCardTask />
      </div>
    </div>
  );
};

export default Home;
