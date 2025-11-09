import type IOrqTodo from "../../models/interface";
import "../../styles/output.css";

interface IOrqTodoProps {
  tasks: IOrqTodo;
}

const OrqTask = ({ tasks }: IOrqTodoProps) => {

  return (
    <div className="orqTask">
      {/* <label className="orqTask__ul">Título: {tasks.title}</label> */}
      {/* <label className="orqTask__ul">Situação: {tasks.concluded ? "Concluída" : "Pendente"}</label> */}
      <ul className="orqTask__ul">
        <li>
          <div className="orqTask__ul__li">
            {tasks.title}
          </div>
          <div className="orqTask__ul__li">
            {tasks.concluded ? "Concluída" : "Pendente"}
          </div>
          <div className="orqTask__ul__li">
            <button className="orqTask__button">Editar</button>
          </div>
          <div className="orqTask__ul__li">
            <button className="orqTask__button">Atualizar</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default OrqTask;
