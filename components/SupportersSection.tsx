import ScrollReveal from "@/components/ScrollReveal";
import supporter1 from "@/assets/supporter-1.jpg";
import supporter2 from "@/assets/supporter-2.jpg";
import supporter3 from "@/assets/supporter-3.jpg";

const supporters = [
  { img: supporter1, name: "मनोज शेठ गायकवाड", role: "शुभ चिंतक" },
  { img: supporter2, name: "पै. अमित भाऊ शिंदे", role: "भोसरी गावचे युवा नेते" },
  { img: supporter3, name: "श्री चंद्रकांत भाऊ वाळके", role: "दिघी गावचे मा. नगरसेवक" },
];

const SupportersSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center">
          <ScrollReveal variant="fadeLeft">
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">Our Well wishers</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Our Supporters
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-6">
            {supporters.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 0.15} variant="rotateIn">
                <div className="bg-card rounded-2xl p-6 text-center card-hover">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-4 border-accent/20">
                    <img
                      src={s.img}
                      alt={s.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-accent mb-1">{s.name}</h3>
                  <p className="text-muted-foreground italic text-sm">{s.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportersSection;
