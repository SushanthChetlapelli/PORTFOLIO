import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="font-heading font-semibold text-foreground">Sushanth</p>
          <p className="text-sm text-muted-foreground">Digital Marketer</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/sushanth-chetlapelli-321334372/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sushanth. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
