import { Linkedin, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="animate-on-scroll font-heading text-3xl md:text-5xl font-bold mb-6 text-gradient">
          Let's Work Together
        </h2>
        <p className="animate-on-scroll stagger-1 text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Looking to grow your brand with smart digital marketing? Let's connect
          and build something impactful.
        </p>
        <div className="animate-on-scroll stagger-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/sushanth-chetlapelli-321334372/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
          >
            <Linkedin className="w-4 h-4" />
            Connect on LinkedIn
          </a>
          <a
            href="mailto:hello@sushanth.com"
            className="flex items-center gap-2 px-8 py-3 border border-border text-foreground font-medium rounded-lg hover:border-accent hover:text-accent transition-colors duration-300"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
