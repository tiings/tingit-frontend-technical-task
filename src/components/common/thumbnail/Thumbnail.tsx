import { Loader, LoaderSize, LoaderVariant } from "@/components/common/loader"
import { ThumbnailProps } from "./interfaces"
import { getPlaceholderIconClass, getThumbnailClass } from "./config"
import { ImageOffIcon } from "lucide-react"

export const Thumbnail = ({
  className,
  src,
  alt = "thumbnail",
  loading,
  disabled,
  clickable,
  Icon = ImageOffIcon,
  onClick,
  ...props
}: ThumbnailProps) => {
  const placeholder = (!src || loading) ?? props.variant === "placeholder"

  const thumbnailClassNames = getThumbnailClass({
    ...props,
    clickable: clickable ?? (onClick && !disabled),
    variant: props.variant ?? (placeholder ? "placeholder" : undefined),
    class: className
  })

  const iconClassNames = getPlaceholderIconClass(props)

  return (
    <div className={thumbnailClassNames} {...props} onClick={disabled || loading ? undefined : onClick}>
      {placeholder ? (
        <div className="flex size-full items-center justify-center">
          {loading ? (
            <Loader variant={LoaderVariant.Dark} size={LoaderSize.Small} />
          ) : (
            <Icon className={iconClassNames} />
          )}
        </div>
      ) : (
        <img src={src} alt={alt} className="size-full rounded-md object-cover" />
      )}
    </div>
  )
}
