import { Sidebar } from "@/components/ui/sidebar"

export interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {}

export interface SidebarNavigationItem {
  name: string
  url: string
  Icon: React.FC
  disabled?: boolean
  hidden?: boolean
}
