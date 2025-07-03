import { NavigationLink } from "@/types/app"
import { HouseIcon, ListTodoIcon } from "lucide-react"

export const ROUTES = {
  ROOT: "/home",
  HOME: "/home",
  TODOS: "/todos"
} as const

export const NAVIGATION_LINKS: NavigationLink[] = [
  {
    id: "home",
    name: "navigation.home",
    Icon: HouseIcon,
    url: ROUTES.HOME,
    mobileTabs: true
  },
  {
    id: "todos",
    name: "navigation.todos",
    Icon: ListTodoIcon,
    url: ROUTES.TODOS,
    mobileTabs: true
  }
]
