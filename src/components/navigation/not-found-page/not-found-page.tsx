import { useTranslation } from "react-i18next"
import { ErrorPage } from "../error-page"

export const NotFoundPage = () => {
  const { t } = useTranslation()

  return (
    <ErrorPage
      title={t("navigation.common.notFound.title")}
      description={t("navigation.common.notFound.description")}
    />
  )
}
