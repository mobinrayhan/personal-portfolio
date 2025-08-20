import Link from 'next/link';
import { Home } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <Section className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="text-center space-y-6 max-w-md">
        <div className="text-6xl font-bold gradient-text">404</div>
        <h1 className="text-2xl font-bold">Page Not Found</h1>
        <p className="text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="btn-electric">
          <Link href="/">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>
    </Section>
  );
}