import { Lock, Eye, EyeOff, Wifi } from "lucide-react";
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
            <p className="font-bold text-gray-800 mt-0.5">M. Cissoko Mohamed</p>
          </div>
          <span className="flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: "#fff0f0", color: "#c0392b" }}>
            <Lock size={11} /> Bloqué
          </span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-gray-400">Solde disponible</p>
            <p className="text-2xl font-bold mt-0.5" style={{ color: "#006BB6" }}>500.000 €</p>
          </div>
          <p className="text-xs text-gray-400">ES76 2100 0418 4502 0005 1332</p>
        </div>
        <div className="mt-3 pt-3 border-t border-gray-100 flex gap-2">
          <div className="flex-1 rounded-xl p-2 text-center" style={{ background: "#e8f4ff" }}>
            <p className="text-xs text-gray-500">Plafond carte</p>
            <p className="font-bold text-sm text-gray-700">2 000,00 €</p>
          </div>
          <div className="flex-1 rounded-xl p-2 text-center" style={{ background: "#e8f4ff" }}>
            <p className="text-xs text-gray-500">Découvert auth.</p>
            <p className="font-bold text-sm text-gray-700">0,00 €</p>
          </div>
        </div>
      </div>

      {/* Carte Visa CaixaBank */}
      <div className="rounded-2xl overflow-hidden shadow-lg visa-card p-5 relative">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="w-10 h-7 rounded-md" style={{ background: "linear-gradient(135deg, #d4a843, #f5d07a, #d4a843)", border: "1px solid #b8902a" }} />
          </div>
          <div className="flex items-center gap-2">
            <Wifi size={18} className="text-white/70 rotate-90" />
            <span className="text-white font-bold text-lg tracking-widest">VISA</span>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-white/50 text-xs mb-1">Numéro de carte</p>
          <div className="flex items-center gap-3">
            <p className="text-white font-mono text-lg tracking-widest">
              {showNumber ? "4024 0071 8452 3309" : "•••• •••• •••• 3309"}
            </p>
            <button onClick={() => setShowNumber(v => !v)} className="text-white/50 hover:text-white transition">
              {showNumber ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Titulaire</p>
            <p className="text-white font-semibold text-sm tracking-wider">M. CISSOKO MOHAMED</p>
          </div>
          <div className="text-right">
            <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Expire</p>
            <p className="text-white font-semibold text-sm">09/30</p>
          </div>
        </div>

        <div className="absolute top-4 right-16">
          <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(255,80,80,0.3)", color: "#ffaaaa" }}>
            Bloquée
          </span>
        </div>
      </div>

      {/* Transactions récentes — sans dates */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <p className="font-bold text-gray-800 mb-3">Dernières opérations</p>
        {[
          { label: "Virement reçu – Trésor Public", amount: "+500.000 €", plus: true },
          { label: "Frais bancaires", amount: "-7,50 €", plus: false },
          { label: "Prélèvement assurance", amount: "-12,00 €", plus: false },
        ].map((t, i) => (
          <div key={i} className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0">
            <p className="text-sm font-medium text-gray-700">{t.label}</p>
            <p className={`font-bold text-sm ${t.plus ? "text-blue-600" : "text-red-500"}`}>{t.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
