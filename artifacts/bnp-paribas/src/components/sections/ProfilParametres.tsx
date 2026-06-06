import { useState, useRef } from "react";
import { Camera, User, Mail, MapPin, Bell, Lock, Globe, ChevronRight, LogOut, Edit2 } from "lucide-react";
import { useLocation } from "wouter";

export default function ProfilParametres() {
  const [, navigate] = useLocation();
  const [photo, setPhoto] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  function handlePhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhoto(url);
    }
  }

  const params = [
    { icon: <Bell size={18} />, label: "Notifications et alertes", value: "Activées" },
    { icon: <Lock size={18} />, label: "Sécurité et connexion", value: "Code secret" },
    { icon: <Globe size={18} />, label: "Langue de l'application", value: "Français" },
    { icon: <Mail size={18} />, label: "Préférences email", value: "Configurées" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-lg text-gray-800">Profil & Paramètres</h2>

      {/* Profile card */}
      <div className="bg-white rounded-2xl p-5 shadow-sm flex flex-col items-center gap-3">
        <div className="relative">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center overflow-hidden shadow-md cursor-pointer"
            style={{ background: photo ? "transparent" : "linear-gradient(135deg, #003082, #006BB6)" }}
            onClick={() => fileRef.current?.click()}
          >
            {photo
              ? <img src={photo} alt="Profil" className="w-full h-full object-cover" />
              : <User size={40} className="text-white" />
            }
          </div>
          <button
            onClick={() => fileRef.current?.click()}
            className="absolute bottom-0 right-0 w-8 h-8 rounded-full flex items-center justify-center shadow-md border-2 border-white"
            style={{ background: "#006BB6" }}
          >
            <Camera size={14} className="text-white" />
          </button>
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handlePhoto} />
        </div>
        <p className="text-xs text-gray-400">Appuyez pour modifier la photo</p>

        <div className="text-center">
          <p className="font-bold text-xl text-gray-800">M. Cissoko Mohamed</p>
          <p className="text-sm text-gray-500 mt-0.5">Identifiant : Mohamed209</p>
          <span className="inline-block mt-2 text-xs font-bold px-3 py-1 rounded-full" style={{ background: "#e8f4ff", color: "#006BB6" }}>
            Partenariat à CaixaBankNow depuis 2025
          </span>
        </div>
      </div>

      {/* Informations personnelles */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <p className="font-bold text-gray-800">Informations personnelles</p>
          <button className="p-1.5 rounded-full hover:bg-gray-100" style={{ color: "#006BB6" }}>
            <Edit2 size={15} />
          </button>
        </div>
        {[
          { icon: <User size={16} />, label: "Civilité", value: "M." },
          { icon: <User size={16} />, label: "Nom complet", value: "Mr Cissoko Mohamed" },
          { icon: <Mail size={16} />, label: "Email", value: "m.cissoko@email.fr" },
          { icon: <MapPin size={16} />, label: "Adresse", value: "Confidentielle" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-3 border-b border-gray-50 last:border-0">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#e8f4ff", color: "#006BB6" }}>
              {item.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-400">{item.label}</p>
              <p className="text-sm font-medium text-gray-800 truncate">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Paramètres */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <p className="font-bold text-gray-800 px-4 pt-4 pb-2">Paramètres</p>
        {params.map((p, i) => (
          <button key={i} className="w-full flex items-center gap-3 px-4 py-3 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition text-left">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#e8f4ff", color: "#006BB6" }}>
              {p.icon}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">{p.label}</p>
              <p className="text-xs text-gray-400">{p.value}</p>
            </div>
            <ChevronRight size={16} className="text-gray-300" />
          </button>
        ))}
      </div>

      <button
        onClick={() => navigate("/")}
        className="w-full py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition active:scale-95"
        style={{ background: "#fff0f0", color: "#c0392b" }}
      >
        <LogOut size={16} />
        Se déconnecter
      </button>
    </div>
  );
}
