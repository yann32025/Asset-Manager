import { Shield, Zap, Star, Lock, TrendingUp, Award } from "lucide-react";

const MESSAGES = [
  {
    icon: <Shield size={22} />,
    title: "Sécurité renforcée",
    desc: "Authentification forte, détection fraude en temps réel et chiffrement de bout en bout.",
    color: "#00915A",
    bg: "linear-gradient(135deg, #e8f5ee, #f0faf5)",
    border: "#c8e6d4",
  },
  {
    icon: <Zap size={22} />,
    title: "Interface intuitive",
    desc: "Navigation simplifiée, accès rapide à vos comptes et opérations en quelques secondes.",
    color: "#1565c0",
    bg: "linear-gradient(135deg, #e3f2fd, #f0f4ff)",
    border: "#bbdefb",
  },
  {
    icon: <Award size={22} />,
    title: "Expertise reconnue",
    desc: "Plus de 150 ans d'expertise bancaire au service de votre réussite financière.",
    color: "#6a1c6e",
    bg: "linear-gradient(135deg, #f3e5f5, #fce4ec)",
    border: "#e1bee7",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Investissez malin",
    desc: "Nos conseillers vous accompagnent dans la construction de votre patrimoine.",
    color: "#e67e22",
    bg: "linear-gradient(135deg, #fff8e1, #fff3e0)",
    border: "#ffe082",
  },
];

export default function MarketingMessages() {
  return (
    <div className="px-4 pb-2">
      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Nos engagements</p>
      <div className="grid grid-cols-2 gap-3">
        {MESSAGES.map((m, i) => (
          <div
            key={i}
            className="rounded-2xl p-4 flex flex-col gap-2 border"
            style={{ background: m.bg, borderColor: m.border }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "white", color: m.color, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
              {m.icon}
            </div>
            <p className="font-bold text-sm text-gray-800 leading-tight">{m.title}</p>
            <p className="text-xs text-gray-500 leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
