import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Link, useRouter } from "@tanstack/react-router"
import { ROUTES } from "@/constants/navigation"
import { useTranslation } from "react-i18next"
import { ErrorPageProps } from "./interfaces"

export const ErrorPage = ({ title, description, error, reset }: ErrorPageProps) => {
  const { t } = useTranslation()
  const router = useRouter()

  const retry = () => {
    reset?.()

    return router.invalidate()
  }

  return (
    <div className="flex h-full flex-col items-center justify-center px-4 text-center">
      <Card className="w-full max-w-md p-6">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{title ?? t("navigation.common.error.title")}</CardTitle>
          <CardDescription>{description ?? t("navigation.common.error.description")}</CardDescription>
        </CardHeader>
        {error && <p className="text-sm text-destructive">{error.message}</p>}
        <CardFooter className="flex flex-col gap-4">
          <Button asChild className="w-full">
            <Link to={ROUTES.ROOT}>{t("navigation.common.notFound.back")}</Link>
          </Button>
          {reset && (
            <Button className="w-full" variant="ghost" onClick={retry}>
              {t("navigation.common.error.retry")}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
