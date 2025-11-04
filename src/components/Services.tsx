import { Shield, Mail, Cloud, HardDrive, GitBranch, Activity } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    icon: Shield,
    title: 'VPN',
    description: 'Secure network access with WireGuard and OpenVPN support.',
    status: 'Q4 2025',
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'Full-featured email hosting with Mailcow, SMTP, and IMAP.',
    status: 'Q4 2025',
  },
  {
    icon: Cloud,
    title: 'Cloud Storage',
    description: 'Self-hosted file sync and sharing with Nextcloud.',
    status: 'Q1 2026',
  },
  {
    icon: HardDrive,
    title: 'Backups',
    description: 'Automated backups with restic and borg.',
    status: 'Q1 2026',
  },
  {
    icon: GitBranch,
    title: 'CI/CD',
    description: 'Version control and pipelines with GitLab or Gitea.',
    status: 'Q2 2026',
  },
  {
    icon: Activity,
    title: 'Monitoring',
    description: 'Comprehensive monitoring with Grafana and Prometheus.',
    status: 'Q2 2026',
  },
];

const Services = () => {
  const handleNotifyMe = () => {
    const newsletterInput = document.getElementById('newsletter-input') as HTMLInputElement;
    if (newsletterInput) {
      newsletterInput.focus();
      newsletterInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="services" className="py-24 bg-surface/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Services <span className="gradient-text">coming soon</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive suite of self-hosted solutions for all your infrastructure needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="bg-surface border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <service.icon className="text-primary" size={24} />
                  </div>
                  <Badge variant="outline" className="border-muted text-muted-foreground">
                    {service.status}
                  </Badge>
                </div>
                <CardTitle className="text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleNotifyMe}
                  className="w-full border-border hover:bg-surface-elevated"
                >
                  Notify me
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
