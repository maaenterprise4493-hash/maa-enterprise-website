import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ChevronsRight } from "lucide-react";
import productBackward from "@/assets/product-backward.png";
import productAirfoil from "@/assets/product-airfoil.png";
import productDidw from "@/assets/product-didw.png";
import productPressure from "@/assets/product-pressure-blower.png";
import productTubeAxial from "@/assets/product-tube-axial.png";
import productAirScrew from "@/assets/product-air-screw.jpg";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: "Our Products — MAA Enterprise Industrial Blowers & Fans" },
      { name: "description", content: "Explore our full range of industrial blowers, centrifugal fans, axial fans and custom impellers manufactured by MAA Enterprise." },
    ],
  }),
});

const products = [
  { img: productPressure, category: "Blowers", name: "Pressure Blowers", desc: "High-performance pressure blowers designed for industrial applications requiring high static pressure.", capacity: "100 to 180,000 m³/hr", pressure: "Up to 2000 mm of water gauge" },
  { img: productBackward, category: "Centrifugal Fans", name: "Backward Inclined Blade Fan", desc: "Backward inclined blade centrifugal fans offering high efficiency and reliability for medium to high pressure applications.", capacity: "600 to 800,000 m³/hr", pressure: "Up to 250 mm of water gauge" },
  { img: productDidw, category: "Centrifugal Fans", name: "DIDW (Double Inlet Double Width)", desc: "Double Inlet Double Width centrifugal fans providing high airflow with compact design for space-constrained installations.", capacity: "600 to 800,000 m³/hr", pressure: "Up to 250 mm of water gauge" },
  { img: productTubeAxial, category: "Axial Fans", name: "Tube Axial Fan", desc: "Tube axial fans available in cast aluminium and fabricated options, ideal for high flow rate and low pressure applications.", capacity: "850 to 800,000 m³/hr", pressure: "Up to 75 mm of water gauge" },
  { img: productAirfoil, category: "Custom Impeller", name: "Airfoil Blades Type Wheel", desc: "Heavy-duty airfoil blades type wheels designed for extremely high pressure and high capacity industrial applications.", capacity: "11,000 to 800,000 m³/hr", pressure: "Up to 1800 mm of water gauge" },
  { img: productAirScrew, category: "Axial Fans", name: "Air Screw Type Fan", desc: "Air screw type axial fans featuring a cast aluminum adjustable-pitch impeller, engineered for high-volume ventilation and air movement in industrial spaces with reliable long-duty performance.", capacity: "850 to 300,000 CFM", pressure: "Up to 70 mm of water gauge", wheelDia: "250 to 2000 mm" },
];

const productLinks = [
  "Centrifugal Fan",
  "Industrial Blower",
  "Axial Fan",
  "Spare Impeller",
  "Pressure Blower",
  "Blower Fan",
  "Industrial Air Blower",
  "Centrifugal Blower",
  "Air Blower",
  "Industrial Fan Manufacturers",
];

function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="text-white py-16 md:py-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm opacity-90 hover:opacity-100 mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">Our Products</h1>
          <p className="opacity-90 max-w-2xl">High-quality industrial blowers and fans designed for demanding applications across diverse industries.</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {products.map((p) => (
              <article key={p.name} className="bg-card border border-border rounded-xl overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all duration-300 flex flex-col">
                {p.name === "Air Screw Type Fan" ? (
                  <div className="p-4 pb-0">
                    <div className="aspect-square w-[78%] mx-auto overflow-hidden rounded-xl" style={{ background: "#7b9b7d" }}>
                      <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-contain" />
                    </div>
                  </div>
                ) : (
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-2">{p.category}</span>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{p.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
                  <div className="space-y-2 text-sm mb-6 pb-6 border-b border-border">
                    <div className="flex justify-between gap-3"><span className="text-muted-foreground">Capacity</span><span className="font-medium text-foreground text-right">{p.capacity}</span></div>
                    <div className="flex justify-between gap-3"><span className="text-muted-foreground">Static Pressure</span><span className="font-medium text-foreground text-right">{p.pressure}</span></div>
                    {"wheelDia" in p && p.wheelDia ? (
                      <div className="flex justify-between gap-3"><span className="text-muted-foreground">Wheel Dia</span><span className="font-medium text-foreground text-right">{p.wheelDia}</span></div>
                    ) : null}
                  </div>
                  <Link to="/" hash="contact" className="mt-auto inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-3 transition-all">
                    Enquire Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="text-white py-14 md:py-16" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-wide mb-3">OUR PRODUCTS</h2>
          <div className="relative h-[3px] w-40 bg-white/80 mb-8">
            <span className="absolute -top-[3px] left-8 h-[9px] w-[9px] rounded-full bg-accent" />
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {productLinks.map((label) => (
              <li key={label}>
                <Link to="/" hash="contact" className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity">
                  <ChevronsRight className="h-4 w-4 shrink-0" />
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
