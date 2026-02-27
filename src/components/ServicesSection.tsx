import { Megaphone, Users, Search, GitBranch, Zap, MessageSquare } from "lucide-react";

const services = [
  { title: "Paid Ads Management", desc: "Google & Meta Ads campaigns optimized for ROI.", icon: Megaphone },
  { title: "Social Media Growth", desc: "Strategic growth plans to scale your audience.", icon: Users },
  { title: "SEO Optimization", desc: "On-page & off-page SEO for organic visibility.", icon: Search },
  { title: "Marketing Funnel Strategy", desc: "End-to-end funnels that convert visitors to customers.", icon: GitBranch },
  { title: "Creative Ad Strategy", desc: "High-converting ad creatives and copy.", icon: Zap },
  { title: "Digital Marketing Consultation", desc: "Personalized strategy sessions for your brand.", icon: MessageSquare },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="animate-on-scroll font-heading text-3xl md:text-4xl font-bold mb-12 text-foreground">
          Services<span className="text-accent">.</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`animate-on-scroll stagger-${(i % 6) + 1} hover-lift p-6 rounded-xl border border-border bg-card`}
            >
              <service.icon className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
