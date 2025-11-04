import { Lock, Zap, Book, Play, Tag, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: Lock,
    title: 'Privacy & Control',
    description: 'Your data stays on your infrastructure. No third-party access, no hidden telemetry.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimized deployments with minimal overhead. Fast, reliable, and efficient.',
  },
  {
    icon: Book,
    title: 'Open Standards',
    description: 'Built on proven open-source technologies. No vendor lock-in, full transparency.',
  },
  {
    icon: Play,
    title: 'One-click Deployments',
    description: 'Simple setup process. Get your services running in minutes, not hours.',
  },
  {
    icon: Tag,
    title: 'Transparent Pricing',
    description: 'Fair, predictable costs. No surprise fees. Pay only for what you use.',
  },
  {
    icon: Users,
    title: 'Community & Docs',
    description: 'Comprehensive documentation and active community support to help you succeed.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Built for <span className="gradient-text">self-hosters</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to run your own cloud infrastructure with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="bg-surface border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <CardTitle className="text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
