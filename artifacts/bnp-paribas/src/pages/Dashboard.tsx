import { useState } from "react";
import { useLocation } from "wouter";
import caixaLogo from "@assets/IMG_6409_1780735695221.png";
import {
  Search, Bell, HelpCircle, Menu,
  Home, CreditCard, ArrowLeftRight, User,
  Facebook, Youtube, Twitter, Instagram, Lock, X
} from "lucide-react";

import ComptesCartes from "@/components/sections/ComptesCartes";
import EpargnePlacements from "@/components/sections/EpargnePlacements";
import VirementsPaiements from "@/components/sections/VirementsPaiements";
import CreditsPrets from "@/components/sections/CreditsPrets";
import AssurancesSecurite from "@/components/sections/AssurancesSecurite";
import ProfilParametres from "@/components/sections/ProfilParametres";
import EspaceCadeaux from "@/components/sections/EspaceCadeaux";
import AdsCarousel from "@/components/AdsCarousel";
import MarketingMessages from "@/components/MarketingMessages";
import HamburgerMenu from "@/components/HamburgerMenu";
import RecherchePanel from "@/components/panels/RecherchePanel";
import NotificationsPanel from "@/components/panels/NotificationsPanel";
import SupportPanel from "@/components/panels/SupportPanel";

type BottomTab = "accueil" | "comptes" | "virement" | "vous";
type SubSection = "comptes" | "epargne" | "credits" | "assurances" | "cadeaux" | "profil" | null;
type Panel = "none" | "recherche" | "notifications" | "support";

const CB = "#006BB6";
const CB_DARK = "#003082";
const CB_CYAN = "#009EE0";
const CB_LIGHT = "#e8f4ff";

function AccueilView() {
  return (
    <div className="flex flex-col gap-1 pb-2">
      {/* Balance banner */}
      <div className="px-4 pt-4 pb-2">
        <div className="rounded-2xl p-4 text-white" style={{ background: `linear-gradient(135deg, ${CB_DARK}, ${CB})` }}>
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-white/60 text-xs uppercase tracking-wider font-semibold">Compte courant bloqué</p>
              <p className="text-3xl font-bold mt-0.5">500.000 €</p>
            </div>
            <span className="flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: "rgba(255,80,80,0.25)", color: "#ffaaaa" }}>
              <Lock size={11} /> BLOQUÉ
            </span>
          </div>
          <p className="text-white/50 text-xs">ES76 2100 0418 4502 0005 1332</p>
        </div>
      </div>

      <AdsCarousel />

      {/* Quick access */}
      <div className="px-4 pb-2">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Accès rapide</p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Épargne", emoji: "💰" },
            { label: "Crédits", emoji: "🏠" },
            { label: "Assurances", emoji: "🛡️" },
            { label: "Documents", emoji: "📄" },
            { label: "Cadeaux", emoji: "🎁" },
            { label: "Agences", emoji: "📍" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-white shadow-sm cursor-pointer hover:shadow-md transition">
              <span className="text-2xl">{item.emoji}</span>
              <p className="text-xs font-semibold text-gray-700 text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <MarketingMessages />

      {/* Expertise banner */}
      <div className="mx-4 mb-4 mt-2 rounded-2xl overflow-hidden shadow-lg" style={{ background: `linear-gradient(135deg, ${CB_DARK}, ${CB}, ${CB_CYAN})` }}>
        <div className="flex items-center gap-4 p-4">
          <div className="flex-1">
            <p className="text-white/50 text-xs uppercase tracking-widest mb-1">VOTRE EXPERTISE</p>
            <p className="text-white font-bold text-base leading-snug">Un accompagnement sur mesure pour vos projets</p>
            <button className="mt-3 text-xs font-bold px-4 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.2)", color: "white" }}>
              En savoir plus →
            </button>
          </div>
          <div className="w-20 h-14 bg-white rounded-xl flex items-center justify-center px-2 flex-shrink-0">
            <img src={caixaLogo} alt="CaixaBankNow" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      {/* Social + Footer */}
      <div className="px-4 pb-6">
        <div className="rounded-2xl p-4 bg-white shadow-sm">
          <p className="text-xs font-bold mb-3" style={{ color: CB }}>Suivez-nous sur</p>
          <div className="flex gap-3">
            <a href="https://facebook.com/caixabank" target="_blank" rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full transition hover:scale-110" style={{ background: "#1877F2" }}>
              <Facebook size={18} className="text-white" />
            </a>
            <a href="https://instagram.com/caixabank" target="_blank" rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full transition hover:scale-110"
              style={{ background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}>
              <Instagram size={18} className="text-white" />
            </a>
            <a href="https://twitter.com/caixabank" target="_blank" rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-black transition hover:scale-110">
              <Twitter size={18} className="text-white" />
            </a>
            <a href="https://youtube.com/caixabank" target="_blank" rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full transition hover:scale-110" style={{ background: "#FF0000" }}>
              <Youtube size={18} className="text-white" />
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-4">© CaixaBankNow — Banque agréée par l'ACPR<br />Partenariat à CaixaBankNow depuis 2025</p>
        </div>
      </div>
    </div>
  );
}

function ComptesView({ sub, onSub }: { sub: SubSection; onSub: (s: SubSection) => void }) {
  if (sub === "epargne") return (
    <div className="section-fade"><div className="p-4"><button onClick={() => onSub(null)} className="text-xs font-bold mb-3 flex items-center gap-1" style={{ color: CB }}>← Retour</button></div>
      <div className="px-4"><EpargnePlacements /></div></div>
  );
  if (sub === "credits") return (
    <div className="section-fade"><div className="p-4"><button onClick={() => onSub(null)} className="text-xs font-bold mb-3 flex items-center gap-1" style={{ color: CB }}>← Retour</button></div>
      <div className="px-4"><CreditsPrets /></div></div>
  );
  return (
    <div className="flex flex-col gap-4 px-4 pt-4 section-fade">
      <h2 className="font-bold text-lg text-gray-800">Mes Comptes</h2>
      <ComptesCartes />
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Épargne & Placements", emoji: "💰", key: "epargne" as SubSection },
          { label: "Crédits & Prêts", emoji: "🏠", key: "credits" as SubSection },
        ].map((item, i) => (
          <button key={i} onClick={() => onSub(item.key)}
            className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
            <span className="text-3xl">{item.emoji}</span>
            <p className="text-xs font-bold text-gray-700 text-center">{item.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

function VousView({ sub, onSub }: { sub: SubSection; onSub: (s: SubSection) => void }) {
  if (sub === "assurances") return (
    <div className="section-fade"><div className="px-4 pt-4"><button onClick={() => onSub(null)} className="text-xs font-bold mb-3 flex items-center gap-1" style={{ color: CB }}>← Retour</button><AssurancesSecurite /></div></div>
  );
  if (sub === "cadeaux") return (
    <div className="section-fade"><div className="px-4 pt-4"><button onClick={() => onSub(null)} className="text-xs font-bold mb-3 flex items-center gap-1" style={{ color: CB }}>← Retour</button><EspaceCadeaux /></div></div>
  );
  return (
    <div className="flex flex-col gap-4 px-4 pt-4 section-fade">
      <h2 className="font-bold text-lg text-gray-800">Mon Espace</h2>
      <ProfilParametres />
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Assurances & Sécurité", emoji: "🛡️", key: "assurances" as SubSection },
          { label: "Espace Cadeaux", emoji: "🎁", key: "cadeaux" as SubSection },
        ].map((item, i) => (
          <button key={i} onClick={() => onSub(item.key)}
            className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
            <span className="text-3xl">{item.emoji}</span>
            <p className="text-xs font-bold text-gray-700 text-center">{item.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [, navigate] = useLocation();
  const [bottomTab, setBottomTab] = useState<BottomTab>("accueil");
  const [subSection, setSubSection] = useState<SubSection>(null);
  const [activePanel, setActivePanel] = useState<Panel>("none");
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  function togglePanel(p: Panel) {
    setActivePanel(prev => prev === p ? "none" : p);
  }

  function handleHamburgerNav(key: string) {
    if (key === "comptes") { setBottomTab("comptes"); setSubSection(null); }
    else if (key === "epargne") { setBottomTab("comptes"); setSubSection("epargne"); }
    else if (key === "virements") setBottomTab("virement");
    else if (key === "credits") { setBottomTab("comptes"); setSubSection("credits"); }
    else if (key === "assurances") { setBottomTab("vous"); setSubSection("assurances"); }
    else if (key === "cadeaux") { setBottomTab("vous"); setSubSection("cadeaux"); }
    else if (key === "profil") { setBottomTab("vous"); setSubSection(null); }
    else if (key === "notifs") togglePanel("notifications");
    else if (key === "support") togglePanel("support");
    else { setBottomTab("accueil"); }
    setHamburgerOpen(false);
  }

  function handleBottomTab(tab: BottomTab) {
    setBottomTab(tab);
    setSubSection(null);
    setActivePanel("none");
  }

  const BOTTOM_TABS: { id: BottomTab; label: string; icon: React.ReactNode }[] = [
    { id: "accueil", label: "Accueil", icon: <Home size={22} /> },
    { id: "comptes", label: "Comptes", icon: <CreditCard size={22} /> },
    { id: "virement", label: "Virement", icon: <ArrowLeftRight size={22} /> },
    { id: "vous", label: "Vous", icon: <User size={22} /> },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#f0f4f8" }}>
      {/* Top navbar */}
      <header className="sticky top-0 z-40 flex items-center justify-between px-4 py-3 shadow-md"
        style={{ background: `linear-gradient(135deg, ${CB_DARK}, ${CB})` }}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-6 bg-white rounded-lg flex items-center justify-center px-1">
            <img src={caixaLogo} alt="CaixaBankNow" className="w-full h-full object-contain" />
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-tight">CaixaBankNow</p>
            <p className="text-white/70 text-xs">M. Cissoko Mohamed</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button onClick={() => togglePanel("recherche")} className={`p-2 rounded-full transition ${activePanel === "recherche" ? "bg-white/30" : "hover:bg-white/20"}`}>
            <Search size={18} className="text-white" />
          </button>
          <button onClick={() => togglePanel("notifications")} className={`relative p-2 rounded-full transition ${activePanel === "notifications" ? "bg-white/30" : "hover:bg-white/20"}`}>
            <Bell size={18} className="text-white" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-400 border border-white" />
          </button>
          <button onClick={() => togglePanel("support")} className={`p-2 rounded-full transition ${activePanel === "support" ? "bg-white/30" : "hover:bg-white/20"}`}>
            <HelpCircle size={18} className="text-white" />
          </button>
          <button onClick={() => setHamburgerOpen(true)} className="p-2 rounded-full hover:bg-white/20 transition ml-1">
            <Menu size={20} className="text-white" />
          </button>
        </div>
      </header>

      {hamburgerOpen && (
        <HamburgerMenu onClose={() => setHamburgerOpen(false)} onNavigate={handleHamburgerNav} />
      )}

      {activePanel !== "none" && (
        <div className="fixed inset-0 z-40 flex" style={{ top: 60 }}>
          <div className="absolute inset-0 bg-black/30" onClick={() => setActivePanel("none")} />
          <div className="relative z-10 ml-auto w-full max-w-sm bg-white h-full shadow-2xl overflow-y-auto section-fade">
            <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: "#d0e8f8" }}>
              <h3 className="font-bold text-base" style={{ color: CB }}>
                {activePanel === "recherche" && "Recherche"}
                {activePanel === "notifications" && "Notifications"}
                {activePanel === "support" && "Support & Aide"}
              </h3>
              <button onClick={() => setActivePanel("none")} className="p-1 rounded-full hover:bg-gray-100">
                <X size={18} className="text-gray-500" />
              </button>
            </div>
            <div className="p-4">
              {activePanel === "recherche" && <RecherchePanel />}
              {activePanel === "notifications" && <NotificationsPanel />}
              {activePanel === "support" && <SupportPanel />}
            </div>
          </div>
        </div>
      )}

      <main className="flex-1 overflow-y-auto pb-20">
        {bottomTab === "accueil" && <AccueilView />}
        {bottomTab === "comptes" && <ComptesView sub={subSection} onSub={setSubSection} />}
        {bottomTab === "virement" && (
          <div className="section-fade px-4 pt-4">
            <VirementsPaiements />
          </div>
        )}
        {bottomTab === "vous" && <VousView sub={subSection} onSub={setSubSection} />}
      </main>

      {/* Bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t flex"
        style={{ borderColor: "#d0e8f8", boxShadow: "0 -4px 20px rgba(0,107,182,0.1)" }}>
        {BOTTOM_TABS.map(tab => {
          const active = bottomTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleBottomTab(tab.id)}
              className="flex-1 flex flex-col items-center justify-center py-2.5 gap-0.5 transition-all"
              style={{ color: active ? CB : "#adb5bd" }}
            >
              <div className={`p-1.5 rounded-xl transition-all ${active ? "" : ""}`}
                style={active ? { background: CB_LIGHT } : {}}>
                {tab.icon}
              </div>
              <span className={`text-xs font-${active ? "bold" : "medium"}`}>{tab.label}</span>
              {active && <span className="w-1 h-1 rounded-full" style={{ background: CB }} />}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
