import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const milestones = [
  {
    quarter: 'Q4 2025',
    title: 'Alpha Release',
    description: 'VPN and Email services go live for early adopters.',
    status: 'upcoming',
  },
  {
    quarter: 'Q1 2026',
    title: 'Beta Release',
    description: 'Add Nextcloud and automated backup solutions.',
    status: 'planned',
  },
  {
    quarter: 'Q2 2026',
    title: 'General Availability',
    description: 'Full suite including CI/CD and monitoring tools.',
    status: 'planned',
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 bg-surface/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Roadmap</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our journey to building the best self-hosting platform.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.quarter}
                className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                
                <div className="bg-surface border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <Calendar className="text-primary" size={20} />
                    <span className="text-primary font-semibold">{milestone.quarter}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Request early access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
