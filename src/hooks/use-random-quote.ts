import { useSuspenseQuery } from "@tanstack/react-query"
import { randomQuoteQueryOptions } from "@/lib/query-options"

export const useRandomQuote = () => {
  const { data, error, isFetching, refetch } = useSuspenseQuery(randomQuoteQueryOptions())

  return { data, error, loading: isFetching, refreshQuote: refetch }
}
