import { useEffect, useState } from "react";
import { data, getStorageValue } from "../services/Services";

export const useLocalStorage = (key: string, defaultValue: any) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, value]);

  return [value, setValue];
};


