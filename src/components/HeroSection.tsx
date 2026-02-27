const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl text-center">
        <p
          className="text-sm tracking-widest uppercase text-accent mb-4 opacity-0 animate-hero-fade"
          style={{ animationDelay: "0.2s" }}
        >
          Digital Marketer
        </p>
        <h1
          className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 opacity-0 animate-hero-fade"
          style={{ animationDelay: "0.4s" }}
        >
          Sushanth<span className="text-accent">.</span>
        </h1>
        <p
          className="text-lg md:text-xl text-muted-foreground mb-4 opacity-0 animate-hero-fade"
          style={{ animationDelay: "0.6s" }}
        >
          Digital Marketer | Google Ads | Meta Ads
        </p>
        <p
          className="text-base text-muted-foreground max-w-xl mx-auto mb-10 opacity-0 animate-hero-fade"
          style={{ animationDelay: "0.8s" }}
        >
          I help brands grow with data-driven digital marketing, paid ads, and
          high-converting content strategies.
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-hero-fade"
          style={{ animationDelay: "1s" }}
        >
          <a
            href="#services"
            className="px-8 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-border text-foreground font-medium rounded-lg hover:border-accent hover:text-accent transition-colors duration-300"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
