import { useEffect, useRef } from "react";
import { SiInstagram } from "react-icons/si";
import { MapPin, Star, Tv } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/cozinheiraquequel";

const visualStyles = {
  hero:
    "radial-gradient(circle at 50% 16%, rgba(245, 181, 82, 0.28), transparent 24rem), linear-gradient(140deg, rgba(80, 39, 18, 0.8), rgba(15, 11, 8, 0.9)), linear-gradient(90deg, hsl(28 58% 38%), hsl(122 36% 28%))",
  table:
    "radial-gradient(circle at 30% 30%, hsl(43 88% 62%), transparent 9rem), radial-gradient(circle at 70% 64%, hsl(118 35% 31%), transparent 10rem), linear-gradient(135deg, hsl(25 69% 43%), hsl(20 31% 18%))",
  drinks:
    "radial-gradient(circle at 62% 22%, hsl(42 89% 66%), transparent 7rem), radial-gradient(circle at 32% 74%, hsl(12 72% 45%), transparent 7rem), linear-gradient(145deg, hsl(119 35% 26%), hsl(25 43% 20%))",
  chef:
    "radial-gradient(circle at 50% 24%, hsl(42 84% 65%), transparent 8rem), linear-gradient(160deg, hsl(24 67% 44%), hsl(20 24% 17%))",
  award:
    "radial-gradient(circle at 50% 40%, hsl(42 92% 62%), transparent 9rem), linear-gradient(135deg, hsl(120 36% 31%), hsl(25 64% 35%))",
};

function VisualPanel({
  className = "",
  label,
  styleName,
  testId,
}: {
  className?: string;
  label: string;
  styleName: keyof typeof visualStyles;
  testId: string;
}) {
  return (
    <div
      aria-label={label}
      className={`relative overflow-hidden ${className}`}
      data-testid={testId}
      role="img"
      style={{ background: visualStyles[styleName] }}
    >
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(90deg,transparent_0_18%,rgba(255,255,255,.2)_18%_19%,transparent_19%_38%,rgba(255,255,255,.14)_38%_39%,transparent_39%)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />
    </div>
  );
}

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-up");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background" ref={sectionRef}>

      {/* HERO */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(160deg, hsl(25 55% 18%) 0%, hsl(20 40% 12%) 100%)" }}
      >
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <VisualPanel
            label="Restaurante Quequel"
            styleName="hero"
            className="w-full h-full opacity-70"
            testId="img-hero"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)" }} />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          {/* TV Badge */}
          <div
            className="inline-flex items-center gap-2 bg-yellow-500/90 text-yellow-950 font-semibold text-sm px-4 py-2 rounded-full mb-8 shadow-lg"
            data-testid="badge-tv"
          >
            <Tv size={15} />
            Vencedora do Panela de Bairro — TV Globo
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
            data-testid="text-title"
          >
            Restaurante
            <span className="block" style={{ color: "hsl(42 85% 62%)" }}>Quequel</span>
          </h1>

          <div className="flex items-center justify-center gap-2 text-white/70 text-base mb-10" data-testid="text-location">
            <MapPin size={16} />
            <span>Misericórdia — Itaparica, BA</span>
          </div>

          <p className="text-white/85 text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
            Comida caseira com amor, sabor de verdade e aquele calor de bairro que você nunca esquece.
          </p>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-instagram-hero"
            className="inline-flex items-center gap-3 text-white font-bold text-lg px-10 py-5 rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
            style={{ background: "linear-gradient(135deg, #e1306c, #833ab4, #fd1d1d)" }}
          >
            <SiInstagram size={22} />
            Fale comigo no Instagram
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs animate-bounce">
          <div className="w-px h-8 bg-white/30" />
          <span>ver mais</span>
        </div>
      </section>

      {/* TV RECOGNITION BANNER */}
      <section
        className="py-14 px-6 text-center fade-up opacity-0 translate-y-8 transition-all duration-700"
        style={{ background: "hsl(120 35% 32%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center gap-1 mb-4">
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-white text-xl md:text-2xl font-semibold leading-snug" data-testid="text-award">
            "Vencedora do Panela de Bairro de verão" — TV Globo
          </p>
          <p className="text-white/70 text-base mt-3">
            O talento da Quequel reconhecido na televisão aberta brasileira
          </p>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2
          className="text-center text-3xl md:text-4xl font-bold mb-4 fade-up opacity-0 translate-y-8 transition-all duration-700"
          style={{ fontFamily: "'Playfair Display', serif", color: "hsl(25 70% 42%)" }}
          data-testid="text-gallery-title"
        >
          Na nossa mesa
        </h2>
        <p className="text-center text-muted-foreground mb-12 fade-up opacity-0 translate-y-8 transition-all duration-700 delay-100">
          Pratos feitos com carinho, ingredientes frescos e muito amor baiano
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 fade-up opacity-0 translate-y-8 transition-all duration-700 delay-150">
            <VisualPanel
              label="Mesa farta do Restaurante Quequel"
              styleName="table"
              className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-lg"
              testId="img-food-table"
            />
          </div>
          <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-200">
            <VisualPanel
              label="Panela de barro e bebidas"
              styleName="drinks"
              className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-lg"
              testId="img-drinks"
            />
          </div>
          <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 delay-250">
            <VisualPanel
              label="Chef Quequel com cliente"
              styleName="chef"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
              testId="img-chef-selfie"
            />
          </div>
          <div className="md:col-span-2 fade-up opacity-0 translate-y-8 transition-all duration-700 delay-300">
            <VisualPanel
              label="Prêmio Panela de Bairro"
              styleName="award"
              className="w-full h-64 object-cover object-center rounded-2xl shadow-lg"
              testId="img-award"
            />
          </div>
        </div>
      </section>

      {/* ABOUT THE CHEF */}
      <section
        className="py-20 px-6"
        style={{ background: "hsl(35 25% 94%)" }}
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-2/5 fade-up opacity-0 translate-y-8 transition-all duration-700">
            <VisualPanel
              label="Chef Quequel"
              styleName="chef"
              className="w-full max-w-xs mx-auto rounded-3xl shadow-xl object-cover aspect-[3/4]"
              testId="img-chef-portrait"
            />
          </div>
          <div className="flex-1 fade-up opacity-0 translate-y-8 transition-all duration-700 delay-100">
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "hsl(25 70% 42%)" }}>
              Quem sou eu
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mt-2 mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: "hsl(20 25% 15%)" }}
              data-testid="text-chef-title"
            >
              A Cozinheira Quequel
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              Nascida e criada em Misericórdia, Itaparica, a Quequel carrega nas panelas a alma do bairro.
              Cozinha com a sabedoria passada de geração em geração e o amor que só quem é apaixonado pela culinária baiana tem.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed mb-8">
              Reconhecida pelo programa <strong>Panela de Bairro da TV Globo</strong>, o Bar e Restaurante da Quequel
              é um pedacinho de Itaparica que você precisa conhecer — e provar.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-instagram-about"
              className="inline-flex items-center gap-3 text-white font-semibold text-base px-8 py-4 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
              style={{ background: "hsl(25 70% 42%)" }}
            >
              <SiInstagram size={18} />
              Seguir no Instagram
            </a>
          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2
          className="text-center text-3xl font-bold mb-12 fade-up opacity-0 translate-y-8 transition-all duration-700"
          style={{ fontFamily: "'Playfair Display', serif", color: "hsl(25 70% 42%)" }}
          data-testid="text-info-title"
        >
          O que te espera aqui
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "🍳",
              title: "Comida Caseira",
              desc: "Pratos feitos na hora com ingredientes frescos e muito amor baiano. Do feijão ao peixe, tudo temperado com capricho.",
              id: "card-comida"
            },
            {
              icon: "🏆",
              title: "Premiada na TV",
              desc: "Vencedora do Panela de Bairro de verão na TV Globo — um reconhecimento que confirma o que os clientes já sabiam.",
              id: "card-premiada"
            },
            {
              icon: "🌴",
              title: "Em Itaparica",
              desc: "Localizada em Misericórdia, Itaparica, um lugar cheio de história, cultura e sabor. O refúgio perfeito para quem visita a ilha.",
              id: "card-local"
            }
          ].map((card, i) => (
            <div
              key={card.id}
              data-testid={card.id}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border fade-up opacity-0 translate-y-8 transition-all duration-700 text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-5xl mb-4">{card.icon}</div>
              <h3 className="font-bold text-lg mb-3 text-foreground">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, hsl(25 70% 38%) 0%, hsl(20 60% 28%) 100%)" }}
      >
        <div className="max-w-2xl mx-auto fade-up opacity-0 translate-y-8 transition-all duration-700">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
            data-testid="text-cta-title"
          >
            Vem comer aqui!
          </h2>
          <p className="text-white/80 text-lg mb-10 leading-relaxed">
            Manda uma mensagem no Instagram para reservar sua mesa, tirar dúvidas ou só bater um papo.
            A Quequel te responde com o mesmo carinho que coloca na comida.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-instagram-cta"
            className="inline-flex items-center gap-3 font-bold text-xl px-12 py-6 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
            style={{ background: "linear-gradient(135deg, #e1306c, #833ab4, #fd1d1d)", color: "white" }}
          >
            <SiInstagram size={26} />
            @cozinheiraquequel
          </a>
          <p className="text-white/50 text-sm mt-6">Clique para abrir o Instagram</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 text-center" style={{ background: "hsl(20 25% 12%)" }}>
        <p className="text-white/40 text-sm" data-testid="text-footer">
          Bar e Restaurante da Quequel — Misericórdia, Itaparica, BA
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/40 text-sm hover:text-white/70 transition-colors mt-1 inline-block"
          data-testid="link-footer-instagram"
        >
          @cozinheiraquequel
        </a>
      </footer>

      <style>{`
        .fade-up.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}
