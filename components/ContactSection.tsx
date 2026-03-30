import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import ScrollReveal from "@/components/ScrollReveal";

const contactInfo = [
  { icon: Phone, title: "Give Us A Call", detail: "9421070591 / 9673852955" },
  { icon: Mail, title: "Send Us A Message", detail: "Matruchhayabalkashram@gmail.com" },
  { icon: MapPin, title: "Office Location", detail: "Matruchhaya – Plot No.3/17, Gaikwadnagar, Dighi, Pune" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in Name, Email and Message.");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("contact_submissions").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim() || null,
      message: form.message.trim(),
    });
    setLoading(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
    } else {
      toast.success("Message sent successfully! We will get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <section id="contact" className="section-padding" style={{ background: "var(--gradient-green)" }}>
      <div className="max-w-7xl mx-auto">
        <ScrollReveal variant="blur">
          <div className="text-center mb-16">
            <p className="text-primary-foreground/70 font-semibold uppercase tracking-widest text-sm mb-3">
              Get In Touch
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Contact Us
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.12} variant="slideUp">
              <div className="text-center bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8">
                <c.icon className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="font-heading text-lg font-bold text-primary-foreground mb-2">{c.title}</h3>
                <p className="text-primary-foreground/80 text-sm">{c.detail}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>




        <ScrollReveal variant="fadeUp">
          <div className="bg-card rounded-2xl p-8 md:p-12 max-w-2xl mx-auto" style={{ boxShadow: "var(--shadow-elevated)" }}>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">Send a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-accent w-full rounded-full text-lg disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
