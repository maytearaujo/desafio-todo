import type IOrqTodo from "../models/interface";

export const LOCAL_STORAGE_KEY = "data";

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

export function getStorageValue(key: string, defaultValue: string) {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(key);
    const initial = saved !== null ? JSON.parse(saved) : defaultValue;
    return initial;
  }
}

export function setItem(key: string, value: IOrqTodo | IOrqTodo[]) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log("Erro ao salvar no localstorage", error);
  }
}

export function getItem(key: string) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  } catch (error) {
    console.log("Erro ao recuperar dados do localstorage", error);
  }
}