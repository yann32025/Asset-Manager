import { useEffect, useRef, useState } from "react";

const ADS = [
  {
    title: "Crédit Immobilier",
    subtitle: "Réalisez votre projet maison avec CaixaBankNow",
    cta: "Simuler",
    gradient: "linear-gradient(135deg, #001f4d, #006BB6)",
    emoji: "🏠",
  },
  {
    title: "Assurance Vie",
    subtitle: "Préparez votre avenir avec nos solutions d'épargne",
    cta: "Découvrir",
    gradient: "linear-gradient(135deg, #003082, #009EE0)",
    emoji: "🛡️",
  },
  {
    title: "Offre Bienvenue",
    subtitle: "Ouvrez un Livret d'épargne et profitez d'avantages exclusifs",
    cta: "J'en profite",
    gradient: "linear-gradient(135deg, #b8420a, #e67e22)",
    emoji: "🎁",
  },
  {
    title: "Carte Premium",
    subtitle: "Accédez aux lounges d'aéroport & voyagez sans frais",
    cta: "En savoir +",
    gradient: "linear-gradient(135deg, #37003c, #6a1c6e)",
    emoji: "✈️",
  },
  {
    title: "Prêt Personnel",
    subtitle: "Financement rapide jusqu'à 75 000 € sans justificatif",
    cta: "Calculer",
    gradient: "linear-gradient(135deg, #005a8e, #009EE0)",
    emoji: "💶",
  },
];

export default function AdsCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function start() {
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % ADS.length);
    }, 3500);
  }

  useEffect(() => {
    start();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  function go(i: number) {
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrent(i);
    start();
  }

  const ad = ADS[current];

  return (
    <div className="px-4 pt-1 pb-2">
      <div
        className="rounded-2xl p-5 relative overflow-hidden shadow-lg transition-all duration-500"
        style={{ background: ad.gradient, minHeight: 130 }}
      >
        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full opacity-20"
          style={{ background: "rgba(255,255,255,0.3)" }} />
        <div className="absolute right-12 -top-4 w-16 h-16 rounded-full opacity-10"
          style={{ background: "white" }} />

        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Offre CaixaBankNow</p>
            <p className="text-white font-bold text-lg leading-snug mb-1">{ad.title}</p>
            <p className="text-white/80 text-xs mb-4 leading-relaxed">{ad.subtitle}</p>
            <button
              className="px-4 py-1.5 rounded-full text-xs font-bold transition active:scale-95"
              style={{ background: "rgba(255,255,255,0.25)", color: "white", border: "1px solid rgba(255,255,255,0.4)" }}
            >
              {ad.cta}
            </button>
          </div>
          <div className="text-5xl ml-4 flex-shrink-0">{ad.emoji}</div>
        </div>

        <div className="flex gap-1.5 mt-4">
          {ADS.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className="h-1.5 rounded-full transition-all"
              style={{ width: i === current ? 20 : 6, background: i === current ? "white" : "rgba(255,255,255,0.4)" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
