import { MenuIcon } from "lucide-react"
import { useSidebar } from "@/components/ui/sidebar"
import { NavigationItem } from "./navigation-item"
import { useTranslation } from "react-i18next"
import { NAVIGATION_LINKS } from "@/constants/navigation"

const TABS = NAVIGATION_LINKS.filter(link => link.mobileTabs)

export const BottomNavigationBar = () => {
  const { t } = useTranslation()
  const { toggleSidebar } = useSidebar()

  return (
    <nav className="fixed bottom-0 left-0 z-[49] w-full border-t border-muted-foreground bg-background/95 px-2 shadow-lg backdrop-blur-sm">
      <div className="mb-safe flex h-16 items-center justify-around">
        {TABS.map(({ id, url, name, Icon }) => (
          <NavigationItem key={id} id={id} name={t(name)} url={url} Icon={Icon} />
        ))}
        <NavigationItem id="menu" name={t("navigation.menu")} Icon={MenuIcon} onClick={toggleSidebar} />
      </div>
    </nav>
  )
}
