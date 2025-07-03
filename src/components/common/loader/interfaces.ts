export enum LoaderSize {
  Tiny = "tiny",
  Small = "small",
  Medium = "medium",
  Large = "large"
}

export enum LoaderVariant {
  Light = "light",
  Dark = "dark"
}

export interface LoaderProps {
  flex?: boolean
  variant?: LoaderVariant
  size?: LoaderSize
  className?: string
}
