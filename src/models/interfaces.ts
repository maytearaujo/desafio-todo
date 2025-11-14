export default interface IOrqTask {
  id: number;
  title: string;
  concluded: boolean;
}

export type TOrqTodoContext = {
  tasks: IOrqTask[];
  createTask: (title: string, concluded: boolean) => void;
};
