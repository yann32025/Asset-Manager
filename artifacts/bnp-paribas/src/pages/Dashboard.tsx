import { useState } from "react";
import { useLocation } from "wouter";
import bnpLogo from "@assets/IMG_6378_1780731943646.webp";
import {
  CreditCard, PiggyBank, ArrowLeftRight, Landmark, Shield, User,
  Search, Bell, HelpCircle, Home, LogOut, Menu, X,
  Facebook, Youtube, Twitter, Instagram,
  ChevronRight, Lock, AlertCircle, CheckCircle, MessageCircle, Phone, MapPin, BookOpen
} from "lucide-react";
import ComptesCartes from "@/components/sections/ComptesCartes";
import EpargnePlacements from "@/components/sections/EpargnePlacements";
import VirementsPaiements from "@/components/sections/VirementsPaiements";
import CreditsPrets from "@/components/sections/CreditsPrets";
import AssurancesSecurite from "@/components/sections/AssurancesSecurite";
import ProfilParametres from "@/components/sections/ProfilParametres";
import RecherchePanel from "@/components/panels/RecherchePanel";
import NotificationsPanel from "@/components/panels/NotificationsPanel";
import SupportPanel from "@/components/panels/SupportPanel";

type Section = "comptes" | "epargne" | "virements" | "credits" | "assurances" | "profil";
type Panel = "none" | "recherche" | "notifications" | "support";

const SECTIONS: { id: Section; label: string; icon: React.ReactNode }[] = [
  { id: "comptes", label: "Comptes & Cartes", icon: <CreditCard size={20} /> },
  { id: "epargne", label: "Épargne & Placements", icon: <PiggyBank size={20} /> },
  { id: "virements", label: "Virements & Paiements", icon: <ArrowLeftRight size={20} /> },
  { id: "credits", label: "Crédits & Prêts", icon: <Landmark size={20} /> },
  { id: "assurances", label: "Assurances & Sécurité", icon: <Shield size={20} /> },
  { id: "profil", label: "Profil & Paramètres", icon: <User size={20} /> },
];

export default function DashboardPage() {
  const [, navigate] = useLocation();
  const [activeSection, setActiveSection] = useState<Section>("comptes");
  const [activePanel, setActivePanel] = useState<Panel>("none");
  const [menuOpen, setMenuOpen] = useState(false);

  function togglePanel(p: Panel) {
    setActivePanel(prev => prev === p ? "none" : p);
  }

  function renderSection() {
    switch (activeSection) {
      case "comptes": return <ComptesCartes />;
      case "epargne": return <EpargnePlacements />;
      case "virements": return <VirementsPaiements />;
      case "credits": return <CreditsPrets />;
      case "assurances": return <AssurancesSecurite />;
      case "profil": return <ProfilParametres />;
    }
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#f4f6f8" }}>
      {/* Top navbar */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 shadow-md" style={{ background: "#00915A" }}>
        <div className="flex items-center gap-3">
          <img src={bnpLogo} alt="BNP Paribas" className="w-9 h-9 rounded-xl" />
          <div>
            <p className="text-white font-bold text-sm leading-tight">BNP Paribas</p>
            <p className="text-white/70 text-xs">M. Chavet Alain</p>
          </div>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => togglePanel("recherche")}
            className={`p-2 rounded-full transition ${activePanel === "recherche" ? "bg-white/30" : "hover:bg-white/20"}`}
            title="Recherche"
          >
            <Search size={18} className="text-white" />
          </button>
          <button
            onClick={() => togglePanel("notifications")}
            className={`relative p-2 rounded-full transition ${activePanel === "notifications" ? "bg-white/30" : "hover:bg-white/20"}`}
            title="Notifications"
          >
            <Bell size={18} className="text-white" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-400 border border-white" />
          </button>
          <button
            onClick={() => togglePanel("support")}
            className={`p-2 rounded-full transition ${activePanel === "support" ? "bg-white/30" : "hover:bg-white/20"}`}
            title="Support & Aide"
          >
            <HelpCircle size={18} className="text-white" />
          </button>
          <button
            onClick={() => navigate("/")}
            className="p-2 rounded-full hover:bg-white/20 transition"
            title="Déconnexion"
          >
            <LogOut size={18} className="text-white" />
          </button>
        </div>
      </header>

      {/* Panel drawer */}
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

      {/* Account summary banner */}
      <div className="px-4 pt-4 pb-2">
        <div className="rounded-2xl p-4 text-white" style={{ background: "linear-gradient(135deg, #006B42, #00915A)" }}>
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-white/70 text-xs uppercase tracking-wider font-semibold">Compte courant bloqué</p>
              <p className="text-3xl font-bold mt-1">900,0000 €</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full" style={{ background: "rgba(255,80,80,0.25)", color: "#ffaaaa" }}>
                <Lock size={11} /> BLOQUÉ
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/60">
            <span>FR76 3000 4008 0400 0000 0000 000</span>
          </div>
        </div>
      </div>

      {/* Section nav — horizontal scroll */}
      <div className="px-4 pt-2 pb-1 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {SECTIONS.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeSection === s.id
                  ? "text-white shadow-sm"
                  : "text-gray-600 bg-white hover:bg-gray-50"
              }`}
              style={activeSection === s.id ? { background: "#00915A" } : {}}
            >
              {s.icon}
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Section content */}
      <main className="flex-1 px-4 py-3">
        <div className="section-fade" key={activeSection}>
          {renderSection()}
        </div>
      </main>

      {/* Expertise banner */}
      <div className="mx-4 mb-4 rounded-2xl overflow-hidden shadow" style={{ background: "linear-gradient(135deg, #003d26, #00915A)" }}>
        <div className="flex items-center gap-4 p-4">
          <div className="flex-1">
            <p className="text-white/60 text-xs uppercase tracking-widest mb-1">VOTRE EXPERTISE</p>
            <p className="text-white font-bold text-base leading-snug">Un accompagnement sur mesure pour vos projets 2026</p>
            <button className="mt-3 text-xs font-bold px-4 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.2)", color: "white" }}>
              En savoir plus
            </button>
          </div>
          <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center" style={{ background: "rgba(255,255,255,0.1)" }}>
            <img src={bnpLogo} alt="" className="w-14 h-14 opacity-60" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-4 pb-6">
        <div className="rounded-2xl p-4 bg-white shadow-sm">
          <p className="text-xs font-bold mb-3" style={{ color: "#00915A" }}>Retrouvez-nous sur</p>
          <div className="flex gap-3">
            <a href="https://facebook.com/bnpparibas" target="_blank" rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full transition hover:scale-110"
              style={{ background: "#1877F2" }}>
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
              className="flex items-center justify-center w-10 h-10 rounded-full transition hover:scale-110"
              style={{ background: "#FF0000" }}>
              <Youtube size={18} className="text-white" />
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-4">© 2026 BNP Paribas SA — Société anonyme au capital de 2 499 597 122 €<br />Siège social : 16, boulevard des Italiens – 75009 Paris</p>
        </div>
      </footer>
    </div>
  );
}
