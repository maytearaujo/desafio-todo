// import useTodos from "../../hooks/useTodos";
// import type IOrqTodo from "../../models/interfaces";
// import "../../styles/output.css";
// import { MdDelete } from "react-icons/md";

// interface IOrqTodoProps {
//   task: IOrqTodo;
// }

// const OrqTask = ({ task }: IOrqTodoProps) => {
//   // const { toggleTodo, deleteTask } = useTodos();

//   return (
//     <form className="orqTask">
//       <input
//         type="checkbox"
//         checked={task.concluded}
//         className="orqTask__checkbox"
//         onChange={() => toggleTodo(task.id)}
//       />
//       <label
//         className={`orqTask__label ${
//           task.concluded ? "orqTask__label--checked" : ""
//         }`}
//       >
//         {task.title}
//       </label>
//       <button
//         type="button"
//         className="orqTask__button"
//         onClick={() => deleteTask(task.id)}
//       >
//         <MdDelete />
//       </button>
//     </form>
//   );
// };

// export default OrqTask;
