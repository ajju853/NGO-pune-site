import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpeg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpg";
import gallery14 from "@/assets/gallery-14.jpg";
import gallery15 from "@/assets/gallery-15.jpg";
import gallery16 from "@/assets/gallery-16.jpg";
import gallery17 from "@/assets/gallery-17.jpg";

const images = [
  { src: gallery1, alt: "Children posing together at the ashram", span: "md:col-span-2 md:row-span-2" },
  { src: gallery2, alt: "Ganpati Bappa celebration - aarti", span: "" },
  { src: gallery3, alt: "Children during Ganpati celebration", span: "" },
  { src: gallery6, alt: "Children with Matruchhaya Balakashram banner", span: "md:col-span-2" },
  { src: gallery4, alt: "Ganpati visarjan ceremony", span: "" },
  { src: gallery5, alt: "Group celebration at the ashram", span: "" },
  { src: gallery11, alt: "Fort model made by children", span: "md:col-span-2" },
  { src: gallery12, alt: "Children with their fort model project", span: "" },
  { src: gallery14, alt: "Detailed fort model with Shivaji Maharaj", span: "" },
  { src: gallery16, alt: "Children having meal together", span: "md:col-span-2" },
  { src: gallery17, alt: "Children celebrating Shiv Jayanti", span: "" },
  { src: gallery7, alt: "Creative newspaper craft by children", span: "" },
  { src: gallery13, alt: "Children building fort with mud", span: "" },
  { src: gallery15, alt: "Children sculpting together", span: "" },
  { src: gallery8, alt: "School children visiting the ashram", span: "md:col-span-2" },
  { src: gallery9, alt: "Official meeting at the ashram office", span: "" },
  { src: gallery10, alt: "Children outside Matruchhaya Balakashram building", span: "" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section id="gallery" className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal variant="blur">
            <div className="text-center mb-16">
              <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">Gallery</p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
                Our Children's Journey
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our Children's Efforts and Workout help our NGO to grow more. Raise your helping hand towards us.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {images.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.03} variant="scaleUp" className={img.span}>
                <div
                  className="overflow-hidden rounded-2xl cursor-pointer h-full"
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 min-h-[200px]"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8 italic font-body">
            मातृछाया बालकाश्रम, दिघी, पुणे येथील बालकास एक दिवसाचा गणपती करून एक नवीन उपक्रम व पर्यावरणाचे हित जोपासण्यात आले.
          </p>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={32} />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:text-accent text-4xl font-bold px-3 py-1"
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length); }}
            >
              ‹
            </button>

            <motion.img
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:text-accent text-4xl font-bold px-3 py-1"
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length); }}
            >
              ›
            </button>

            <p className="absolute bottom-6 text-primary-foreground/60 text-sm">
              {lightbox + 1} / {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;
