import { CheckCircle } from "lucide-react";

const reasons = [
  "Data-driven strategies",
  "ROI-focused campaigns",
  "Creator + marketer mindset",
  "Fast learner and adaptable",
];

const WhyMeSection = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <h2 className="animate-on-scroll font-heading text-3xl md:text-4xl font-bold mb-10 text-foreground">
          Why Work With Me<span className="text-accent">.</span>
        </h2>
        <ul className="space-y-4">
          {reasons.map((reason, i) => (
            <li
              key={reason}
              className={`animate-on-scroll stagger-${i + 1} flex items-center gap-4`}
            >
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-lg text-muted-foreground">{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyMeSection;
