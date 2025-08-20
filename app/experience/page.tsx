import type { Metadata } from "next"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { TimelineItem } from "@/components/timeline-item"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { experienceData } from "@/data/experience"

export const metadata: Metadata = {
  title: "Experience",
  description: "My professional journey, roles, and achievements in software development",
}

export default function ExperiencePage() {
  // Calculate total years of experience
  const currentYear = new Date().getFullYear()
  const startYear = Math.min(...experienceData.roles.map((role) => Number.parseInt(role.start)))
  const totalYears = currentYear - startYear

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Section className="gradient-bg">
        <Container>
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              <span className="text-gradient">My Experience</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {totalYears}+ years of professional development experience across various industries and technologies
            </p>
          </div>
        </Container>
      </Section>

      {/* Experience Overview */}
      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-primary">{totalYears}+</CardTitle>
                <CardDescription>Years Experience</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-primary">{experienceData.roles.length}</CardTitle>
                <CardDescription>Professional Roles</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-primary">
                  {experienceData.roles.reduce((acc, role) => acc + role.bullets.length, 0)}
                </CardTitle>
                <CardDescription>Key Achievements</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Timeline Section */}
      <Section>
        <Container>
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Professional Journey</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A timeline of my career progression and key accomplishments
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {experienceData.roles.map((role, index) => (
                <TimelineItem key={index} role={role} isLast={index === experienceData.roles.length - 1} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Skills Highlight */}
      <Section className="bg-muted/50">
        <Container>
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Core Competencies</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Key skills developed throughout my professional journey
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Leadership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Led development teams and mentored junior developers</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Designed scalable systems and microservices architectures
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Optimized applications for speed and efficiency</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Worked effectively with cross-functional teams</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
