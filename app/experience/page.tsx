import { Section } from "@/components/ui/section";
import { TimelineItem } from "@/components/ui/timeline-item";
import { yearsOfExperience } from "@/data/about";
import {
  companiesWorkWith,
  experienceData,
  projectDelivered,
} from "@/data/experience";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "My professional journey and career highlights in software development.",
};

export default function ExperiencePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A journey through my professional career, showcasing the roles,
            responsibilities, and achievements that have shaped me as a
            developer
          </p>
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-16 text-center">
            Professional <span className="gradient-text">Timeline</span>
          </h2>

          <div className="space-y-0">
            {experienceData.experiences.map((experience, index) => (
              <TimelineItem
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Summary */}
      <Section className="bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Career <span className="gradient-text">Summary</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-electric-600 dark:text-electric-400">
                {yearsOfExperience}
              </div>
              <div className="text-sm text-muted-foreground">
                Years of Experience
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-3xl font-bold text-electric-600 dark:text-electric-400">
                {companiesWorkWith}
              </div>
              <div className="text-sm text-muted-foreground">
                Companies Worked With
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-3xl font-bold text-electric-600 dark:text-electric-400">
                {projectDelivered}
              </div>
              <div className="text-sm text-muted-foreground">
                Projects Delivered
              </div>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mt-12 leading-relaxed max-w-2xl mx-auto">
            I started as <strong>Junior Developer</strong> and grew into a{" "}
            <strong>Senior Full Stack Engineer</strong>. Over the years, I have
            built many web and mobile apps, learned modern technologies, and
            helped teams deliver projects smoothly.
          </p>
        </div>
      </Section>
    </>
  );
}
