import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import caixaLogo from "@assets/IMG_6409_1780735695221.png";

export default function LoadingPage() {
  const [, navigate] = useLocation();
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("Connexion sécurisée en cours…");

  useEffect(() => {
    const messages = [
      "Connexion sécurisée en cours…",
      "Vérification de vos accès…",
      "Chargement de votre compte…",
      "Mise à jour du solde…",
      "Bienvenue, M. Cissoko !",
    ];
    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      setProgress(Math.min(step * 22, 100));
      setMessage(messages[Math.min(step - 1, messages.length - 1)]);
      if (step >= 5) {
        clearInterval(interval);
        setTimeout(() => navigate("/dashboard"), 600);
      }
    }, 550);
    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ background: "linear-gradient(135deg, #001f4d 0%, #003082 50%, #006BB6 85%, #009EE0 100%)" }}
    >
      <div className="w-28 h-20 bg-white rounded-3xl shadow-2xl flex items-center justify-center px-3 mb-8">
        <img src={caixaLogo} alt="CaixaBankNow" className="w-full h-full object-contain" />
      </div>
      <h2 className="text-white text-xl font-bold mb-2">CaixaBankNow</h2>
      <p className="text-white/70 text-sm mb-10">Espace Client Particuliers</p>

      <div className="w-72 bg-white/20 rounded-full h-2 overflow-hidden mb-4">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${progress}%`, background: "white" }}
        />
      </div>

      <p className="text-white/80 text-sm font-medium">{message}</p>

      <div className="flex gap-2 mt-6">
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-white/60 animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}
