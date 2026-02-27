import { Search, BarChart3, Target, TrendingUp, DollarSign, Video, Palette, Layout, Lightbulb } from "lucide-react";

const primarySkills = [
  { name: "Google Ads", icon: Target },
  { name: "Meta Ads", icon: TrendingUp },
  { name: "Google Analytics", icon: BarChart3 },
  { name: "SEO", icon: Search },
  { name: "Sales & Conversion", icon: DollarSign },
];

const bonusSkills = [
  { name: "Video Editing", icon: Video },
  { name: "Graphic Design", icon: Palette },
  { name: "UI/UX Understanding", icon: Layout },
  { name: "Creative Strategy", icon: Lightbulb },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="animate-on-scroll font-heading text-3xl md:text-4xl font-bold mb-12 text-foreground">
          Core Skills<span className="text-accent">.</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {primarySkills.map((skill, i) => (
            <div
              key={skill.name}
              className={`animate-on-scroll stagger-${i + 1} group flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-background hover:border-accent transition-all duration-300 cursor-default`}
            >
              <skill.icon className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
              <span className="text-sm font-medium text-foreground text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        <h3 className="animate-on-scroll font-heading text-xl font-semibold mb-6 text-muted-foreground">
          Bonus Skills
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {bonusSkills.map((skill, i) => (
            <div
              key={skill.name}
              className={`animate-on-scroll stagger-${i + 1} group flex items-center gap-3 p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-all duration-300 cursor-default`}
            >
              <skill.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
