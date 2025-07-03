import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "@tanstack/react-router"
import { queryClient } from "@/lib/query-client"
import { router } from "@/lib/router"
import { I18nextProvider } from "react-i18next"
import i18n from "@/lib/i18n"
import "@/styles/index.css"
import { QueryClientProvider } from "@tanstack/react-query"

const rootElement = document.getElementById("root")!

export const App = () => (
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} context={{ queryClient }} />
      </QueryClientProvider>
    </I18nextProvider>
  </StrictMode>
)

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)

  root.render(<App />)
}
