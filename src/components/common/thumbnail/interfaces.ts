import { VariantProps } from "class-variance-authority"
import { getThumbnailClass } from "./config"
import { ImgHTMLAttributes } from "react"
import { LucideIcon } from "lucide-react"

export interface ThumbnailProps extends VariantProps<typeof getThumbnailClass> {
  src?: ImgHTMLAttributes<HTMLImageElement>["src"]
  alt?: ImgHTMLAttributes<HTMLImageElement>["alt"]
  loading?: boolean
  disabled?: boolean
  className?: string
  Icon?: LucideIcon
  onClick?: () => void
}
