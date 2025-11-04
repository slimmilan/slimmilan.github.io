import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is PhoenixCloud?',
    answer: 'PhoenixCloud is a platform that makes it easy to self-host your own cloud services. We provide simple deployment and management tools for VPN, email, file storage, and more—giving you full control and privacy.',
  },
  {
    question: 'Which services will be available?',
    answer: 'We\'re launching with VPN (WireGuard/OpenVPN) and Email (Mailcow) in Q4 2025. Cloud storage (Nextcloud) and automated backups follow in Q1 2026, with CI/CD and monitoring tools coming in Q2 2026.',
  },
  {
    question: 'Is this for me?',
    answer: 'PhoenixCloud is perfect for developers, sysadmins, small teams, and privacy-conscious users who want to own their infrastructure without vendor lock-in. If you value control, transparency, and data sovereignty, this is for you.',
  },
  {
    question: 'Where will it be hosted?',
    answer: 'You choose! PhoenixCloud is designed to run on your own infrastructure—whether that\'s a home server, VPS, or cloud provider. We provide the tools; you control the hosting.',
  },
  {
    question: 'When is the beta?',
    answer: 'Our alpha launches in Q4 2025 with VPN and Email. Beta (including Nextcloud and backups) is planned for Q1 2026, with general availability in Q2 2026.',
  },
  {
    question: 'What about pricing?',
    answer: 'We\'re committed to transparent, fair pricing with no surprise fees. Exact pricing details will be announced closer to launch. Join our waitlist to be notified first.',
  },
  {
    question: 'How do I get early access?',
    answer: 'Simply sign up for our waitlist using the form on this page. We\'ll email you with early access details and exclusive updates as we approach launch.',
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-surface/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Frequently asked <span className="gradient-text">questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about PhoenixCloud.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-surface border border-border rounded-lg px-6 hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
