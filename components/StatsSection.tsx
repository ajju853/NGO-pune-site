import { Heart, Target, Calendar, UsersRound } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { icon: Heart, value: "1,452+", label: "Happy Childrens" },
  { icon: Target, value: "3,452+", label: "Mission Completed" },
  { icon: Calendar, value: "5+", label: "Years Of Experience" },
  { icon: UsersRound, value: "72+", label: "Team Members" },
];

const StatsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: "var(--gradient-green)" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.15} variant="slideUp">
              <div className="text-center">
                <stat.icon className="w-10 h-10 text-primary-foreground/60 mx-auto mb-4" />
                <p className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/70 font-medium">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
