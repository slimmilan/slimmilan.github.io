import { Github, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const contactEmail = 'slimmilan@phoenixcloud.dev';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    toast({
      title: 'Email copied!',
      description: 'Contact email copied to clipboard.',
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const footerLinks = [
    { label: 'Status', href: '#' },
    { label: 'Docs', href: '#' },
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ];

  return (
    <footer id="contact" className="py-12 border-t border-border bg-surface/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-foreground font-bold">P</span>
                </div>
                <span className="text-xl font-semibold text-foreground">PhoenixCloud</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Self-host your cloud. Rise from the ashes.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Resources
              </h3>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Contact
              </h3>
              <button
                onClick={handleCopyEmail}
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="font-mono">{contactEmail}</span>
                {copied ? (
                  <Check size={16} className="text-success" />
                ) : (
                  <Copy size={16} className="group-hover:text-primary" />
                )}
              </button>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} PhoenixCloud. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
