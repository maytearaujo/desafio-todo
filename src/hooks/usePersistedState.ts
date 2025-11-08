import { useEffect, useState } from "react";
import { data } from "../services/Service";
import type IOrqTask from "../models/interface";

function getStorageValue(key: string, defaultValue: string) {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(key);
    const initial = saved !== null ? JSON.parse(saved) : defaultValue;
    return initial;
  }
}

export const useLocalStorage = (key: string, defaultValue: string) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, value]);

  return [value, setValue];
};

export function setItem(key: string, value: IOrqTask) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
}
