import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, Mail, Menu, X, ArrowRight, Factory, TrendingUp, Users, Award,
  ShieldCheck, Settings, Headphones, MapPin, Wind, Fan, Gauge,
  UtensilsCrossed, Pill, Building2, Shirt, FlaskConical, Hammer, TreePine, Mountain, Flame, Cog,
} from "lucide-react";
import maaLogo from "@/assets/maa-logo.jpg";

const categories = [
  {
    Icon: Factory,
    title: "Industrial Blower",
    desc: "We stand as the foremost manufacturer and exporter of superior-grade industrial blowers. Our cutting-edge blowers are exceptional mechanical devices, expertly engineered to propel air or gases with precision — even at angles diverging from the incoming flow.",
  },
  {
    Icon: Gauge,
    title: "Centrifugal Fan & Blower",
    desc: "Our centrifugal fans stand as iconic examples of precision engineering, specially designed to thrive in the demanding realm of high temperatures. With an unwavering commitment to performance, these fans excel within temperature ranges spanning 100°C to 450°C.",
  },
  {
    Icon: Fan,
    title: "Axial Fan",
    desc: "Our Tube Axial Fan stands as a testament to engineering brilliance, boasting a harmonious blend of high flow rates and low pressure capabilities. Designed to champion ventilation, these fans emerge as true workhorses of air movement.",
  },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "MAA Enterprise — Industrial Blowers & Fans Manufacturer" },
      { name: "description", content: "Leading manufacturer and supplier of high-quality industrial blowers, centrifugal fans, and axial fans in Ahmedabad, Gujarat, India." },
    ],
  }),
});


const stats = [
  { icon: Factory, value: "5+", label: "Years Experience" },
  { icon: TrendingUp, value: "100+", label: "Projects Completed" },
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Award, value: "10+", label: "Applications" },
];

const whyUs = [
  { icon: ShieldCheck, title: "Premium Quality", desc: "Manufactured with high-grade materials ensuring durability and long service life." },
  { icon: Settings, title: "Custom Solutions", desc: "Tailored designs to meet specific industrial requirements and applications." },
  { icon: Headphones, title: "Expert Support", desc: "Dedicated technical support and after-sales service for all our products." },
];

const industries = [
  { name: "Food Industries", Icon: UtensilsCrossed },
  { name: "Pharmaceutical", Icon: Pill },
  { name: "Cement", Icon: Building2 },
  { name: "Textile", Icon: Shirt },
  { name: "Chemical", Icon: FlaskConical },
  { name: "Steel & Iron", Icon: Factory },
  { name: "Ceramics", Icon: Building2 },
  { name: "Wood Working", Icon: TreePine },
  { name: "Coal", Icon: Mountain },
  { name: "Foundry", Icon: Hammer },
  { name: "Plastics", Icon: Cog },
  { name: "Boilers", Icon: Flame },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Top contact bar */}
      <div className="bg-brand-blue-deep text-white text-xs sm:text-sm">
        <div className="container mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <a href="tel:7043236680" className="flex items-center gap-1.5 hover:opacity-80">
              <Phone className="h-3.5 w-3.5" /> 7043236680
            </a>
            <span className="opacity-40">|</span>
            <a href="tel:9376132724" className="flex items-center gap-1.5 hover:opacity-80">
              <Phone className="h-3.5 w-3.5" /> 9376132724
            </a>
          </div>
          <a href="mailto:maaenterprise4493@gmail.com" className="flex items-center gap-1.5 hover:opacity-80">
            <Mail className="h-3.5 w-3.5" /> maaenterprise4493@gmail.com
          </a>
        </div>
      </div>

      {/* Nav */}
      <header className="bg-white border-b border-border sticky top-0 z-40 shadow-[var(--shadow-soft)]">
        <div className="container mx-auto px-4 flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-2">
            <img src={maaLogo} alt="MAA Enterprise" className="h-12 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <Link to="/products" className="text-foreground hover:text-primary transition-colors">Products</Link>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About Us</a>
            <a href="#contact" className="bg-primary hover:bg-accent transition-colors text-primary-foreground px-5 py-2.5 rounded-md font-semibold">
              Contact Us
            </a>
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-foreground" aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border px-4 py-3 flex flex-col gap-3 text-sm font-medium bg-white">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
            <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-semibold text-center">Contact Us</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative text-white py-24 md:py-32" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            MAA ENTERPRISE
          </h1>
          <p className="text-xl md:text-2xl font-medium opacity-95 mb-6">
            Industrial Blowers &amp; Fans Manufacturer
          </p>
          <p className="text-base md:text-lg opacity-85 max-w-2xl mx-auto mb-10 leading-relaxed">
            Leading manufacturer and supplier of high-quality industrial blowers, centrifugal fans, and axial fans in Ahmedabad, Gujarat, India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-white/90 transition-colors px-7 py-3.5 rounded-md font-semibold">
              View Our Products <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 border-2 border-white/80 hover:bg-white/10 transition-colors px-7 py-3.5 rounded-md font-semibold">
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted py-14">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon className="h-10 w-10 mx-auto mb-3 text-primary" strokeWidth={2} />
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground">{value}</div>
              <div className="text-sm text-muted-foreground mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Product categories overview */}
      <section id="products" className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">What We Manufacture</h2>
            <p className="text-muted-foreground">A complete range of air-movement equipment engineered for performance and reliability.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map(({ Icon, title, desc }) => (
              <article key={title} className="flex flex-col">
                <div className="bg-muted rounded-lg px-6 py-10 flex flex-col items-center justify-between min-h-[320px] mb-6">
                  <h3 className="font-display text-lg md:text-xl font-bold text-foreground uppercase tracking-wide text-center mb-6">{title}</h3>
                  <Icon className="h-28 w-28 text-primary" strokeWidth={1.4} />
                </div>
                <p className="text-base text-foreground/80 leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section id="about" className="py-20 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Why Choose MAA ENTERPRISE?</h2>
            <p className="text-muted-foreground">Built on quality, customisation and committed service.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card rounded-xl p-8 text-center shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-shadow">
                <div className="h-16 w-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Industries We Serve</h2>
            <p className="text-muted-foreground">Our products are trusted across diverse industrial sectors</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {industries.map(({ name, Icon }) => (
              <div key={name} className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary hover:shadow-[var(--shadow-soft)] transition-all">
                <Icon className="h-9 w-9 mx-auto mb-3 text-primary" />
                <div className="text-sm font-semibold text-foreground">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-24 text-white" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto mb-10">
            Contact us today for a quote or to discuss your industrial blower requirements.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10 text-left">
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-5">
              <Phone className="h-6 w-6 mb-3 opacity-90" />
              <div className="text-xs uppercase tracking-wider opacity-75 mb-1">Phone</div>
              <a href="tel:7043236680" className="block font-semibold hover:opacity-90">7043236680</a>
              <a href="tel:9376132724" className="block font-semibold hover:opacity-90">9376132724</a>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-5">
              <Mail className="h-6 w-6 mb-3 opacity-90" />
              <div className="text-xs uppercase tracking-wider opacity-75 mb-1">Email</div>
              <a href="mailto:maaenterprise4493@gmail.com" className="font-semibold break-all hover:opacity-90">maaenterprise4493@gmail.com</a>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-5">
              <MapPin className="h-6 w-6 mb-3 opacity-90" />
              <div className="text-xs uppercase tracking-wider opacity-75 mb-1">Location</div>
              <div className="font-semibold">Ahmedabad, Gujarat, India</div>
            </div>
          </div>
          <a href="mailto:maaenterprise4493@gmail.com" className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 transition-colors px-8 py-3.5 rounded-md font-semibold">
            Contact Us Now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-blue-deep text-white/80">
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={maaLogo} alt="MAA Enterprise" className="h-10 w-auto bg-white rounded p-1" />
            <div>
              <div className="font-display font-bold text-white">MAA Enterprise</div>
              <div className="text-xs opacity-75">Industrial Blowers &amp; Fans Manufacturer</div>
            </div>
          </div>
          <div className="text-xs text-white/60">© {new Date().getFullYear()} MAA Enterprise. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
