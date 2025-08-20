import type { Metadata } from "next"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SkillPill } from "@/components/skill-pill"
import { skillsData } from "@/data/skills"

export const metadata: Metadata = {
  title: "Skills",
  description: "My technical skills and expertise across various technologies and tools",
}

export default function SkillsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Section className="gradient-bg">
        <Container>
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              <span className="text-gradient">My Skills</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies, tools, and methodologies I use to build exceptional digital experiences
            </p>
          </div>
        </Container>
      </Section>

      {/* Skills Section */}
      <Section>
        <Container>
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Technical Expertise</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A comprehensive overview of my technical skills organized by category
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {skillsData.categories.map((category, index) => (
                <Card key={index} className="h-fit">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      {category.name}
                    </CardTitle>
                    <CardDescription>
                      {category.items.length} skill{category.items.length !== 1 ? "s" : ""}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill) => (
                        <SkillPill key={skill} skill={skill} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-muted/50 rounded-lg p-8 text-center space-y-4">
              <h3 className="text-2xl font-bold">Always Learning</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Technology evolves rapidly, and I'm committed to continuous learning. I regularly explore new
                frameworks, tools, and best practices to stay current with industry trends and deliver cutting-edge
                solutions.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
