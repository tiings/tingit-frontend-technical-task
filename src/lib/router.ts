import { createRouter } from "@tanstack/react-router"
import { routeTree } from "@/types/routeTree.gen"
import { queryClient } from "./query-client"

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
  scrollRestoration: true,
  context: { queryClient }
})
