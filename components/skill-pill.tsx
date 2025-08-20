import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface SkillPillProps {
  skill: string
  variant?: "default" | "secondary" | "outline"
  className?: string
}

export function SkillPill({ skill, variant = "secondary", className }: SkillPillProps) {
  return (
    <Badge
      variant={variant}
      className={cn("transition-colors hover:bg-primary hover:text-primary-foreground", className)}
    >
      {skill}
    </Badge>
  )
}
