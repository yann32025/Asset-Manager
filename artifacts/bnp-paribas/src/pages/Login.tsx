import { useState } from "react";
import { useLocation } from "wouter";
import bnpLogo from "@assets/IMG_6378_1780731943646.webp";
import bgImage from "@assets/IMG_6603_1780731991597.jpeg";

export default function LoginPage() {
  const [, navigate] = useLocation();
  const [identifiant, setIdentifiant] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [showForgotId, setShowForgotId] = useState(false);
  const [showForgotPw, setShowForgotPw] = useState(false);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (identifiant === "chavet33" && motDePasse === "0202") {
      setError("");
      navigate("/loading");
    } else {
      setError("Identifiant ou mot de passe incorrect.");
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={bgImage}
        alt="BNP Paribas agence"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Green overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Card */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-sm px-4">
        {/* Logo */}
        <div className="mb-6 flex flex-col items-center">
          <img src={bnpLogo} alt="BNP Paribas" className="w-20 h-20 rounded-2xl shadow-lg mb-3" />
          <h1 className="text-white text-2xl font-bold tracking-tight">BNP Paribas</h1>
          <p className="text-white/70 text-sm mt-1">Espace Client Particuliers</p>
        </div>

        {/* Form container — small, semi-transparent */}
        <form
          onSubmit={handleLogin}
          className="w-full rounded-2xl p-6 flex flex-col gap-4"
          style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(14px)", border: "1px solid rgba(255,255,255,0.28)" }}
        >
          {/* Identifiant */}
          <div className="flex flex-col gap-1">
            <label className="text-white/90 text-xs font-semibold uppercase tracking-wider">Identifiant</label>
            <input
              type="text"
              value={identifiant}
              onChange={e => setIdentifiant(e.target.value)}
              placeholder="Votre identifiant"
              className="rounded-lg px-3 py-2 text-sm outline-none text-white placeholder-white/50"
              style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}
              autoComplete="username"
            />
          </div>

          {/* Mot de passe */}
          <div className="flex flex-col gap-1">
            <label className="text-white/90 text-xs font-semibold uppercase tracking-wider">Mot de passe</label>
            <input
              type="password"
              value={motDePasse}
              onChange={e => setMotDePasse(e.target.value)}
              placeholder="Votre mot de passe"
              className="rounded-lg px-3 py-2 text-sm outline-none text-white placeholder-white/50"
              style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}
              autoComplete="current-password"
            />
          </div>

          {/* Se souvenir + liens */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setRememberMe(r => !r)}>
              {/* Toggle switch */}
              <div
                className="toggle-track flex items-center px-0.5"
                style={{ background: rememberMe ? "#00915A" : "rgba(255,255,255,0.3)" }}
              >
                <div
                  className="toggle-thumb"
                  style={{ transform: rememberMe ? "translateX(20px)" : "translateX(0)" }}
                />
              </div>
              <span className="text-white/80 text-xs">Se souvenir de moi</span>
            </div>
          </div>

          {error && (
            <p className="text-red-300 text-xs text-center">{error}</p>
          )}

          {/* Bouton connexion */}
          <button
            type="submit"
            className="w-full py-2.5 rounded-xl text-white font-bold text-sm transition-all active:scale-95"
            style={{ background: "#00915A", boxShadow: "0 4px 15px rgba(0,145,90,0.5)" }}
          >
            Se connecter
          </button>

          {/* Liens aide */}
          <div className="flex flex-col gap-1.5 items-center mt-1">
            <button
              type="button"
              onClick={() => setShowForgotPw(v => !v)}
              className="text-white/70 text-xs hover:text-white underline underline-offset-2 transition"
            >
              Mot de passe oublié ?
            </button>
            <button
              type="button"
              onClick={() => setShowForgotId(v => !v)}
              className="text-white/70 text-xs hover:text-white underline underline-offset-2 transition"
            >
              Identifiant oublié ?
            </button>
          </div>

          {showForgotPw && (
            <div className="rounded-lg p-3 text-center" style={{ background: "rgba(0,0,0,0.3)" }}>
              <p className="text-white/90 text-xs">Contactez votre conseiller BNP Paribas ou rendez-vous en agence pour réinitialiser votre mot de passe.</p>
            </div>
          )}
          {showForgotId && (
            <div className="rounded-lg p-3 text-center" style={{ background: "rgba(0,0,0,0.3)" }}>
              <p className="text-white/90 text-xs">Votre identifiant vous a été remis lors de l'ouverture de votre compte. Contactez le 3009 pour assistance.</p>
            </div>
          )}
        </form>

        {/* Ouvrir un compte */}
        <button
          type="button"
          className="mt-4 w-full max-w-sm py-2.5 rounded-xl font-bold text-sm transition-all active:scale-95"
          style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.4)", color: "white", backdropFilter: "blur(8px)" }}
        >
          Ouvrir un compte
        </button>

        <p className="text-white/40 text-xs mt-6 text-center">
          © 2026 BNP Paribas SA — Banque agréée par l'ACPR
        </p>
      </div>
    </div>
  );
}
