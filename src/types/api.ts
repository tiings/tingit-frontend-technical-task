import { Todo } from "./entities"

export interface PaginationParams {
  limit?: number
  skip?: number
}

export interface PaginationResponse {
  total: number
  limit: number
  skip: number
}

export interface TodosRequestParams extends PaginationParams {}

export interface TodosResponse extends PaginationResponse {
  todos: Todo[]
}
