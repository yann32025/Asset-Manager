import { DollarSign, ArrowRightLeft, AlertCircle, CheckCircle2, BellOff } from "lucide-react";
import { useState } from "react";

const INITIAL_NOTIFS = [
  {
    type: "solde",
    icon: <DollarSign size={16} className="text-green-600" />,
    bg: "#f0faf5",
    borderColor: "#00915A",
    title: "Alerte de solde",
    message: "Votre solde est de 900,0000 €. Compte actuellement bloqué.",
    read: false,
  },
  {
    type: "transaction",
    icon: <ArrowRightLeft size={16} className="text-blue-600" />,
    bg: "#f0f4ff",
    borderColor: "#3949ab",
    title: "Avis de transaction",
    message: "Virement reçu : +900,00 € — Trésor Public France.",
    read: false,
  },
  {
    type: "alerte",
    icon: <AlertCircle size={16} className="text-yellow-600" />,
    bg: "#fffbeb",
    borderColor: "#f59e0b",
    title: "Message important",
    message: "Votre compte a été temporairement bloqué. Contactez votre conseiller.",
    read: true,
  },
  {
    type: "transaction",
    icon: <ArrowRightLeft size={16} className="text-red-500" />,
    bg: "#fff0f0",
    borderColor: "#ef4444",
    title: "Avis de prélèvement",
    message: "Prélèvement Assurance : -12,00 € débité sur votre compte.",
    read: true,
  },
  {
    type: "info",
    icon: <CheckCircle2 size={16} style={{ color: "#00915A" }} />,
    bg: "#f0faf5",
    borderColor: "#00915A",
    title: "Ouverture de compte",
    message: "Bienvenue chez BNP Paribas. Votre compte a été ouvert avec succès.",
    read: true,
  },
];

export default function NotificationsPanel() {
  const [notifs, setNotifs] = useState(INITIAL_NOTIFS);

  function markAllRead() {
    setNotifs(n => n.map(item => ({ ...item, read: true })));
  }

  function dismiss(i: number) {
    setNotifs(n => n.filter((_, idx) => idx !== i));
  }

  const unread = notifs.filter(n => !n.read).length;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between mb-1">
        <p className="text-sm text-gray-500">{unread} non lue{unread > 1 ? "s" : ""}</p>
        {unread > 0 && (
          <button onClick={markAllRead} className="text-xs font-bold" style={{ color: "#00915A" }}>
            Tout marquer lu
          </button>
        )}
      </div>

      {notifs.length === 0 && (
        <div className="flex flex-col items-center gap-3 py-10">
          <BellOff size={36} className="text-gray-300" />
          <p className="text-sm text-gray-400">Aucune notification</p>
        </div>
      )}

      {notifs.map((n, i) => (
        <div
          key={i}
          className="rounded-xl p-3 flex items-start gap-3 border-l-4 transition-opacity"
          style={{ background: n.bg, borderLeftColor: !n.read ? n.borderColor : "transparent", opacity: n.read ? 0.7 : 1 }}
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white flex-shrink-0 shadow-sm">
            {n.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-0.5">
              <p className="text-xs font-bold text-gray-800">{n.title}</p>
              <div className="flex items-center gap-1">
                {!n.read && <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#00915A" }} />}
                <button onClick={() => dismiss(i)} className="text-gray-300 hover:text-gray-500 text-xs leading-none">✕</button>
              </div>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">{n.message}</p>
          </div>
        </div>
      ))}

      {/* Notification categories */}
      <div className="mt-2 bg-white rounded-2xl p-4 shadow-sm">
        <p className="font-bold text-gray-800 text-sm mb-3">Gérer mes alertes</p>
        {[
          { label: "Alertes de solde", active: true },
          { label: "Avis de transactions", active: true },
          { label: "Messages importants", active: true },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
            <p className="text-xs text-gray-700">{item.label}</p>
            <div className="w-10 h-5 rounded-full flex items-center px-0.5" style={{ background: item.active ? "#00915A" : "#e0e0e0" }}>
              <div className="w-4 h-4 rounded-full bg-white shadow" style={{ transform: item.active ? "translateX(20px)" : "none", transition: "transform 0.2s" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
