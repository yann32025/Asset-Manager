import { Landmark, Plus, Info } from "lucide-react";

export default function CreditsPrets() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-lg text-gray-800">Crédits & Prêts</h2>

      {/* Total */}
      <div className="rounded-2xl p-4 text-white shadow" style={{ background: "linear-gradient(135deg, #1a3a5c, #0070c0)" }}>
        <p className="text-white/70 text-xs uppercase tracking-widest mb-1">Encours total</p>
        <p className="text-3xl font-bold">0,00 €</p>
        <p className="text-white/60 text-xs mt-2">Aucun crédit actif sur votre compte.</p>
      </div>

      {/* Types disponibles */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <p className="font-bold text-gray-800 px-4 pt-4 pb-2">Offres de crédit disponibles</p>
        {[
          { name: "Crédit immobilier", desc: "Financez votre achat ou travaux", taux: "À partir de 3,20 %/an", icon: "🏠" },
          { name: "Prêt personnel", desc: "Jusqu'à 75 000 € sans justificatif", taux: "À partir de 5,90 %/an", icon: "💶" },
          { name: "Crédit auto", desc: "Neuf ou occasion, LOA incluse", taux: "À partir de 4,50 %/an", icon: "🚗" },
          { name: "Prêt étudiant", desc: "Études en France ou à l'étranger", taux: "À partir de 1,00 %/an", icon: "🎓" },
        ].map((c, i) => (
          <div key={i} className="flex items-center justify-between px-4 py-3 border-b border-gray-50 last:border-0">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{c.icon}</span>
              <div>
                <p className="font-semibold text-sm text-gray-800">{c.name}</p>
                <p className="text-xs text-gray-400">{c.desc}</p>
                <p className="text-xs font-semibold mt-0.5" style={{ color: "#0070c0" }}>{c.taux}</p>
              </div>
            </div>
            <button className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: "#e8f4ff", color: "#0070c0" }}>
              Simuler
            </button>
          </div>
        ))}
      </div>

      <div className="rounded-xl p-3 flex items-start gap-2" style={{ background: "#f0f4ff" }}>
        <Info size={15} className="text-blue-500 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-blue-700">Pour souscrire à un crédit, votre compte doit être actif. Contactez votre conseiller au 3009.</p>
      </div>
    </div>
  );
}
