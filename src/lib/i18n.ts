import i18n from "i18next"
import Cookies from "js-cookie"
import { initReactI18next } from "react-i18next"
import { Language } from "@/types/app"
import ICU from "i18next-icu"
import { en, lt } from "@/dictionaries"
import { COOKIE_NAMES } from "@/constants/cookies"

void i18n
  .use(initReactI18next)
  .use(ICU)
  .init({
    resources: {
      [Language.English]: { translation: en },
      [Language.Lithuanian]: { translation: lt }
    },
    lng: Cookies.get(COOKIE_NAMES.LOCALE) ?? Language.English,
    interpolation: {
      escapeValue: false
    }
  })

export const getCurrentLanguage = () => (i18n.language ?? Language.English) as Language

export const setLanguage = async (language: Language) => {
  await i18n.changeLanguage(language)
  Cookies.set(COOKIE_NAMES.LOCALE, language, { expires: 400 })
}

export default i18n
