import { ErrorComponentProps } from "@tanstack/react-router"

export interface ErrorPageProps extends Partial<ErrorComponentProps> {
  title?: string
  description?: string
}
