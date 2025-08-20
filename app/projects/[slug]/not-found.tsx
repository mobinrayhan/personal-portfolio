import Link from "next/link"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <Section className="min-h-[60vh] flex items-center">
      <Container>
        <div className="mx-auto max-w-md text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter">Project Not Found</h1>
          <p className="text-muted-foreground">The project you're looking for doesn't exist or may have been moved.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
