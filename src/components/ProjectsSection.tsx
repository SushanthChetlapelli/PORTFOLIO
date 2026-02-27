import { Target, Users, IndianRupee, TrendingUp, Lightbulb, BarChart3 } from "lucide-react";

const projects = [
  {
    title: "Shopify Store Lead Generation Campaign",
    platform: "Meta Ads (Facebook & Instagram)",
    budget: "₹1,000",
    goal: "Generate interest and collect potential customer leads for fashion and product-based offers.",
    strategy: [
      "Created simple but engaging ad creatives",
      "Targeted interest-based audiences",
      "Focused on lead generation objective",
      "Optimized for clicks and inquiries",
    ],
    results: [
      { text: "Generated around", highlight: "50 leads", suffix: "within a limited budget" },
      { text: "Strong initial audience response and engagement" },
      { text: "High potential for conversions" },
    ],
    note: "Due to payment gateway limitations, I was unable to convert these leads into qualified sales. However, the campaign provided valuable insights into audience targeting, ad creatives, and funnel gaps.",
    takeaway: "Learned practical experience in running paid ads, lead generation funnels, and identifying conversion bottlenecks.",
    icon: Target,
  },
  {
    title: "BEONVACATION Travel Lead Campaign",
    platform: "Meta Ads (Facebook & Instagram)",
    budget: "₹1,000",
    goal: "Attract potential customers interested in travel packages and trip planning services.",
    strategy: [
      "Targeted travel-interested audiences",
      "Simple travel-focused creatives",
      "Lead generation objective",
      "Localized audience targeting",
    ],
    results: [
      { text: "Generated", highlight: "15 quality leads" },
      { text: "Strong niche audience response" },
      { text: "Validated demand for travel-related campaigns" },
    ],
    takeaway: "Hands-on experience in niche targeting, travel marketing, and running Meta Ads for service-based businesses.",
    icon: Users,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="animate-on-scroll font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Case Studies<span className="text-accent">.</span>
        </h2>
        <p className="animate-on-scroll stagger-1 text-muted-foreground mb-12 max-w-2xl">
          Real campaigns. Real budgets. Real learnings.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`animate-on-scroll stagger-${i + 1} hover-lift rounded-xl border border-border bg-card p-6 md:p-8 flex flex-col gap-5`}
            >
              <div className="flex items-start gap-3">
                <project.icon className="w-7 h-7 text-accent mt-1 shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{project.platform}</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">{project.goal}</p>

              <div className="flex items-center gap-2 text-sm">
                <IndianRupee className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">Budget:</span>
                <span className="font-semibold text-foreground">{project.budget}</span>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">Strategy</span>
                </div>
                <ul className="space-y-1 pl-6">
                  {project.strategy.map((s) => (
                    <li key={s} className="text-sm text-muted-foreground list-disc">{s}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">Results</span>
                </div>
                <ul className="space-y-1 pl-6">
                  {project.results.map((r, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground list-disc">
                      {r.text}{" "}
                      {r.highlight && <strong className="text-foreground">{r.highlight}</strong>}
                      {r.suffix && ` ${r.suffix}`}
                    </li>
                  ))}
                </ul>
              </div>

              {project.note && (
                <p className="text-xs text-muted-foreground/80 italic border-l-2 border-accent/30 pl-3">
                  {project.note}
                </p>
              )}

              <div className="flex items-start gap-2 mt-auto pt-2 border-t border-border">
                <Lightbulb className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">{project.takeaway}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
