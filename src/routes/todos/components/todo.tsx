import { TodoProps } from "./interfaces"
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"

export const Todo = ({ todo, completed }: TodoProps) => {
  const [markedCompleted, setMarkedCompleted] = useState(completed)

  return (
    <div className="flex items-center justify-between border-b border-gray-200 p-4">
      <div className="flex items-center">
        <Checkbox
          checked={markedCompleted}
          className="mr-2"
          onCheckedChange={() => setMarkedCompleted(!markedCompleted)}
        />
        <span className={markedCompleted ? "text-gray-500 line-through" : ""}>{todo}</span>
      </div>
      <span className="text-sm text-gray-500"></span>
    </div>
  )
}
