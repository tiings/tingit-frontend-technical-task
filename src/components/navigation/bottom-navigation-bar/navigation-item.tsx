import { NavigationItemProps } from "./interfaces"
import { Link, useLocation } from "@tanstack/react-router"
import { cn } from "@/lib/utils"

export const NavigationItem = ({ name, url, Icon, onClick }: NavigationItemProps) => {
  const pathname = useLocation({ select: location => location.pathname })
  const active = url && pathname.startsWith(url)

  const baseClasses = cn(
    "flex h-full flex-1 flex-col items-center justify-center",
    "text-xs font-medium transition-colors",
    active ? "text-primary" : "text-muted-foreground"
  )

  const iconClasses = cn("mb-1 size-6", active ? "text-primary" : "text-muted-foreground")

  const content = (
    <>
      <Icon className={iconClasses} />
      <span>{name}</span>
    </>
  )

  return url ? (
    <Link to={url} className={baseClasses}>
      {content}
    </Link>
  ) : (
    <button className={baseClasses} onClick={onClick}>
      {content}
    </button>
  )
}
