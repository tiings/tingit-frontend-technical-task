import { QueryClient } from "@tanstack/react-query"
import { FC } from "react"

export enum Language {
  English = "en",
  Lithuanian = "lt"
}

export interface RouterContext {
  queryClient: QueryClient
}

export interface NavigationLink {
  id: string
  name: string
  url: string
  mobileTabs?: boolean
  Icon: FC<{ className?: string }>
}
