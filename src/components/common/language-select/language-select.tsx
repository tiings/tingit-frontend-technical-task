import { useState } from "react"
import { LANGUAGE_CONFIG } from "@/constants/language"
import { Language } from "@/types/app"
import { LanguageSelectProps } from "./interfaces"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { getCurrentLanguage, setLanguage } from "@/lib/i18n"

export const LanguageSelect = ({ compact, className, onSelect }: LanguageSelectProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState(getCurrentLanguage())

  const selectLanguage = async (lang: Language) => {
    setSelectedLanguage(lang)
    await setLanguage(lang)
    onSelect?.(lang)
  }

  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="xl" variant="ghost" className={cn("w-full", compact && "px-0")}>
            <span className="size-8 text-2xl">{LANGUAGE_CONFIG[selectedLanguage].icon}</span>
            {!compact && <span>{LANGUAGE_CONFIG[selectedLanguage].label}</span>}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" className={cn("w-full", compact && "mx-5")}>
          {Object.entries(LANGUAGE_CONFIG).map(([lang, { label, icon }]) => (
            <DropdownMenuItem key={lang} onSelect={() => selectLanguage(lang as Language)}>
              <span className="size-8 text-2xl">{icon}</span>
              <span
                className={cn(
                  "justify-start font-medium capitalize",
                  selectedLanguage === (lang as Language) && "underline"
                )}
              >
                {label}
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
