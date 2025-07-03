import { NavigationLink } from "@/types/app"

export interface NavigationItemProps extends Omit<NavigationLink, "url" | "mobileTabs"> {
  url?: string
  onClick?: () => void
}
