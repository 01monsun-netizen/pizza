import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, CalendarDays, Clock, MapPin, ChevronRight, Flame, Leaf, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

function HeroSection() {
  return (
    <section className="relative overflow-hidden" data-testid="hero-section">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/15428035/pexels-photo-15428035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Pizza artigianale"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D2A26]/90 via-[#2D2A26]/70 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-[#F4A261] font-medium text-sm uppercase tracking-[0.2em] mb-4"
          >
            Dal cuore di Montelupone
          </motion.p>
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6"
          >
            La vera pizza
            <br />
            <span className="text-[#E04F00]">del Borgo</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg md:text-xl text-[#D6D3D1] leading-relaxed mb-10 max-w-lg"
          >
            Ingredienti freschi, tradizione marchigiana e passione dal primo impasto.
            Ogni pizza racconta una storia.
          </motion.p>
          <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
            <a href="tel:0733228324" data-testid="hero-call-button">
              <Button className="rounded-full px-8 py-4 h-14 bg-[#E04F00] hover:bg-[#C24100] text-white font-semibold text-lg shadow-lg shadow-orange-900/30 transition-transform hover:scale-105 active:scale-95">
                <Phone size={20} className="mr-2" />
                Chiamaci - 0733 228324
              </Button>
            </a>
            <Link to="/menu" data-testid="hero-menu-button">
              <Button
                variant="outline"
                className="rounded-full px-8 py-4 h-14 border-2 border-white/30 text-white hover:bg-white/10 font-semibold text-lg backdrop-blur-sm"
              >
                Scopri il Menu
                <ChevronRight size={18} className="ml-1" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: <Flame className="text-[#E04F00]" size={32} />,
      title: "Cottura che esalta",
      desc: "Cotta alla perfezione per una crosta croccante e un sapore unico che esalta ogni ingrediente.",
    },
    {
      icon: <Leaf className="text-[#3A5A40]" size={32} />,
      title: "Ingredienti freschi",
      desc: "Solo prodotti locali e di stagione, dalle campagne marchigiane alla tua pizza.",
    },
    {
      icon: <Star className="text-[#F4A261]" size={32} />,
      title: "Passione per la pizza",
      desc: "Ricette ispirate alla storia di Montelupone, con nomi che raccontano il nostro territorio.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FDFBF7]" data-testid="features-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 border border-[#E7E5E4] hover:shadow-md transition-shadow duration-300"
              data-testid={`feature-card-${i}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#F5F0E6] flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="font-serif text-xl font-medium text-[#2D2A26] mb-3">
                {f.title}
              </h3>
              <p className="text-[#78716C] text-base leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PopularPizzas({ menuData }) {
  const popular = [
    "Margherita",
    "Diavola",
    "Capricciosa",
    "Borgo",
    "Carbonaro",
    "Mediterranea"
  ];

  const allItems = menuData?.categories?.flatMap((c) => c.items) || [];
  const popularItems = popular.map((name) =>
    allItems.find((item) => item.name === name)
  ).filter(Boolean);

  if (popularItems.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-[#F5F0E6]" data-testid="popular-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#E04F00] font-medium text-sm uppercase tracking-[0.2em] mb-2">
            Le piu amate
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#2D2A26]">
            Le nostre pizze popolari
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularItems.map((pizza, i) => (
            <motion.div
              key={pizza.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-[#E7E5E4] hover:shadow-lg transition-all duration-300 group cursor-pointer"
              data-testid={`popular-pizza-${pizza.name.toLowerCase()}`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-serif text-xl font-medium text-[#2D2A26] group-hover:text-[#E04F00] transition-colors">
                  {pizza.name}
                </h3>
                <span className="text-[#E04F00] font-semibold text-lg whitespace-nowrap ml-4">
                  € {pizza.price.toFixed(2)}
                </span>
              </div>
              <p className="text-[#78716C] text-base leading-relaxed mb-4">
                {pizza.ingredients.join(", ")}
              </p>
              <Link to="/menu" className="inline-flex items-center text-[#E04F00] font-medium text-sm group-hover:gap-2 transition-all">
                Vedi nel menu <ChevronRight size={16} className="ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/menu" data-testid="view-full-menu-button">
            <Button variant="outline" className="rounded-full px-8 py-4 h-14 border-2 border-[#E7E5E4] hover:border-[#E04F00] text-[#2D2A26] font-semibold text-lg">
              Vedi il Menu Completo
              <ChevronRight size={18} className="ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function InfoBanner({ info }) {
  return (
    <section className="py-16 md:py-24 bg-[#FDFBF7]" data-testid="info-banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#E04F00] font-medium text-sm uppercase tracking-[0.2em] mb-2">
              Vieni a trovarci
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#2D2A26] mb-6">
              D'estate in piazza, d'inverno da asporto
            </h2>
            <p className="text-[#78716C] text-lg leading-relaxed mb-8">
              Da giugno ad agosto, la piazza di Montelupone si trasforma nel nostro salotto a cielo aperto
              con circa 120 posti. D'inverno, puoi ordinare la tua pizza preferita da asporto.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[#2D2A26]">
                <div className="w-12 h-12 rounded-xl bg-[#F5F0E6] flex items-center justify-center shrink-0">
                  <Clock size={22} className="text-[#E04F00]" />
                </div>
                <div>
                  <p className="font-medium text-base">Orari di apertura</p>
                  <p className="text-[#78716C] text-base">Mar-Ven 16:30-20:15 | Sab-Dom 16:30-21:15</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-[#2D2A26]">
                <div className="w-12 h-12 rounded-xl bg-[#F5F0E6] flex items-center justify-center shrink-0">
                  <MapPin size={22} className="text-[#E04F00]" />
                </div>
                <div>
                  <p className="font-medium text-base">Dove siamo</p>
                  <p className="text-[#78716C] text-base">Piazza del Comune 2, Montelupone (MC) 62010</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-[#2D2A26]">
                <div className="w-12 h-12 rounded-xl bg-[#F5F0E6] flex items-center justify-center shrink-0">
                  <CalendarDays size={22} className="text-[#E04F00]" />
                </div>
                <div>
                  <p className="font-medium text-base">Chiuso il Lunedi</p>
                  <p className="text-[#78716C] text-base">Estate: tavoli all'aperto in piazza (~120 posti)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1626137071802-2689ccffd089?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwyfHxhdXRoZW50aWMlMjBpdGFsaWFuJTIwcGl6emElMjBmcmVzaCUyMGluZ3JlZGllbnRzJTIwY2xvc2UlMjB1cHxlbnwwfHx8fDE3NzIwMzcxNzd8MA&ixlib=rb-4.1.0&q=85"
              alt="Pizza ingredienti freschi"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-[#E04F00]" data-testid="cta-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
            Hai fame? Chiamaci!
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Scegli dal nostro menu e chiamaci per ordinare da asporto o prenotare un tavolo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:0733228324" data-testid="cta-call-button">
              <Button className="rounded-full px-8 py-4 h-14 bg-white text-[#E04F00] hover:bg-[#F5F0E6] font-semibold text-lg shadow-lg transition-transform hover:scale-105 active:scale-95">
                <Phone size={20} className="mr-2" />
                Chiama 0733 228324
              </Button>
            </a>
            <Link to="/menu" data-testid="cta-menu-button">
              <Button
                variant="outline"
                className="rounded-full px-8 py-4 h-14 border-2 border-white/40 text-white hover:bg-white/10 font-semibold text-lg"
              >
                Vedi il Menu
                <ChevronRight size={18} className="ml-1" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage({ menuData, info }) {
  return (
    <main data-testid="home-page">
      <HeroSection />
      <FeaturesSection />
      <PopularPizzas menuData={menuData} />
      <InfoBanner info={info} />
      <CTASection />
    </main>
  );
}