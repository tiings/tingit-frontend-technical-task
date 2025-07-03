import { createFileRoute } from "@tanstack/react-router"
import { Loader } from "@/components/common/loader"
import { randomQuoteQueryOptions } from "@/lib/query-options"
import { useRandomQuote } from "@/hooks"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useTranslation } from "react-i18next"
import { PageHeader } from "@/components/common/page-header"

export const Route = createFileRoute("/home/")({
  beforeLoad: ({ context }) => context.queryClient.ensureQueryData(randomQuoteQueryOptions()),
  pendingComponent: () => <Loader flex />,
  component: Home
})

function Home() {
  const { t } = useTranslation()
  const { data, loading, refreshQuote } = useRandomQuote()

  return (
    <>
      <PageHeader title={t("home.title")} />
      <div className="flex items-center justify-center">
        <Card className="w-full">
          <CardContent className="px-8 py-4">
            <div className="space-y-3 text-center">
              <div className="font-serif text-6xl leading-none text-primary/20">&ldquo;</div>
              <blockquote className="relative text-lg leading-relaxed font-light text-foreground italic">
                {data.quote}
              </blockquote>
              <Separator />
              <cite className="text-base font-medium text-muted-foreground not-italic">— {data.author}</cite>
            </div>
            <CardFooter className="mt-8 justify-center">
              <Button disabled={loading} onClick={() => refreshQuote()}>
                {loading ? t("button.loading") : t("home.refreshQuoteButton")}
              </Button>
            </CardFooter>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
