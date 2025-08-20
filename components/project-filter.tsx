"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProjectFilterProps {
  technologies: string[]
  selectedTech: string | null
  onTechChange: (tech: string | null) => void
}

export function ProjectFilter({ technologies, selectedTech, onTechChange }: ProjectFilterProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Filter by technology:</span>
        <Button
          variant={selectedTech === null ? "default" : "outline"}
          size="sm"
          onClick={() => onTechChange(null)}
          className="h-8"
        >
          All
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Badge
            key={tech}
            variant={selectedTech === tech ? "default" : "secondary"}
            className={cn(
              "cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground",
              selectedTech === tech && "bg-primary text-primary-foreground",
            )}
            onClick={() => onTechChange(selectedTech === tech ? null : tech)}
          >
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  )
}
