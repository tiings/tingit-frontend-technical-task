import { useTranslation } from "react-i18next"
import { CountInputProps } from "./interfaces"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCwIcon } from "lucide-react"

export const CountInput = ({ disabled, initialCount, onCountSubmit }: CountInputProps) => {
  const { t } = useTranslation()
  const [newCount, setNewCount] = useState(initialCount)

  return (
    <div className="flex flex-col">
      <span className="text-xs text-muted-foreground">{t("todos.countLabel")}</span>
      <div className="flex items-end gap-4 py-2">
        <Input
          type="number"
          value={newCount}
          placeholder={t("todos.countPlaceholder")}
          onChange={e => setNewCount(Math.max(1, parseInt(e.target.value, 10) || 1))}
        />
        <Button disabled={disabled} onClick={() => onCountSubmit(newCount)}>
          <RefreshCwIcon />
        </Button>
      </div>
    </div>
  )
}
