"use client";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/project-card";
import { Section } from "@/components/ui/section";
import { projectsData } from "@/data/projects";
import { Filter } from "lucide-react";
import { useMemo, useState } from "react";

const filters = ["All", "Web Development", "Mobile Development", "Portfolio"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projectsData.projects;
    }
    return projectsData.projects.filter(
      (project) => project.category === activeFilter
    );
  }, [activeFilter]);

  const projectCount = filteredProjects.length;
  const completedCount = filteredProjects.filter(
    (p) => p.status === "completed"
  ).length;
  const inProgressCount = filteredProjects.filter(
    (p) => p.status === "in-progress"
  ).length;

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            A collection of projects that showcase my skills and passion for
            creating digital solutions
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 text-sm text-muted-foreground">
            <span>
              <strong>{projectCount}</strong> Projects
            </span>
            <span>
              <strong>{completedCount}</strong> Completed
            </span>
            <span>
              <strong>{inProgressCount}</strong> In Progress
            </span>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-2 p-1 bg-muted rounded-lg">
            <Filter className="w-4 h-4 text-muted-foreground ml-3" />
            <div className="flex flex-wrap gap-1">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveFilter(filter)}
                  className={activeFilter === filter ? "btn-electric" : ""}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Grid */}
      <Section>
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold mb-4">No projects found</h3>
            <p className="text-muted-foreground mb-8">
              Try adjusting your filter or check back later for new projects.
            </p>
            <Button onClick={() => setActiveFilter("All")} variant="outline">
              View All Projects
            </Button>
          </div>
        )}
      </Section>
    </>
  );
}
