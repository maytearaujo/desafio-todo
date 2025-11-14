import { createContext} from "react";
import type { TOrqTodoContext } from "../models/interfaces";

export const TodoContext = createContext<TOrqTodoContext | null>(null);
