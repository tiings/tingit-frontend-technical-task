import { cva } from "class-variance-authority"
import { LoaderSize, LoaderVariant } from "./interfaces"

export const getLoaderClass = cva("inline animate-spin", {
  variants: {
    size: {
      [LoaderSize.Tiny]: "size-4",
      [LoaderSize.Small]: "size-10",
      [LoaderSize.Medium]: "size-14",
      [LoaderSize.Large]: "size-20"
    },
    variant: {
      [LoaderVariant.Light]: "fill-yellow-200 text-muted-foreground",
      [LoaderVariant.Dark]: "fill-white text-black"
    }
  },
  defaultVariants: {
    size: LoaderSize.Small,
    variant: LoaderVariant.Light
  }
})

export const getLoaderContainerClass = cva("", {
  variants: {
    flex: {
      true: "flex flex-1 items-center justify-center",
      false: ""
    }
  }
})
