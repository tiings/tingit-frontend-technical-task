import { createRootRouteWithContext, Outlet } from "@tanstack/react-router"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { RouterContext } from "@/types/app"
import { NotFoundPage } from "@/components/navigation/not-found-page"
import { ErrorPage } from "@/components/navigation/error-page"
import { BottomNavigationBar } from "@/components/navigation/bottom-navigation-bar"
import { Header } from "@/components/navigation/header"
import { AppSidebar } from "@/components/navigation/sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { useIsMobile } from "@/hooks"

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
  errorComponent: ErrorPage
})

function RootLayout() {
  const mobile = useIsMobile()

  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="overflow-hidden">
          {!mobile && <Header />}
          <div className="flex min-h-full flex-col p-4 pb-40 md:pb-24">
            <Outlet />
          </div>
        </SidebarInset>
        {mobile && <BottomNavigationBar />}
      </SidebarProvider>
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="top-right" />
    </div>
  )
}
