import myImage from "@/assets/my-fav.webp";
import { Section } from "@/components/ui/section";
import { aboutData } from "@/data/about";
import { Award, Coffee, Heart, User } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Mobin - Full Stack Developer & Mobile App Developer",
  description:
    "Learn more about Mobin, a Full Stack Developer and Mobile App Developer. Discover my background, professional experience, and the technologies I use to build modern web and mobile applications.",
  keywords: [
    "Mobin",
    "Full Stack Developer",
    "Mobile App Developer",
    "About Me",
    "Web Development",
    "Mobile App Development",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
  ],
  openGraph: {
    title: "About | Mobin - Full Stack Developer & Mobile App Developer",
    description:
      "Discover Mobin's background, skills, and professional journey as a Full Stack and Mobile App Developer.",
    url: "https://mobin.dev/about",
    siteName: "Mobin Portfolio",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h1>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {aboutData.bio.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-muted-foreground leading-relaxed mb-6"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square relative overflow-hidden rounded-2xl bg-muted">
              <Image
                src={myImage}
                alt="Professional headshot"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-br from-electric-400/20 to-purple-400/20 rounded-2xl -z-10 blur-xl" />
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section className="bg-muted/30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {aboutData.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-electric-600 dark:text-electric-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Highlights */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Career <span className="gradient-text">Highlights</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutData.highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-electric-600/10 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-electric-600" />
                </div>
                <p className="text-muted-foreground">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Personal Touch */}
      <Section className="bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            Beyond <span className="gradient-text">Code</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-electric-600/10 rounded-full flex items-center justify-center mx-auto">
                <Coffee className="w-8 h-8 text-electric-600" />
              </div>
              <h3 className="text-xl font-semibold">Coffee Enthusiast</h3>
              <p className="text-muted-foreground">
                I believe the best code is written with the perfect cup of
                coffee. Always exploring new brewing methods and coffee origins.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-electric-600/10 rounded-full flex items-center justify-center mx-auto">
                <User className="w-8 h-8 text-electric-600" />
              </div>
              <h3 className="text-xl font-semibold">Mentor & Teacher</h3>
              <p className="text-muted-foreground">
                Passionate about sharing knowledge and helping others grow in
                their development journey through mentoring and technical
                writing.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-electric-600/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-electric-600" />
              </div>
              <h3 className="text-xl font-semibold">Open Source</h3>
              <p className="text-muted-foreground">
                Active contributor to open-source projects, believing in the
                power of community-driven development and knowledge sharing.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
