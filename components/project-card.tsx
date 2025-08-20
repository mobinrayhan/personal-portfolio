import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Project } from "@/data/types"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/10">
      <div className="aspect-video overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.name}
          width={600}
          height={400}
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="line-clamp-1">{project.name}</CardTitle>
            <CardDescription className="line-clamp-1">{project.tagline}</CardDescription>
          </div>
          {project.featured && (
            <Badge variant="secondary" className="shrink-0">
              Featured
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1">
          {project.tech.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.tech.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{project.tech.length - 4}
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2">
          {project.links.github && (
            <Button size="sm" variant="outline" asChild>
              <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-1" />
                Code
              </Link>
            </Button>
          )}
          {project.links.live && (
            <Button size="sm" variant="outline" asChild>
              <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" />
                Live
              </Link>
            </Button>
          )}
          <Button size="sm" variant="ghost" asChild className="ml-auto">
            <Link href={`/projects/${project.slug}`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
