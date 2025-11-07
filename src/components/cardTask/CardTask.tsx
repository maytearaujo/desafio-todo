// import type IOrqTask from "../../models/interface";

// interface IOrqCardTaskProps {
//   cardTask: IOrqTask;
// }

// const OrqCardTask = ({ cardTask }: IOrqCardTaskProps) => {
const OrqCardTask = () => {
  return (
    <div className="orqCardTask">
      <label>Título: Fazer Almoço</label>
      <label>Situação: Concluída</label>
      <button>Editar</button>
      <button>Atualizar</button>
    </div>
  );
};

export default OrqCardTask;
