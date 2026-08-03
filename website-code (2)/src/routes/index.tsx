import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, Mail, Menu, X, ArrowRight, Factory, TrendingUp, Users, Award,
  ShieldCheck, Settings, Headphones, MapPin,
  UtensilsCrossed, Pill, Building2, Shirt, FlaskConical, Hammer, TreePine, Mountain, Flame, Cog,
} from "lucide-react";
import maaLogo from "@/assets/maa-logo.jpg";
import heroCentrifugal from "@/assets/hero-centrifugal.jpg";
import catIndustrial from "@/assets/cat-industrial.png";
import catAxial from "@/assets/cat-axial.png";

function CentrifugalAnim() {
  return (
    <svg viewBox="0 0 270 200" className="h-44 w-64" aria-label="Boiler with centrifugal blower and chimney">
      <rect x="0" y="180" width="270" height="4" fill="#1f2a44" />
      {/* Boiler drum (left) */}
      <rect x="8" y="80" width="72" height="95" rx="8" fill="#e6edf7" stroke="#1e3a8a" strokeWidth="3" />
      <circle cx="22" cy="98" r="3" fill="#dc2626" />
      <rect x="30" y="95" width="42" height="5" rx="2" fill="#1e3a8a" opacity="0.2" />
      <rect x="20" y="145" width="48" height="22" rx="3" fill="#0b1220" />
      <g style={{ transformOrigin: "44px 156px", animation: "pulse 1.2s ease-in-out infinite" }}>
        <path d="M28 165 Q34 148 42 154 Q50 144 58 165 Z" fill="#f59e0b" />
        <path d="M34 165 Q40 154 44 158 Q48 150 50 165 Z" fill="#dc2626" />
      </g>
      {/* Suction duct: boiler -> blower inlet (eye) */}
      <rect x="80" y="112" width="30" height="14" fill="#1e3a8a" opacity="0.3" />
      <g style={{ animation: "fade-in 1.2s ease-in-out infinite" }}>
        <path d="M84 119 L102 119 M98 115 L102 119 L98 123" stroke="#2563eb" strokeWidth="2" fill="none" />
      </g>

      {/* Centrifugal scroll — volute housing with a straight tangential discharge */}
      <path
        d="M150 84 C126 84 108 101 108 124 C108 148 126 164 150 164 C164 164 176 158 184 148 L234 148 L234 132 L181 132 L181 116 C181 97 168 84 150 84 Z"
        fill="#2563eb"
        stroke="#1e3a8a"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Inlet eye (front plate) */}
      <circle cx="150" cy="120" r="14" fill="#e6edf7" stroke="#1e3a8a" strokeWidth="2.5" />
      {/* Impeller blades */}
      <g style={{ transformOrigin: "150px 120px", animation: "spin 1.2s linear infinite" }}>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <path key={a}
                d="M150 120 Q158 109 152 99"
                stroke="#1e3a8a" strokeWidth="2.2" fill="none" strokeLinecap="round"
                transform={`rotate(${a} 150 120)`} />
        ))}
        <circle cx="150" cy="120" r="4" fill="#1e3a8a" />
      </g>
      {/* Base frame */}
      <rect x="116" y="168" width="78" height="10" rx="1" fill="#1e3a8a" />

      {/* Discharge flow: blower -> bottom of chimney */}
      <g style={{ animation: "fade-in 1.2s ease-in-out infinite" }}>
        <path d="M188 140 L222 140 M216 135 L222 140 L216 145" stroke="#e6edf7" strokeWidth="2.5" fill="none" />
      </g>
      {/* Chimney (right) */}
      <rect x="234" y="30" width="20" height="150" fill="#94a3b8" stroke="#1e3a8a" strokeWidth="2" />
      <rect x="230" y="26" width="28" height="6" fill="#1e3a8a" />
      <g style={{ animation: "fade-in 2.4s ease-in-out infinite" }}>
        <circle cx="244" cy="18" r="5" fill="#cbd5e1" opacity="0.85" />
        <circle cx="252" cy="10" r="4" fill="#cbd5e1" opacity="0.65" />
        <circle cx="238" cy="8" r="3.5" fill="#cbd5e1" opacity="0.55" />
        <circle cx="248" cy="3" r="3" fill="#cbd5e1" opacity="0.45" />
      </g>
    </svg>
  );
}


const categories = [
  {
    img: catIndustrial,
    Anim: null as null | (() => React.ReactElement),
    title: "Industrial Blower",
    desc: "High-performance industrial blowers built to move air and gases with precision — reliable, efficient and engineered for demanding process environments.",
  },
  {
    img: null,
    Anim: CentrifugalAnim,
    title: "Centrifugal Fan & Blower",
    desc: "Precision-engineered centrifugal fans designed to run reliably at sustained high temperatures — from 100°C up to 450°C — making them the trusted choice for industrial boilers, thermic fluid heaters, hot air generators and heavy process plants. Rugged impellers, balanced rotors and heat-resistant construction deliver steady draft, high static pressure and long service life, even under continuous 24×7 operation.",
  },
  {
    img: catAxial,
    Anim: null as null | (() => React.ReactElement),
    title: "Axial Fan",
    desc: "Tube axial fans delivering high air flow at low pressure — the go-to workhorse for ventilation and general air movement.",
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
  { icon: Award, value: "10+", label: "Areas of Application" },
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
          <a href="mailto:info@maaenterpriseco.com" className="flex items-center gap-1.5 hover:opacity-80">
            <Mail className="h-3.5 w-3.5" /> info@maaenterpriseco.com
          </a>
        </div>
      </div>

      {/* Nav */}
      <header className="bg-white border-b border-border sticky top-0 z-40 shadow-[var(--shadow-soft)]">
        <div className="container mx-auto px-4 flex items-center justify-between h-28 md:h-36">
          <a href="#home" className="flex items-center gap-2">
            <img src={maaLogo} alt="MAA Enterprise" className="h-20 md:h-28 w-auto" />
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
      <section id="home" className="relative text-white py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCentrifugal} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.28 0.14 260 / 0.85) 0%, oklch(0.32 0.16 260 / 0.7) 100%)" }} />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <p className="text-lg md:text-2xl opacity-95 max-w-3xl mx-auto mb-10 leading-relaxed font-medium drop-shadow">
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
          <div className="grid md:grid-cols-3 gap-8 max-w-2xl md:max-w-none mx-auto">
            {categories.map(({ img, Anim, title, desc }) => (
              <article key={title} className="flex flex-col">
                <div className="bg-muted rounded-lg px-6 py-12 flex flex-col items-center min-h-[360px] mb-5">
                  <h3 className="font-display text-xl font-bold text-foreground uppercase tracking-wide text-center mb-8">{title}</h3>
                  {Anim ? <Anim /> : img ? (
                    <img src={img} alt={title} loading="lazy" width={512} height={512} className="h-48 w-48 object-contain" />
                  ) : null}
                </div>
                <p className="text-base text-foreground/80 leading-relaxed text-justify">{desc}</p>
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
              <a href="mailto:info@maaenterpriseco.com" className="font-semibold break-all hover:opacity-90">info@maaenterpriseco.com</a>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-5">
              <MapPin className="h-6 w-6 mb-3 opacity-90" />
              <div className="text-xs uppercase tracking-wider opacity-75 mb-1">Location</div>
              <div className="font-semibold">Ahmedabad, Gujarat, India</div>
            </div>
          </div>
          <a href="mailto:info@maaenterpriseco.com" className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 transition-colors px-8 py-3.5 rounded-md font-semibold">
            Contact Us Now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-blue-deep text-white/80">
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={maaLogo} alt="MAA Enterprise" className="h-16 w-auto bg-white rounded p-1" />
            <div>
              <div className="font-display font-bold text-white">MAA ENTERPRISE</div>
              <div className="text-xs opacity-75">Industrial Blowers &amp; Fans Manufacturer</div>
            </div>
          </div>
          <div className="text-xs text-white/60">© {new Date().getFullYear()} MAA Enterprise. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
