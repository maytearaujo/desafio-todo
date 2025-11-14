export default interface IOrqTask {
  id: number;
  title: string;
  concluded: boolean;
}

export type TOrqTodoContext = {
  tasks: IOrqTask[];
  tasksFiltered: IOrqTask[]
  createTask: (title: string, concluded: boolean) => void;
  toggleTaskConcluded: (id: number) => void;
  removeTask: (id: number) => void;
  search: string;
  setSearch: (value: string) => void;
};
