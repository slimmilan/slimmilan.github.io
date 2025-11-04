import { Check } from 'lucide-react';

const reasons = [
  {
    title: 'Your data, your rules',
    description: 'Complete control over your infrastructure and data. No third-party access or surveillance.',
  },
  {
    title: 'Avoid vendor lock-in',
    description: 'Built on open standards. Migrate or modify your setup anytime without restrictions.',
  },
  {
    title: 'Cost efficiency at scale',
    description: 'Predictable costs that scale with you. No surprise fees or artificial limits.',
  },
  {
    title: 'Transparency and auditability',
    description: 'Open-source foundation means you can inspect, audit, and verify everything.',
  },
];

const WhySelfHost = () => {
  return (
    <section id="why" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why <span className="gradient-text">self-host</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Take back control of your digital infrastructure.
            </p>
          </div>

          <div className="space-y-8">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="flex items-start space-x-4 p-6 rounded-lg bg-surface/50 border border-border hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                  <Check className="text-primary" size={16} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySelfHost;
