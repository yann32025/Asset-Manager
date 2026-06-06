import { Bell, DollarSign, ArrowRightLeft, AlertCircle, CheckCircle2 } from "lucide-react";

const notifications = [
  {
    type: "solde",
    icon: <DollarSign size={16} className="text-green-600" />,
    bg: "#f0faf5",
    title: "Alerte de solde",
    message: "Votre solde est de 900,0000 €. Compte actuellement bloqué.",
    date: "Aujourd'hui, 09:15",
    read: false,
  },
  {
    type: "transaction",
    icon: <ArrowRightLeft size={16} className="text-blue-600" />,
    bg: "#f0f4ff",
    title: "Avis de transaction",
    message: "Virement reçu : +900,00 € — Trésor Public France.",
    date: "03/06/2026, 08:42",
    read: false,
  },
  {
    type: "alerte",
    icon: <AlertCircle size={16} className="text-yellow-600" />,
    bg: "#fffbeb",
    title: "Message important",
    message: "Votre compte a été temporairement bloqué. Contactez votre conseiller.",
    date: "02/06/2026, 14:30",
    read: true,
  },
  {
    type: "transaction",
    icon: <ArrowRightLeft size={16} className="text-red-500" />,
    bg: "#fff0f0",
    title: "Avis de prélèvement",
    message: "Prélèvement Assurance : -12,00 € débité le 28/05/2026.",
    date: "28/05/2026, 07:00",
    read: true,
  },
  {
    type: "info",
    icon: <CheckCircle2 size={16} style={{ color: "#00915A" }} />,
    bg: "#f0faf5",
    title: "Confirmation ouverture",
    message: "Bienvenue chez BNP Paribas. Votre compte a été ouvert avec succès.",
    date: "15/04/2026, 11:00",
    read: true,
  },
];

export default function NotificationsPanel() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between mb-1">
        <p className="text-sm text-gray-500">{notifications.filter(n => !n.read).length} non lue(s)</p>
        <button className="text-xs font-bold" style={{ color: "#00915A" }}>Tout marquer lu</button>
      </div>

      {notifications.map((n, i) => (
        <div
          key={i}
          className={`rounded-xl p-3 flex items-start gap-3 ${!n.read ? "border-l-4" : ""}`}
          style={{
            background: n.bg,
            borderLeftColor: !n.read ? "#00915A" : "transparent",
            opacity: n.read ? 0.75 : 1,
          }}
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white flex-shrink-0 shadow-sm">
            {n.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-0.5">
              <p className="text-xs font-bold text-gray-800">{n.title}</p>
              {!n.read && <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />}
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">{n.message}</p>
            <p className="text-xs text-gray-400 mt-1">{n.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
