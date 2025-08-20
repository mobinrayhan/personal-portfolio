"use client"
import { Badge } from '@/components/ui/badge';
import { Experience } from '@/data/types';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin } from 'lucide-react';
import Link from 'next/link';

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export function TimelineItem({ experience, index }: TimelineItemProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString + '-01');
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-3 top-6 bottom-0 w-px bg-border" />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 w-6 h-6 rounded-full bg-electric-600 border-4 border-background shadow-lg" />
      
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-1">{experience.position}</h3>
          <h4 className="text-lg text-electric-600 dark:text-electric-400 mb-2">
            <Link href={experience.companyLink} target='_blank'>
              {experience.company}
            </Link>
          </h4>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              <span>
                {formatDate(experience.startDate)} - {experience.endDate ? formatDate(experience.endDate) : 'Present'}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-4">
          {experience.description}
        </p>

        {/* Achievements */}
        {experience.achievements && experience.achievements.length > 0 && (
          <div className="mb-4">
            <h5 className="font-medium mb-2">Key Achievements:</h5>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              {experience.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-1">
          {experience.technologies.map((tech) => (
            <Badge key={tech} variant="skill" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}