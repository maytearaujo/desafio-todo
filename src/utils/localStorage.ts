import type IOrqTask from "../models/interface";

export function setItem(key: string, value: IOrqTask) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
}

export function getItem(key: string, defaultValue: string) {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.log(error);
  }
}

//   const addItem = () => {
//     if (newItem.trim()) {
//       setItems([...items, { id: Date.now(), text: newItem }]);
//       setNewItem("");
//     }
//   };

//   const deleteItem = (id) => {
//     setItems(items.filter((item) => item.id !== id));
//   };

//   const startEditing = (item) => {
//     setEditingItem(item);
//     setEditingText(item.text);
//   };

//   const saveEdit = () => {
//     setItems(
//       items.map((item) =>
//         item.id === editingItem.id ? { ...item, text: editingText } : item
//       )
//     );
//     setEditingItem(null);
//     setEditingText("");
//   };
