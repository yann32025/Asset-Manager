import { Gift, Star, Trophy, ChevronRight, Sparkles } from "lucide-react";
import { useState } from "react";

const CADEAUX = [
  {
    nom: "Bon d'achat FNAC",
    points: 500,
    valeur: "20 €",
    icon: "🎮",
    dispo: true,
  },
  {
    nom: "Carte cadeau Amazon",
    points: 750,
    valeur: "30 €",
    icon: "📦",
    dispo: true,
  },
  {
    nom: "Abonnement Netflix 1 mois",
    points: 400,
    valeur: "15 €",
    icon: "🎬",
    dispo: false,
  },
  {
    nom: "Chèque vacances",
    points: 1500,
    valeur: "50 €",
    icon: "🏖️",
    dispo: true,
  },
  {
    nom: "Don à une association",
    points: 200,
    valeur: "10 €",
    icon: "❤️",
    dispo: true,
  },
  {
    nom: "Réduction frais bancaires",
    points: 300,
    valeur: "1 mois offert",
    icon: "🏦",
    dispo: true,
  },
];

export default function EspaceCadeaux() {
  const [points] = useState(320);
  const [claimed, setClaimed] = useState<number[]>([]);
  const [msg, setMsg] = useState("");

  function handleClaim(i: number, pts: number) {
    if (points < pts) {
      setMsg("Points insuffisants pour cette récompense.");
      setTimeout(() => setMsg(""), 3000);
      return;
    }
    setClaimed(c => [...c, i]);
    setMsg("🎉 Demande envoyée ! Votre récompense sera traitée sous peu.");
    setTimeout(() => setMsg(""), 4000);
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-lg text-gray-800">Espace Cadeaux</h2>

      {/* Points card */}
      <div
        className="rounded-2xl p-5 relative overflow-hidden shadow-lg"
        style={{ background: "linear-gradient(135deg, #6a1c6e, #9c27b0)" }}
      >
        <div className="absolute right-0 top-0 w-32 h-32 rounded-full opacity-10" style={{ background: "white", transform: "translate(30%, -30%)" }} />
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
            <Trophy size={24} className="text-yellow-300" />
          </div>
          <div>
            <p className="text-white/70 text-xs uppercase tracking-wider">Votre solde</p>
            <p className="text-white font-bold text-3xl">{points} pts</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 bg-white/10 rounded-xl p-2 text-center">
            <p className="text-white/60 text-xs">Statut</p>
            <p className="text-white font-bold text-sm">🥈 Argent</p>
          </div>
          <div className="flex-1 bg-white/10 rounded-xl p-2 text-center">
            <p className="text-white/60 text-xs">Prochain palier</p>
            <p className="text-white font-bold text-sm">🥇 Or — 500 pts</p>
          </div>
        </div>
        {/* Progress to next level */}
        <div className="mt-3">
          <div className="flex justify-between text-xs text-white/60 mb-1">
            <span>Progression vers Or</span>
            <span>{points}/500 pts</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-1.5">
            <div className="h-full rounded-full bg-yellow-400" style={{ width: `${Math.min((points / 500) * 100, 100)}%` }} />
          </div>
        </div>
      </div>

      {msg && (
        <div className="rounded-xl p-3 text-center text-sm font-medium" style={{ background: "#f0faf5", color: "#00915A" }}>
          {msg}
        </div>
      )}

      {/* How to earn */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={16} style={{ color: "#9c27b0" }} />
          <p className="font-bold text-gray-800 text-sm">Comment gagner des points ?</p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Paiement carte", pts: "+5 pts" },
            { label: "Virement effectué", pts: "+10 pts" },
            { label: "Parrainage", pts: "+100 pts" },
          ].map((e, i) => (
            <div key={i} className="rounded-xl p-2 text-center" style={{ background: "#f9f0ff" }}>
              <p className="font-bold text-xs" style={{ color: "#9c27b0" }}>{e.pts}</p>
              <p className="text-xs text-gray-500 mt-0.5">{e.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Catalogue */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="flex items-center gap-2 px-4 pt-4 pb-2">
          <Gift size={18} style={{ color: "#9c27b0" }} />
          <p className="font-bold text-gray-800">Catalogue récompenses</p>
        </div>
        {CADEAUX.map((c, i) => (
          <div key={i} className="flex items-center justify-between px-4 py-3 border-b border-gray-50 last:border-0">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{c.icon}</span>
              <div>
                <p className="font-semibold text-sm text-gray-800">{c.nom}</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <Star size={11} style={{ color: "#9c27b0" }} />
                  <p className="text-xs" style={{ color: "#9c27b0" }}>{c.points} points</p>
                  <span className="text-gray-300">·</span>
                  <p className="text-xs text-gray-500">Valeur {c.valeur}</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleClaim(i, c.points)}
              disabled={claimed.includes(i) || !c.dispo}
              className="text-xs font-bold px-3 py-1.5 rounded-full transition active:scale-95 flex-shrink-0"
              style={
                claimed.includes(i)
                  ? { background: "#f0faf5", color: "#00915A" }
                  : !c.dispo
                  ? { background: "#f5f5f5", color: "#aaa" }
                  : { background: "#f9f0ff", color: "#9c27b0" }
              }
            >
              {claimed.includes(i) ? "✓ Demandé" : !c.dispo ? "Indispo" : "Échanger"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
