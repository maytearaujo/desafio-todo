export const LOCAL_STORAGE_KEY = "data";

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
