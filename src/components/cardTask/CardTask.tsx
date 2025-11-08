import "../../sass/input.scss";
// import type IOrqTask from "../../models/interface";

// interface IOrqCardTaskProps {
//   cardTask: IOrqTask;
// }

// const OrqCardTask = ({ cardTask }: IOrqCardTaskProps) => {
const OrqListTask = () => {
  return (
    <div className="orqListTask">
      <label className="orqListTask__label">Título: Fazer Almoço</label>
      <label className="orqListTask__label">Situação: Concluída</label>
      <button className="orqListTask__button">Editar</button>
      <button className="orqListTask__button">Atualizar</button>
    </div>
  );
};

export default OrqListTask;
