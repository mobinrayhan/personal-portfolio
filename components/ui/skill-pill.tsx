import { Badge } from '@/components/ui/badge';

interface SkillPillProps {
  skill: string;
}

export function SkillPill({ skill }: SkillPillProps) {
  return (
    <Badge variant="skill" className="hover:shadow-sm transition-all duration-200">
      {skill}
    </Badge>
  );
}