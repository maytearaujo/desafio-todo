import OrqHeader from "../../components/header/Header";
import OrqCreate from "../../components/task/CreateTask";
import OrqListTask from "../../components/task/ListTask";
import OrqSearchTask from "../../components/task/SearchTask";

const OrqHome = () => {
  return (
    <div className="orq-home">
      <OrqHeader />
      <div className="orq-home__components">
        <OrqCreate />
        <OrqSearchTask />
        <OrqListTask />
      </div>
    </div>
  );
};

export default OrqHome;
