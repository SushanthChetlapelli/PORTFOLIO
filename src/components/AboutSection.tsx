const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="animate-on-scroll font-heading text-3xl md:text-4xl font-bold mb-8 text-foreground">
          About Me<span className="text-accent">.</span>
        </h2>
        <p className="animate-on-scroll stagger-1 text-muted-foreground text-lg leading-relaxed mb-6">
          I am a passionate Digital Marketer with 2 years of hands-on experience
          in the field. I specialize in performance marketing, organic growth
          strategies, and conversion-focused campaigns. My focus is helping
          brands grow online using data, creativity, and proven marketing
          frameworks.
        </p>
        <p className="animate-on-scroll stagger-2 text-muted-foreground text-lg leading-relaxed">
          I work across multiple areas of digital marketing including paid
          advertising, analytics, SEO, and content strategy. I enjoy combining
          creativity with performance to deliver measurable results.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
