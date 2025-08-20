import type { Metadata } from "next"
import Image from "next/image"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { aboutData } from "@/data/about"

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about my background, experience, and passion for development",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Section className="gradient-bg">
        <Container>
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              <span className="text-gradient">About Me</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating innovative solutions and building exceptional user experiences
            </p>
          </div>
        </Container>
      </Section>

      {/* Main Content */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Bio and Photo */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">My Story</h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed text-lg">{aboutData.longBio}</p>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold tracking-tighter">What I Bring</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {aboutData.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-3 shrink-0" />
                      <p className="text-muted-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Photo */}
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                    <Image
                      src={aboutData.headshot || "/placeholder.svg"}
                      alt="Professional headshot"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                  <CardDescription>A snapshot of my journey</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {aboutData.stats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                      <Badge variant="secondary" className="font-bold">
                        {stat.value}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-muted/50">
        <Container>
          <div className="mx-auto max-w-2xl text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter">Let's Work Together</h2>
            <p className="text-muted-foreground">
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your
              ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 glow-accent"
              >
                Get In Touch
              </a>
              <a
                href="/projects"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                View My Work
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
