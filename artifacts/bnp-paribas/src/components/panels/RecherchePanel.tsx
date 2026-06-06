import { useState } from "react";
import { Search, ArrowUpRight, ArrowDownLeft, MapPin, Package } from "lucide-react";

export default function RecherchePanel() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<"transactions" | "produits" | "agences">("transactions");

  const transactions = [
    { label: "Virement reçu – Trésor Public", date: "03/06/2026", amount: "+900,00 €", plus: true },
    { label: "Frais bancaires mensuels", date: "01/06/2026", amount: "-7,50 €", plus: false },
    { label: "Prélèvement assurance habitation", date: "28/05/2026", amount: "-12,00 €", plus: false },
    { label: "Remboursement santé", date: "20/05/2026", amount: "+45,00 €", plus: true },
  ];

  const agences = [
    { name: "BNP Paribas – Bordeaux Centre", address: "10 cours de l'Intendance, 33000 Bordeaux", dist: "0,8 km" },
    { name: "BNP Paribas – Bordeaux Mériadeck", address: "3 rue du Château d'Eau, 33000 Bordeaux", dist: "1,4 km" },
    { name: "BNP Paribas – Pessac", address: "46 avenue de la Libération, 33600 Pessac", dist: "4,2 km" },
  ];

  const produits = [
    { name: "Livret A", desc: "Épargne réglementée — 3,00 %/an", icon: "💰" },
    { name: "PEA", desc: "Plan Épargne en Actions", icon: "📈" },
    { name: "Assurance Vie", desc: "Contrat multi-support", icon: "🛡️" },
    { name: "Crédit immobilier", desc: "Financer votre projet immo", icon: "🏠" },
  ];

  const filtered = query
    ? transactions.filter(t => t.label.toLowerCase().includes(query.toLowerCase()))
    : transactions;

  return (
    <div className="flex flex-col gap-4">
      {/* Search input */}
      <div className="flex items-center gap-2 border rounded-xl px-3 py-2.5" style={{ borderColor: "#e0e0e0" }}>
        <Search size={16} className="text-gray-400 flex-shrink-0" />
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Rechercher…"
          className="flex-1 text-sm outline-none bg-transparent"
        />
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 rounded-xl" style={{ background: "#f0f0f0" }}>
        {(["transactions", "produits", "agences"] as const).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-1.5 rounded-lg text-xs font-bold capitalize transition ${tab === t ? "text-white shadow" : "text-gray-500"}`}
            style={tab === t ? { background: "#00915A" } : {}}
          >
            {t === "transactions" ? "Transactions" : t === "produits" ? "Produits" : "Agences"}
          </button>
        ))}
      </div>

      {/* Content */}
      {tab === "transactions" && (
        <div className="flex flex-col gap-2">
          {filtered.map((t, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${t.plus ? "bg-green-50" : "bg-red-50"}`}>
                  {t.plus ? <ArrowDownLeft size={14} className="text-green-600" /> : <ArrowUpRight size={14} className="text-red-500" />}
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-800">{t.label}</p>
                  <p className="text-xs text-gray-400">{t.date}</p>
                </div>
              </div>
              <p className={`text-xs font-bold ${t.plus ? "text-green-600" : "text-red-500"}`}>{t.amount}</p>
            </div>
          ))}
          {filtered.length === 0 && <p className="text-sm text-gray-400 text-center py-4">Aucun résultat.</p>}
        </div>
      )}

      {tab === "produits" && (
        <div className="flex flex-col gap-2">
          {produits.map((p, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-sm">
              <span className="text-2xl">{p.icon}</span>
              <div>
                <p className="text-sm font-bold text-gray-800">{p.name}</p>
                <p className="text-xs text-gray-400">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "agences" && (
        <div className="flex flex-col gap-2">
          {agences.map((a, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white shadow-sm">
              <MapPin size={18} style={{ color: "#00915A" }} className="flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-gray-800">{a.name}</p>
                <p className="text-xs text-gray-400">{a.address}</p>
                <p className="text-xs font-semibold mt-1" style={{ color: "#00915A" }}>À {a.dist}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
