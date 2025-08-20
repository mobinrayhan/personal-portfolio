import Link from 'next/link';
import * as Icons from 'lucide-react';
import { Container } from '@/components/ui/container';
import { siteData } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <Link href="/" className="text-xl font-bold gradient-text">
                {siteData.name}
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs">
                {siteData.title}
              </p>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Navigation</h3>
              <div className="grid grid-cols-2 gap-2">
                {siteData.navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Connect</h3>
              <div className="flex space-x-4">
                {siteData.socialLinks.map((link) => {
                  const Icon = Icons[link.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{link.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              {siteData.footerText}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}