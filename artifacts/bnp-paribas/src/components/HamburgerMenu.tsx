import { X, CreditCard, PiggyBank, ArrowLeftRight, Landmark, Shield, User, Gift, Settings, Bell, HelpCircle, FileText, Globe, ChevronRight } from "lucide-react";
import caixaLogo from "@assets/IMG_6409_1780735695221.png";

type HamburgerMenuProps = {
  onClose: () => void;
  onNavigate: (section: string) => void;
};

const MENU_SECTIONS = [
  {
    title: "Mon espace",
    items: [
      { icon: <CreditCard size={18} />, label: "Comptes & Cartes", key: "comptes", color: "#006BB6" },
      { icon: <PiggyBank size={18} />, label: "Épargne & Placements", key: "epargne", color: "#009EE0" },
      { icon: <ArrowLeftRight size={18} />, label: "Virements & Paiements", key: "virements", color: "#7b2d8b" },
      { icon: <Landmark size={18} />, label: "Crédits & Prêts", key: "credits", color: "#003082" },
      { icon: <Shield size={18} />, label: "Assurances & Sécurité", key: "assurances", color: "#e67e22" },
      { icon: <Gift size={18} />, label: "Espace Cadeaux", key: "cadeaux", color: "#9c27b0" },
    ],
  },
  {
    title: "Mon profil",
    items: [
      { icon: <User size={18} />, label: "Profil & Paramètres", key: "profil", color: "#455a64" },
      { icon: <Bell size={18} />, label: "Mes notifications", key: "notifs", color: "#f44336" },
      { icon: <FileText size={18} />, label: "Mes documents", key: "docs", color: "#795548" },
    ],
  },
  {
    title: "Application",
    items: [
      { icon: <HelpCircle size={18} />, label: "Aide & Support", key: "support", color: "#009EE0" },
      { icon: <Globe size={18} />, label: "Langue : Français", key: "lang", color: "#607d8b" },
      { icon: <Settings size={18} />, label: "Paramètres", key: "settings", color: "#78909c" },
    ],
  },
];

export default function HamburgerMenu({ onClose, onNavigate }: HamburgerMenuProps) {
  function handleItem(key: string) {
    onNavigate(key);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-72 h-full bg-white shadow-2xl flex flex-col overflow-y-auto section-fade">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4" style={{ background: "linear-gradient(135deg, #003082, #006BB6)" }}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center px-1.5">
              <img src={caixaLogo} alt="CaixaBankNow" className="w-full h-full object-contain" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">M. Cissoko Mohamed</p>
              <p className="text-white/60 text-xs">Compte particulier</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-full hover:bg-white/20 transition">
            <X size={18} className="text-white" />
          </button>
        </div>

        {/* Balance */}
        <div className="mx-4 my-3 rounded-xl p-3" style={{ background: "#e8f4ff" }}>
          <p className="text-xs text-gray-500">Solde disponible</p>
          <p className="font-bold text-lg" style={{ color: "#006BB6" }}>500.000 €</p>
          <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "#fff0f0", color: "#c0392b" }}>
            🔒 Compte bloqué
          </span>
        </div>

        {/* Menu */}
        <div className="flex-1 px-2 pb-4">
          {MENU_SECTIONS.map((section, si) => (
            <div key={si} className="mb-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest px-3 mb-1">{section.title}</p>
              {section.items.map((item, ii) => (
                <button
                  key={ii}
                  onClick={() => handleItem(item.key)}
                  className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition text-left mb-0.5"
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}15`, color: item.color }}>
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-800 flex-1">{item.label}</span>
                  <ChevronRight size={15} className="text-gray-300" />
                </button>
              ))}
            </div>
          ))}
        </div>

        <div className="px-4 py-3 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center">© CaixaBankNow — Banque agréée par l'ACPR</p>
        </div>
      </div>
    </div>
  );
}
