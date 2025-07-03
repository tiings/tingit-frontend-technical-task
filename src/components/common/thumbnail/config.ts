import { cva } from "class-variance-authority"

export const getThumbnailClass = cva(
  "aspect-square overflow-hidden object-cover transition-opacity duration-300 opacity-100",
  {
    variants: {
      size: {
        xSmall: "size-12 min-w-12 rounded",
        small: "size-16 min-w-16 rounded-sm",
        medium: "size-20 min-w-20 rounded-md",
        large: "size-32 min-w-32 rounded-lg",
        xLarge: "size-40 min-w-40 rounded-xl",
        full: "size-full min-w-full rounded-xl"
      },
      variant: {
        placeholder: "bg-muted"
      },
      clickable: {
        true: "cursor-pointer hover:opacity-80"
      }
    },
    defaultVariants: {
      size: "xSmall",
      variant: "placeholder",
      clickable: false
    }
  }
)

export const getPlaceholderIconClass = cva("text-muted-foreground", {
  variants: {
    size: {
      xSmall: "size-4",
      small: "size-5",
      medium: "size-6",
      large: "size-8",
      xLarge: "size-10",
      full: "size-12"
    }
  },
  defaultVariants: {
    size: "xSmall"
  }
})
