import type IOrqTask from "../models/interfaces";

export const LOCAL_STORAGE_KEY = "data";

export const data: IOrqTask[] = [
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

export function getStorageValue<T>(key: string, defaultValue: T): T {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(key);
    if (saved !== null){
      try {
        return JSON.parse(saved)
      } catch (error) {
        console.error("Erro ao cadstrar valor no localStorage", 
          error
        );
        return defaultValue;
      }
    }
  }
  return defaultValue;
}
