import { createFileRoute, SearchSchemaInput } from "@tanstack/react-router"
import { Loader } from "@/components/common/loader"
import { useToDos } from "@/hooks"
import { useTranslation } from "react-i18next"
import { TodosSearch } from "./interfaces"
import { CountInput, Todo } from "./components"
import { PageHeader } from "@/components/common/page-header"

export const Route = createFileRoute("/todos/")({
  validateSearch: (search: SearchSchemaInput & Partial<TodosSearch>): TodosSearch => ({
    ...search,
    count: Math.max(1, search.count ?? 5)
  }),
  component: Todos
})

function Todos() {
  const { t } = useTranslation()
  const { count } = Route.useSearch()
  const navigate = Route.useNavigate()
  const { data, loading } = useToDos({ count })

  const updateTodos = (newCount: number) => navigate({ search: { count: newCount } })

  return (
    <>
      <PageHeader
        title={t("todos.title")}
        subtitle={<CountInput disabled={loading} initialCount={count} onCountSubmit={updateTodos} />}
      />
      <div className="flex flex-col gap-2">
        {loading ? (
          <Loader flex />
        ) : (
          data?.todos.map(item => <Todo key={item.id} id={item.id} todo={item.todo} completed={item.completed} />)
        )}
      </div>
    </>
  )
}
