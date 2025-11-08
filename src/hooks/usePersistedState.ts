import { useEffect, useState } from "react";
import { data, getStorageValue } from "../services/Service";

export const useLocalStorage = (key: string, defaultValue: string) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, value]);

  return [value, setValue];
};


