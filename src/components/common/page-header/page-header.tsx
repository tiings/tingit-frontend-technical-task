import { PageHeaderProps } from "./interfaces"

export const PageHeader = ({ title, subtitle }: PageHeaderProps) => (
  <div className="flex flex-col gap-2 pb-5">
    <div className="text-2xl font-bold">{title}</div>
    {subtitle && <div className="text-muted-foreground">{subtitle}</div>}
  </div>
)
