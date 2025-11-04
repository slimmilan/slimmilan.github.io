import { ArrowRight, Shield, Zap, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/phoenix-hero.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-background animate-gradient-shift" />
      
      {/* Hero Image with Overlay */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Phoenix rising" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-surface/50 border border-border">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Alpha launching Q4 2025</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-balance">
            Self‑host your{' '}
            <span className="gradient-text">cloud</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
            PhoenixCloud makes it simple to run your own VPN, email, Nextcloud, and more—with privacy and control.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
            >
              Get early access
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-border hover:bg-surface text-lg px-8"
            >
              Explore services
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
            {[
              { icon: Lock, label: 'Privacy-first' },
              { icon: Shield, label: 'Self-hosted' },
              { icon: Zap, label: 'Blazingly fast' },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center space-x-2 text-muted-foreground"
              >
                <Icon size={20} className="text-primary" />
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
