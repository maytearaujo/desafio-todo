// import axios from "axios";
import type IOrqTodo from "../models/interface";

const LOCAL_STORAGE_KEY = "data";

export const data: IOrqTodo[] = [
  {
    id: 1,
    title: "Fazer almoço",
    concluded: false,
  },
  {
    id: 2,
    title: "Estudar",
    concluded: false,
  },
  {
    id: 3,
    title: "Lavar louça",
    concluded: false,
  },
];
