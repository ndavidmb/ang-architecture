import { Todo } from "../model/todos"

export interface TodoResponseDTO {
  todos: Todo[]
  total: number
  skip: number
  limit: number
}
