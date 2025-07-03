import { SidebarTrigger } from "@/components/ui/sidebar"
import { useIsMobile } from "@/hooks"

export const Header = () => {
  const mobile = useIsMobile()

  return (
    <header className="sticky top-0 z-50 flex h-14 shrink-0 items-center gap-2 border-b bg-background px-4 py-3">
      <div className="-ml-1 flex h-full items-center gap-2 pr-1">{!mobile && <SidebarTrigger />}</div>
    </header>
  )
}
