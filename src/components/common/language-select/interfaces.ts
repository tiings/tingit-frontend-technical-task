import { Language } from "@/types/app"

export interface LanguageSelectProps {
  compact?: boolean
  className?: string
  onSelect?: (language: Language) => void
}
