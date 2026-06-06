import { TrendingUp, PiggyBank, BarChart2, Lock } from "lucide-react";

export default function EpargnePlacements() {
  const produits = [
    { name: "Livret A", solde: "0,00 €", taux: "3,00 %", icon: <PiggyBank size={18} />, color: "#00915A" },
    { name: "LDDS", solde: "0,00 €", taux: "3,00 %", icon: <PiggyBank size={18} />, color: "#0070c0" },
    { name: "PEL", solde: "0,00 €", taux: "2,25 %", icon: <TrendingUp size={18} />, color: "#7b2d8b" },
    { name: "Compte épargne", solde: "900,0000 €", taux: "0,10 %", icon: <BarChart2 size={18} />, color: "#e67e22" },
  ];

  const totalEpargne = 900.0;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-lg text-gray-800">Épargne & Placements</h2>

      {/* Total */}
      <div className="rounded-2xl p-4 text-white shadow-lg" style={{ background: "linear-gradient(135deg, #006B42, #00915A)" }}>
        <p className="text-white/70 text-xs uppercase tracking-widest mb-1">Total épargne</p>
        <p className="text-3xl font-bold">900,0000 €</p>
        <div className="mt-3 flex items-center gap-2">
          <Lock size={13} className="text-white/60" />
          <p className="text-white/60 text-xs">Compte bloqué — accès restreint</p>
        </div>
      </div>

      {/* Détail par produit */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <p className="font-bold text-gray-800 px-4 pt-4 pb-2">Détail par produit</p>
        {produits.map((p, i) => (
          <div key={i} className="flex items-center justify-between px-4 py-3 border-b border-gray-50 last:border-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${p.color}18`, color: p.color }}>
                {p.icon}
              </div>
              <div>
                <p className="font-semibold text-sm text-gray-800">{p.name}</p>
                <p className="text-xs text-gray-400">Taux : {p.taux}/an</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-sm text-gray-800">{p.solde}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Simulation intérêts */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <p className="font-bold text-gray-800 mb-3">Simulation d'intérêts</p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { period: "1 an", gain: "+0,90 €", taux: "0,10 %" },
            { period: "3 ans", gain: "+2,70 €", taux: "0,10 %" },
            { period: "5 ans", gain: "+4,51 €", taux: "0,10 %" },
          ].map((s, i) => (
            <div key={i} className="rounded-xl p-3 text-center" style={{ background: "#f0faf5" }}>
              <p className="text-xs text-gray-500 mb-1">{s.period}</p>
              <p className="font-bold text-sm" style={{ color: "#00915A" }}>{s.gain}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-2">Simulation basée sur le taux actuel de 0,10% (hors fiscalité).</p>
      </div>
    </div>
  );
}
