import { queryOptions } from "@tanstack/react-query"
import { api } from "./api"
import { TodosQueryArgs } from "@/types/query"

export const randomQuoteQueryOptions = () =>
  queryOptions({
    queryKey: ["quote"],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))

      return api.quotes.getRandomQuote()
    }
  })

export const todosQueryOptions = ({ count }: TodosQueryArgs = {}) =>
  queryOptions({
    queryKey: ["todos", count],
    queryFn: async () => api.todos.getTodos({ limit: count })
  })
