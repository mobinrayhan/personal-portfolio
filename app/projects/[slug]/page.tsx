import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { projectsData } from "@/data/projects";
import { ArrowLeft, ExternalLink, Github, Tag } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = projectsData.projects.find((p) => p.id === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.imagePath],
    },
  };
}

export async function generateStaticParams() {
  return projectsData.projects.map((project) => ({
    slug: project.id,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.projects.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Back Button */}
      <Section className="pt-24 pb-8">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/projects">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </Button>
      </Section>

      {/* Project Header */}
      <Section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div>
              <Badge
                variant={project.status === "completed" ? "default" : "outline"}
                className="mb-4"
              >
                {project.status === "completed" ? "Completed" : "In Progress"}
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex gap-4">
              {project.liveUrl && (
                <Button asChild className="btn-electric">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Link>
                </Button>
              )}
              {project.githubUrl && (
                <Button asChild variant="outline">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Link>
                </Button>
              )}
            </div>

            {/* Project Info */}
            <div className="space-y-4 pt-6 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Tag className="w-4 h-4" />
                <span>Category: {project.category}</span>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="skill">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project Image */}
          <div className="relative">
            <div className="aspect-video relative overflow-hidden rounded-xl bg-muted shadow-2xl">
              <Image
                src={`https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop`}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-br from-electric-400/20 to-purple-400/20 rounded-xl -z-10 blur-xl" />
          </div>
        </div>
      </Section>

      {/* Project Details */}
      <Section>
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">
            Project <span className="gradient-text">Overview</span>
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {project.longDescription.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-muted-foreground leading-relaxed mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Related Projects */}
      <Section className="bg-muted/30">
        <h2 className="text-3xl font-bold text-center mb-12">
          More <span className="gradient-text">Projects</span>
        </h2>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
