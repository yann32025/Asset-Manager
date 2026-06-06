import { Lock, Eye, EyeOff, CreditCard, Wifi } from "lucide-react";
import { useState } from "react";

export default function ComptesCartes() {
  const [showNumber, setShowNumber] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-lg text-gray-800">Comptes & Cartes</h2>

      {/* Compte courant */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Compte Courant</p>
            <p className="font-bold text-gray-800 mt-0.5">Chavet Alain</p>
          </div>
          <span className="flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: "#fff0f0", color: "#c0392b" }}>
            <Lock size={11} /> Bloqué
          </span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-gray-400">Solde disponible</p>
            <p className="text-2xl font-bold mt-0.5" style={{ color: "#00915A" }}>900,0000 €</p>
          </div>
          <p className="text-xs text-gray-400">FR76 3000 4008 0400 0000</p>
        </div>
        <div className="mt-3 pt-3 border-t border-gray-100 flex gap-2">
          <div className="flex-1 rounded-xl p-2 text-center" style={{ background: "#f0faf5" }}>
            <p className="text-xs text-gray-500">Plafond carte</p>
            <p className="font-bold text-sm text-gray-700">1 500,00 €</p>
          </div>
          <div className="flex-1 rounded-xl p-2 text-center" style={{ background: "#f0faf5" }}>
            <p className="text-xs text-gray-500">Découvert auth.</p>
            <p className="font-bold text-sm text-gray-700">0,00 €</p>
          </div>
        </div>
      </div>

      {/* Carte Visa */}
      <div className="rounded-2xl overflow-hidden shadow-lg visa-card p-5 relative">
        {/* Card chip & contactless */}
        <div className="flex items-start justify-between mb-6">
          <div>
            {/* Chip */}
            <div className="w-10 h-7 rounded-md" style={{ background: "linear-gradient(135deg, #d4a843, #f5d07a, #d4a843)", border: "1px solid #b8902a" }} />
          </div>
          <div className="flex items-center gap-2">
            <Wifi size={18} className="text-white/70 rotate-90" />
            <span className="text-white font-bold text-lg tracking-widest">VISA</span>
          </div>
        </div>

        {/* Card number */}
        <div className="mb-4">
          <p className="text-white/50 text-xs mb-1">Numéro de carte</p>
          <div className="flex items-center gap-3">
            <p className="text-white font-mono text-lg tracking-widest">
              {showNumber ? "4913 2048 7631 0021" : "•••• •••• •••• 0021"}
            </p>
            <button onClick={() => setShowNumber(v => !v)} className="text-white/50 hover:text-white transition">
              {showNumber ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {/* Cardholder & expiry */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Titulaire</p>
            <p className="text-white font-semibold text-sm tracking-wider">M. CHAVET ALAIN</p>
          </div>
          <div className="text-right">
            <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Expire</p>
            <p className="text-white font-semibold text-sm">12/29</p>
          </div>
        </div>

        {/* Status badge */}
        <div className="absolute top-4 right-16">
          <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(255,80,80,0.3)", color: "#ffaaaa" }}>
            Bloquée
          </span>
        </div>
      </div>

      {/* Transactions récentes */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <p className="font-bold text-gray-800 mb-3">Dernières opérations</p>
        {[
          { label: "Virement reçu – Trésor Public", date: "03/06/2026", amount: "+900,00 €", plus: true },
          { label: "Frais bancaires", date: "01/06/2026", amount: "-7,50 €", plus: false },
          { label: "Prélèvement assurance", date: "28/05/2026", amount: "-12,00 €", plus: false },
        ].map((t, i) => (
          <div key={i} className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0">
            <div>
              <p className="text-sm font-medium text-gray-700">{t.label}</p>
              <p className="text-xs text-gray-400">{t.date}</p>
            </div>
            <p className={`font-bold text-sm ${t.plus ? "text-green-600" : "text-red-500"}`}>{t.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
