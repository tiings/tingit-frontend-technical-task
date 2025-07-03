import { Todo } from "@/types/entities"

export interface TodoProps extends Omit<Todo, "userId"> {}

export interface CountInputProps {
  disabled?: boolean
  initialCount: number
  onCountSubmit: (count: number) => void
}
