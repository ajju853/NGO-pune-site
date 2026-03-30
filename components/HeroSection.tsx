import gallery6 from "@/assets/gallery-6.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={gallery6}
        alt="Children at Matruchhaya Balakashram"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-up">
        <p className="text-primary-foreground/80 font-body text-lg md:text-xl mb-4 italic">
          "We make a living by what we get, but We make a life by what we give."
        </p>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Welcome To<br />
          <span className="text-accent">Matruchhaya</span> Balakashram
        </h1>
        <p className="text-primary-foreground/80 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Each day with the same goal: to bring as much love to as many children as possible.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#about" className="btn-accent rounded-full text-lg">
            Learn More
          </a>
          <a href="#contact" className="border-2 border-primary-foreground/50 text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-primary-foreground/10 text-lg">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
