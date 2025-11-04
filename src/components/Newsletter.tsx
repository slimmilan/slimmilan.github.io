import { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: 'Invalid email',
        description: 'Please enter a valid email address.',
        variant: 'destructive',
      });
      return;
    }

    // Store in localStorage (demo)
    const existingEmails = JSON.parse(localStorage.getItem('phoenixcloud-waitlist') || '[]');
    existingEmails.push({ email, timestamp: new Date().toISOString() });
    localStorage.setItem('phoenixcloud-waitlist', JSON.stringify(existingEmails));

    setIsSubmitted(true);
    toast({
      title: 'Success!',
      description: "You're on the waitlist. We'll notify you when we launch.",
    });

    setTimeout(() => {
      setEmail('');
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="newsletter" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-surface border border-border rounded-2xl p-8 md:p-12 text-center space-y-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Mail className="text-primary" size={32} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Join the <span className="gradient-text">waitlist</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Be first to know when we launch. No spam, unsubscribe anytime.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  id="newsletter-input"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-input border-border text-foreground"
                  disabled={isSubmitted}
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubmitted}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap"
                >
                  {isSubmitted ? (
                    <>
                      <Check className="mr-2" size={18} />
                      Subscribed!
                    </>
                  ) : (
                    'Notify me'
                  )}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                We respect your privacy. Your email is safe with us.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
