"use client"

import * as React from "react"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { ProjectCard } from "@/components/project-card"
import { ProjectFilter } from "@/components/project-filter"
import { projectsData } from "@/data/projects"

export default function ProjectsPage() {
  const [selectedTech, setSelectedTech] = React.useState<string | null>(null)

  // Get all unique technologies from projects
  const allTechnologies = React.useMemo(() => {
    const techSet = new Set<string>()
    projectsData.projects.forEach((project) => {
      project.tech.forEach((tech) => techSet.add(tech))
    })
    return Array.from(techSet).sort()
  }, [])

  // Filter projects based on selected technology
  const filteredProjects = React.useMemo(() => {
    if (!selectedTech) return projectsData.projects
    return projectsData.projects.filter((project) => project.tech.includes(selectedTech))
  }, [selectedTech])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Section className="gradient-bg">
        <Container>
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              <span className="text-gradient">My Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of projects showcasing my skills in web development, from concept to deployment
            </p>
          </div>
        </Container>
      </Section>

      {/* Projects Section */}
      <Section>
        <Container>
          <div className="space-y-8">
            {/* Filter */}
            <ProjectFilter technologies={allTechnologies} selectedTech={selectedTech} onTechChange={setSelectedTech} />

            {/* Results Count */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {filteredProjects.length} of {projectsData.projects.length} projects
                {selectedTech && (
                  <>
                    {" "}
                    filtered by <span className="font-medium">{selectedTech}</span>
                  </>
                )}
              </p>
            </div>

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No projects found with the selected technology.</p>
                <button onClick={() => setSelectedTech(null)} className="mt-2 text-primary hover:underline">
                  Clear filter
                </button>
              </div>
            )}
          </div>
        </Container>
      </Section>
    </div>
  )
}
