import { Shield, Lock, AlertTriangle, CheckCircle2, Eye, Smartphone } from "lucide-react";

export default function AssurancesSecurite() {
  const assurances = [
    { name: "Assurance Habitation", desc: "Protection de votre logement contre sinistres", statut: "Non souscrit", color: "#e67e22", bg: "#fff8f0" },
    { name: "Assurance Auto", desc: "Couverture accidents, vol, bris de glace", statut: "Non souscrit", color: "#e67e22", bg: "#fff8f0" },
    { name: "Assurance Vie", desc: "Épargne et protection de vos proches", statut: "Non souscrit", color: "#e67e22", bg: "#fff8f0" },
    { name: "Prévoyance", desc: "Incapacité de travail, décès, invalidité", statut: "Non souscrit", color: "#e67e22", bg: "#fff8f0" },
  ];

  const securite = [
    { name: "Authentification forte (SCA)", desc: "Validation par empreinte ou code à 6 chiffres", actif: true, icon: <Smartphone size={18} /> },
    { name: "Alertes SMS transactions", desc: "Notification pour chaque opération", actif: true, icon: <Eye size={18} /> },
    { name: "Blocage carte temporaire", desc: "Suspendre votre carte en 1 clic", actif: false, icon: <Lock size={18} /> },
    { name: "Protection fraude Certicode+", desc: "Validation sécurisée des paiements en ligne", actif: true, icon: <Shield size={18} /> },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-lg text-gray-800">Assurances & Sécurité</h2>

      {/* Assurances section */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="flex items-center gap-2 px-4 pt-4 pb-2">
          <Shield size={18} style={{ color: "#00915A" }} />
          <p className="font-bold text-gray-800">Mes Assurances</p>
        </div>
        <p className="px-4 pb-3 text-xs text-gray-400">Protection financière contre les risques de la vie.</p>
        {assurances.map((a, i) => (
          <div key={i} className="flex items-center justify-between px-4 py-3 border-b border-gray-50 last:border-0">
            <div>
              <p className="font-semibold text-sm text-gray-800">{a.name}</p>
              <p className="text-xs text-gray-400">{a.desc}</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: a.bg, color: a.color }}>
                {a.statut}
              </span>
              <button className="text-xs font-bold" style={{ color: "#00915A" }}>Souscrire</button>
            </div>
          </div>
        ))}
      </div>

      {/* Sécurité section */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="flex items-center gap-2 px-4 pt-4 pb-2">
          <Lock size={18} style={{ color: "#00915A" }} />
          <p className="font-bold text-gray-800">Sécurité du compte</p>
        </div>
        <p className="px-4 pb-3 text-xs text-gray-400">Protection technique et prévention des fraudes.</p>
        {securite.map((s, i) => (
          <div key={i} className="flex items-center justify-between px-4 py-3 border-b border-gray-50 last:border-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#f0faf5", color: "#00915A" }}>
                {s.icon}
              </div>
              <div>
                <p className="font-semibold text-sm text-gray-800">{s.name}</p>
                <p className="text-xs text-gray-400">{s.desc}</p>
              </div>
            </div>
            <div>
              {s.actif
                ? <CheckCircle2 size={20} style={{ color: "#00915A" }} />
                : <AlertTriangle size={20} className="text-yellow-500" />
              }
            </div>
          </div>
        ))}
      </div>

      {/* Urgence */}
      <div className="rounded-2xl p-4 flex items-start gap-3" style={{ background: "#fff0f0" }}>
        <AlertTriangle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-bold text-sm text-red-700">Opposition carte</p>
          <p className="text-xs text-red-600 mt-0.5">En cas de perte ou vol, appelez le <strong>+33 9 69 37 00 00</strong> (24h/24, 7j/7) ou faites opposition depuis votre espace client.</p>
          <button className="mt-2 text-xs font-bold px-4 py-1.5 rounded-full text-white" style={{ background: "#c0392b" }}>
            Faire opposition
          </button>
        </div>
      </div>
    </div>
  );
}
