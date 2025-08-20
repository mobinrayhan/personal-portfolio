import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { ExperienceRole } from "@/data/types"

interface TimelineItemProps {
  role: ExperienceRole
  isLast?: boolean
}

export function TimelineItem({ role, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative flex gap-6">
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className="h-4 w-4 rounded-full bg-primary" />
        {!isLast && <div className="mt-2 h-full w-0.5 bg-border" />}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <CardTitle className="text-lg">{role.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <span className="font-medium">{role.company}</span>
                  {role.links?.website && (
                    <Button size="sm" variant="ghost" className="h-auto p-0" asChild>
                      <Link href={role.links.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    </Button>
                  )}
                </CardDescription>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <div>
                  {role.start} - {role.end}
                </div>
                <div>{role.location}</div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {role.bullets.map((bullet, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
