import tingitLogo from "@/assets/tingit.svg"
import { Link, useLocation } from "@tanstack/react-router"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
  SidebarFooter
} from "@/components/ui/sidebar"
import { NAVIGATION_LINKS, ROUTES } from "@/constants/navigation"
import { AppSidebarProps, SidebarNavigationItem } from "./interfaces"
import { LanguageSelect } from "@/components/common/language-select"
import { useTranslation } from "react-i18next"

export const AppSidebar = (props: AppSidebarProps) => {
  const { isMobile, open, toggleSidebar } = useSidebar()
  const { t } = useTranslation()
  const pathname = useLocation({
    select: location => location.pathname
  })

  const hideSidebarOnMobile = () => isMobile && toggleSidebar()

  const renderMenuItemGroup = (items: SidebarNavigationItem[]) => (
    <SidebarGroup>
      <SidebarMenu>
        {items.map(({ name, url, hidden, Icon, disabled }) =>
          hidden ? null : (
            <SidebarMenuItem key={name}>
              <SidebarMenuButton asChild disabled={disabled} isActive={pathname.startsWith(url)}>
                <Link to={url} onClick={hideSidebarOnMobile}>
                  <Icon />
                  <span>{t(name)}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        )}
      </SidebarMenu>
    </SidebarGroup>
  )

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex items-center justify-center py-6">
        <Link to={ROUTES.HOME} className="mt-4">
          <img src={tingitLogo} alt="tingit" />
        </Link>
      </SidebarHeader>
      <SidebarContent>{renderMenuItemGroup(NAVIGATION_LINKS)}</SidebarContent>
      <SidebarRail />
      <SidebarFooter>
        <LanguageSelect compact={!open} onSelect={hideSidebarOnMobile} />
      </SidebarFooter>
    </Sidebar>
  )
}
