import { useState } from "react";
import { useLocation } from "wouter";
import bnpLogo from "@assets/IMG_6378_1780731943646.webp";
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

// ── Home view ──────────────────────────────────────────
function AccueilView() {
  return (
    <div className="flex flex-col gap-1 pb-2">
      {/* Balance banner */}
      <div className="px-4 pt-4 pb-2">
        <div className="rounded-2xl p-4 text-white" style={{ background: "linear-gradient(135deg, #006B42, #00915A)" }}>
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-white/60 text-xs uppercase tracking-wider font-semibold">Compte courant bloqué</p>
              <p className="text-3xl font-bold mt-0.5">900,0000 €</p>
            </div>
            <span className="flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: "rgba(255,80,80,0.25)", color: "#ffaaaa" }}>
              <Lock size={11} /> BLOQUÉ
            </span>
          </div>
          <p className="text-white/50 text-xs">FR76 3000 4008 0400 0000 0000 000</p>
        </div>
      </div>

      {/* Ads carousel */}
      <AdsCarousel />

      {/* Quick access grid */}
      <div className="px-4 pb-2">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Accès rapide</p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Épargne", emoji: "💰", section: "epargne" },
            { label: "Crédits", emoji: "🏠", section: "credits" },
            { label: "Assurances", emoji: "🛡️", section: "assurances" },
            { label: "Documents", emoji: "📄", section: "docs" },
            { label: "Cadeaux", emoji: "🎁", section: "cadeaux" },
            { label: "Agences", emoji: "📍", section: "agences" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-white shadow-sm cursor-pointer hover:shadow-md transition"
            >
              <span className="text-2xl">{item.emoji}</span>
              <p className="text-xs font-semibold text-gray-700 text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Marketing messages */}
      <MarketingMessages />

      {/* Expertise banner */}
      <div className="mx-4 mb-4 mt-2 rounded-2xl overflow-hidden shadow-lg" style={{ background: "linear-gradient(135deg, #003d26, #00915A)" }}>
        <div className="flex items-center gap-4 p-4">
          <div className="flex-1">
            <p className="text-white/50 text-xs uppercase tracking-widest mb-1">VOTRE EXPERTISE</p>
            <p className="text-white font-bold text-base leading-snug">Un accompagnement sur mesure pour vos projets</p>
            <button className="mt-3 text-xs font-bold px-4 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.2)", color: "white" }}>
              En savoir plus →
            </button>
          </div>
          <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center" style={{ background: "rgba(255,255,255,0.12)" }}>
            <img src={bnpLogo} alt="" className="w-14 h-14 opacity-70" />
          </div>
        </div>
      </div>

      {/* Social media */}
      <div className="px-4 pb-6">
        <div className="rounded-2xl p-4 bg-white shadow-sm">
          <p className="text-xs font-bold mb-3" style={{ color: "#00915A" }}>Suivez-nous sur</p>
          <div className="flex gap-3">
            <a href="https://facebook.com/bnpparibas" target="_blank" rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full transition hover:scale-110" style={{ background: "#1877F2" }}>
              <Facebook size={18} className="text-white" />
            </a>
            <a href="https://instagram.com/bnpparibas" target="_blank" rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full transition hover:scale-110"
              style={{ background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}>
              <Instagram size={18} className="text-white" />
            </a>
            <a href="https://twitter.com/bnpparibas" target="_blank" rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-black transition hover:scale-110">
              <Twitter size={18} className="text-white" />
            </a>
            <a href="https://youtube.com/bnpparibas" target="_blank" rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full transition hover:scale-110" style={{ background: "#FF0000" }}>
              <Youtube size={18} className="text-white" />
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-4">© BNP Paribas SA — Banque agréée par l'ACPR<br />Siège social : 16, boulevard des Italiens – 75009 Paris</p>
        </div>
      </div>
    </div>
  );
}

// ── Comptes view ───────────────────────────────────────
function ComptesView({ sub, onSub }: { sub: SubSection; onSub: (s: SubSection) => void }) {
  if (sub === "epargne") return <div className="section-fade"><div className="p-4"><button onClick={() => onSub(null)} className="text-xs font-bold mb-3 flex items-center gap-1" style={{ color: "#00915A" }}>← Retour</button></div><div className="px-4"><EpargnePlacements /></div></div>;
  if (sub === "credits") return <div className="section-fade"><div className="p-4"><button onClick={() => onSub(null)} className="text-xs font-bold mb-3 flex items-center gap-1" style={{ color: "#00915A" }}>← Retour</button></div><div className="px-4"><CreditsPrets /></div></div>;

  return (
    <div className="flex flex-col gap-4 px-4 pt-4 section-fade">
      <h2 className="font-bold text-lg text-gray-800">Mes Comptes</h2>
      <div className="px-0">
        <ComptesCartes />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Épargne & Placements", emoji: "💰", key: "epargne" as SubSection, color: "#00915A" },
          { label: "Crédits & Prêts", emoji: "🏠", key: "credits" as SubSection, color: "#1565c0" },
        ].map((item, i) => (
          <button
            key={i}
            onClick={() => onSub(item.key)}
            className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition"
          >
            <span className="text-3xl">{item.emoji}</span>
            <p className="text-xs font-bold text-gray-700 text-center">{item.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Vous view ──────────────────────────────────────────
function VousView({ sub, onSub }: { sub: SubSection; onSub: (s: SubSection) => void }) {
  if (sub === "assurances") return <div className="section-fade"><div className="px-4 pt-4"><button onClick={() => onSub(null)} className="text-xs font-bold mb-3 flex items-center gap-1" style={{ color: "#00915A" }}>← Retour</button><AssurancesSecurite /></div></div>;
  if (sub === "cadeaux") return <div className="section-fade"><div className="px-4 pt-4"><button onClick={() => onSub(null)} className="text-xs font-bold mb-3 flex items-center gap-1" style={{ color: "#00915A" }}>← Retour</button><EspaceCadeaux /></div></div>;

  return (
    <div className="flex flex-col gap-4 px-4 pt-4 section-fade">
      <h2 className="font-bold text-lg text-gray-800">Mon Espace</h2>
      <ProfilParametres />
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Assurances & Sécurité", emoji: "🛡️", key: "assurances" as SubSection },
          { label: "Espace Cadeaux", emoji: "🎁", key: "cadeaux" as SubSection },
        ].map((item, i) => (
          <button
            key={i}
            onClick={() => onSub(item.key)}
            className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition"
          >
            <span className="text-3xl">{item.emoji}</span>
            <p className="text-xs font-bold text-gray-700 text-center">{item.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Main Dashboard ──────────────────────────────────────
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
    <div className="min-h-screen flex flex-col" style={{ background: "#f4f6f8" }}>
      {/* ── Top navbar ── */}
      <header className="sticky top-0 z-40 flex items-center justify-between px-4 py-3 shadow-md" style={{ background: "#00915A" }}>
        <div className="flex items-center gap-3">
          <img src={bnpLogo} alt="BNP Paribas" className="w-9 h-9 rounded-xl" />
          <div>
            <p className="text-white font-bold text-sm leading-tight">BNP Paribas</p>
            <p className="text-white/70 text-xs">M. Chavet Alain</p>
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

      {/* ── Hamburger menu ── */}
      {hamburgerOpen && (
        <HamburgerMenu onClose={() => setHamburgerOpen(false)} onNavigate={handleHamburgerNav} />
      )}

      {/* ── Slide-in panel ── */}
      {activePanel !== "none" && (
        <div className="fixed inset-0 z-40 flex" style={{ top: 60 }}>
          <div className="absolute inset-0 bg-black/30" onClick={() => setActivePanel("none")} />
          <div className="relative z-10 ml-auto w-full max-w-sm bg-white h-full shadow-2xl overflow-y-auto section-fade">
            <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: "#e8f5ee" }}>
              <h3 className="font-bold text-base" style={{ color: "#00915A" }}>
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

      {/* ── Main content ── */}
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

      {/* ── Bottom navigation ── */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t flex"
        style={{ borderColor: "#e8f5ee", boxShadow: "0 -4px 20px rgba(0,0,0,0.08)" }}>
        {BOTTOM_TABS.map(tab => {
          const active = bottomTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleBottomTab(tab.id)}
              className="flex-1 flex flex-col items-center justify-center py-2.5 gap-0.5 transition-all"
              style={{ color: active ? "#00915A" : "#adb5bd" }}
            >
              <div className={`p-1.5 rounded-xl transition-all ${active ? "bg-green-50" : ""}`}>
                {tab.icon}
              </div>
              <span className={`text-xs font-${active ? "bold" : "medium"}`}>{tab.label}</span>
              {active && <span className="w-1 h-1 rounded-full" style={{ background: "#00915A" }} />}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
