import { TodosRequestParams, TodosResponse } from "@/types/api"
import { Quote } from "@/types/entities"
import { client } from "./api-client"

export const api = {
  todos: {
    getTodos: (params: TodosRequestParams = {}) => client.get<TodosResponse, TodosRequestParams>("/todos", params)
  },
  quotes: {
    getRandomQuote: () => client.get<Quote>("/quotes/random")
  }
}
