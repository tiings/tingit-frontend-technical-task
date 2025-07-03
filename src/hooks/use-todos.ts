import { useQuery } from "@tanstack/react-query"
import { todosQueryOptions } from "@/lib/query-options"
import { TodosQueryArgs } from "@/types/query"

interface UseToDosParams extends TodosQueryArgs {
  count?: number
}

export const useToDos = ({ count }: UseToDosParams = {}) => {
  const { data, error, isFetching, isPending } = useQuery(todosQueryOptions({ count }))

  return { data, error, loading: isFetching || isPending }
}
