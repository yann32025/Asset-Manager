import { useState } from "react";
import { Search, ArrowUpRight, ArrowDownLeft, MapPin } from "lucide-react";

export default function RecherchePanel() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<"transactions" | "agences">("transactions");

  const transactions = [
    { label: "Virement reçu – Trésor Public", amount: "+900,00 €", plus: true },
    { label: "Frais bancaires mensuels", amount: "-7,50 €", plus: false },
    { label: "Prélèvement assurance habitation", amount: "-12,00 €", plus: false },
    { label: "Remboursement santé", amount: "+45,00 €", plus: true },
    { label: "Cotisation carte bancaire", amount: "-45,00 €", plus: false },
  ];

  const agences = [
    { name: "BNP Paribas – Bordeaux Centre", address: "10 cours de l'Intendance, 33000 Bordeaux", dist: "0,8 km" },
    { name: "BNP Paribas – Bordeaux Mériadeck", address: "3 rue du Château d'Eau, 33000 Bordeaux", dist: "1,4 km" },
    { name: "BNP Paribas – Pessac", address: "46 avenue de la Libération, 33600 Pessac", dist: "4,2 km" },
    { name: "BNP Paribas – Mérignac", address: "5 avenue de la Marne, 33700 Mérignac", dist: "6,1 km" },
  ];

  const filteredTx = query
    ? transactions.filter(t => t.label.toLowerCase().includes(query.toLowerCase()))
    : transactions;

  const filteredAg = query
    ? agences.filter(a => a.name.toLowerCase().includes(query.toLowerCase()) || a.address.toLowerCase().includes(query.toLowerCase()))
    : agences;

  return (
    <div className="flex flex-col gap-4">
      {/* Search input */}
      <div className="flex items-center gap-2 border rounded-xl px-3 py-2.5" style={{ borderColor: "#e0e0e0" }}>
        <Search size={16} className="text-gray-400 flex-shrink-0" />
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder={tab === "transactions" ? "Rechercher une transaction…" : "Rechercher une agence…"}
          className="flex-1 text-sm outline-none bg-transparent"
        />
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 rounded-xl" style={{ background: "#f0f0f0" }}>
        {(["transactions", "agences"] as const).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="flex-1 py-2 rounded-lg text-xs font-bold capitalize transition"
            style={tab === t ? { background: "#00915A", color: "white" } : { color: "#777" }}
          >
            {t === "transactions" ? "🔄 Transactions" : "📍 Localisation"}
          </button>
        ))}
      </div>

      {/* Transactions */}
      {tab === "transactions" && (
        <div className="flex flex-col gap-2">
          {filteredTx.length === 0 && <p className="text-sm text-gray-400 text-center py-6">Aucun résultat.</p>}
          {filteredTx.map((t, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${t.plus ? "bg-green-50" : "bg-red-50"}`}>
                  {t.plus ? <ArrowDownLeft size={14} className="text-green-600" /> : <ArrowUpRight size={14} className="text-red-500" />}
                </div>
                <p className="text-xs font-medium text-gray-800 max-w-[170px] truncate">{t.label}</p>
              </div>
              <p className={`text-xs font-bold flex-shrink-0 ml-2 ${t.plus ? "text-green-600" : "text-red-500"}`}>{t.amount}</p>
            </div>
          ))}
        </div>
      )}

      {/* Agences */}
      {tab === "agences" && (
        <div className="flex flex-col gap-2">
          <div className="rounded-xl overflow-hidden shadow-sm" style={{ background: "#e8f5ee", height: 120, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="text-center">
              <MapPin size={28} style={{ color: "#00915A" }} className="mx-auto mb-1" />
              <p className="text-xs text-gray-500">Carte interactive</p>
              <p className="text-xs text-gray-400">Activez la localisation</p>
            </div>
          </div>
          {filteredAg.map((a, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white shadow-sm">
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#f0faf5" }}>
                <MapPin size={16} style={{ color: "#00915A" }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-800">{a.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{a.address}</p>
                <span className="inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "#f0faf5", color: "#00915A" }}>
                  À {a.dist}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
