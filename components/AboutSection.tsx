import { Heart, Users, Sun, Clock, TrendingUp, Leaf, Shield, Smile } from "lucide-react";
import communityImage from "@/assets/gallery-8.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  { icon: Shield, label: "Give shelter to children's" },
  { icon: Users, label: "Professional Team" },
  { icon: Sun, label: "High relaxing nature" },
  { icon: Clock, label: "24/7 hour open" },
  { icon: TrendingUp, label: "Helping children's to build up" },
  { icon: Leaf, label: "Growing stage for children's" },
  { icon: Heart, label: "Self-sustaining organization" },
  { icon: Smile, label: "Care for children's" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal variant="fadeLeft">
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">About Us</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              A Hunger for <span className="gradient-text">Home & Love</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              In the eyes and heart of every child is a hunger for home. Not just for a hunger of food and a place to sleep, but for the feeling of safety and community. Most importantly: for love.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <ScrollReveal key={f.label} delay={i * 0.05} variant="scaleUp">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <f.icon className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground text-sm font-medium">{f.label}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} variant="fadeRight">
            <div className="relative">
              <img
                src={communityImage}
                alt="Children at Matruchhaya community"
                className="rounded-2xl w-full object-cover shadow-xl"
                loading="lazy"
                width={1200}
                height={800}
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                <p className="font-heading text-3xl font-bold">5+</p>
                <p className="text-sm opacity-80">Years of Service</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
