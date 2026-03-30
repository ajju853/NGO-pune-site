import { GraduationCap, HeartPulse, Brain, Zap, Home, Building2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: GraduationCap,
    title: "Education",
    desc: "We stand to educate, Heal and Empower through long term and committed support for the children, orphans, street, slums and destitute.",
  },
  {
    icon: HeartPulse,
    title: "Health and Hygiene",
    desc: "We take care of proper health and hygiene for children's. We also set programs for their knowledge view regarding health and hygiene.",
  },
  {
    icon: Brain,
    title: "Counselling and Life-skill",
    desc: "Proper counselling and life-skill support help students to focus on their goals, achieve it and settle as a happy person.",
  },
  {
    icon: Zap,
    title: "Youth Empowerment",
    desc: "The purpose driven Youth development programs creates successful and happy youngsters for the society.",
  },
  {
    icon: Home,
    title: "Shelter and Clothing",
    desc: "Safe sheltered space make children happier. It provides the much needed trusted and loving space for them to feel like home.",
  },
  {
    icon: Building2,
    title: "Infrastructure",
    desc: "We take care of Maintenance of existing infrastructure, adding more facilities to equip the centre and meet the challenges.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal variant="blur">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">Service</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              What Service We Offer
            </h2>
            <p className="text-muted-foreground text-lg italic font-heading">
              "Bal seva hich Ishwar seva"
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1} variant="scaleUp">
              <div className="bg-card rounded-2xl p-8 card-hover h-full">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: "var(--gradient-warm)" }}>
                  <s.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
