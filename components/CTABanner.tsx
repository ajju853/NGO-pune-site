import { lazy, Suspense } from "react";
import gallery1 from "@/assets/gallery-1.jpeg";
import ScrollReveal from "@/components/ScrollReveal";

const FloatingElements3D = lazy(() => import("@/components/FloatingElements3D"));

const CTABanner = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <Suspense fallback={null}>
        <FloatingElements3D />
      </Suspense>
      <img
        src={gallery1}
        alt="Children at Matruchhaya"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(0,0%,0%,0.75), hsla(0,0%,0%,0.6))" }} />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4 uppercase tracking-wide">
            Want to help us with your contribution? Contact us now
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Feel free to call or visit us. Your small contribution can bring a big smile on our children's face.
            Be a part of our family and support us.
          </p>
          <a href="#contact" className="btn-accent rounded-full text-lg inline-block">
            Contact Us
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTABanner;
