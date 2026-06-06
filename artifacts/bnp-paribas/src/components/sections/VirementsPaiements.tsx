import { useState } from "react";
import { Send, AlertCircle, CheckCircle2, Lock, ArrowLeftRight, Users, ChevronDown } from "lucide-react";

const WALLPAPER_STYLE = {
  background: "linear-gradient(160deg, #001f12 0%, #003d26 40%, #006B42 70%, #00915A 100%)",
};

export default function VirementsPaiements() {
  const [beneficiaire, setBeneficiaire] = useState("");
  const [iban, setIban] = useState("");
  const [montant, setMontant] = useState("");
  const [motif, setMotif] = useState("");
  const [typeVir, setTypeVir] = useState<"instantane" | "standard">("standard");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleVirement(e: React.FormEvent) {
    e.preventDefault();
    if (!beneficiaire || !iban || !montant) {
      setError("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    setError("");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="min-h-[60vh] flex flex-col gap-4 pb-6 section-fade">
        <h2 className="font-bold text-lg text-gray-800">Virements & Paiements</h2>
        <div className="rounded-2xl overflow-hidden shadow-xl" style={WALLPAPER_STYLE}>
          <div className="p-8 flex flex-col items-center text-center gap-4">
            <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.2)" }}>
              <CheckCircle2 size={44} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-white text-xl">Demande enregistrée</p>
              <p className="text-white/70 text-sm mt-2 leading-relaxed">
                Votre virement de <span className="text-white font-bold">{montant} €</span> vers <span className="text-white font-bold">{beneficiaire}</span> est en attente.
              </p>
            </div>
            <div className="w-full rounded-xl p-3 flex items-start gap-2" style={{ background: "rgba(255,200,0,0.15)", border: "1px solid rgba(255,200,0,0.3)" }}>
              <AlertCircle size={16} className="text-yellow-300 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-yellow-200">Votre compte est actuellement bloqué. Le virement sera traité dès la levée du blocage.</p>
            </div>
            <button
              onClick={() => { setSent(false); setBeneficiaire(""); setIban(""); setMontant(""); setMotif(""); }}
              className="px-6 py-2.5 rounded-xl font-bold text-sm transition active:scale-95"
              style={{ background: "white", color: "#00915A" }}
            >
              Nouveau virement
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 pb-6 section-fade">
      <h2 className="font-bold text-lg text-gray-800">Virements & Paiements</h2>

      {/* Hero wallpaper section */}
      <div className="rounded-2xl overflow-hidden shadow-xl" style={WALLPAPER_STYLE}>
        <div className="p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.2)" }}>
              <ArrowLeftRight size={20} className="text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-base">Effectuer un virement</p>
              <p className="text-white/60 text-xs">Sécurisé · Rapide · Fiable</p>
            </div>
          </div>

          {/* Lock warning */}
          <div className="rounded-xl p-3 mb-4 flex items-start gap-2" style={{ background: "rgba(255,80,80,0.18)", border: "1px solid rgba(255,100,100,0.3)" }}>
            <Lock size={14} className="text-red-300 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-red-200">Compte bloqué — virement enregistré et traité après déblocage.</p>
          </div>

          {/* Type toggle */}
          <div className="flex gap-2 mb-4 p-1 rounded-xl" style={{ background: "rgba(0,0,0,0.25)" }}>
            <button
              onClick={() => setTypeVir("standard")}
              className="flex-1 py-2 rounded-lg text-xs font-bold transition"
              style={typeVir === "standard" ? { background: "white", color: "#00915A" } : { color: "white" }}
            >
              Standard
            </button>
            <button
              onClick={() => setTypeVir("instantane")}
              className="flex-1 py-2 rounded-lg text-xs font-bold transition"
              style={typeVir === "instantane" ? { background: "white", color: "#00915A" } : { color: "white" }}
            >
              ⚡ Instantané
            </button>
          </div>

          <form onSubmit={handleVirement} className="flex flex-col gap-3">
            {/* Bénéficiaire */}
            <div>
              <label className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1 block">Bénéficiaire *</label>
              <div className="relative">
                <input
                  type="text"
                  value={beneficiaire}
                  onChange={e => setBeneficiaire(e.target.value)}
                  placeholder="Nom du bénéficiaire"
                  className="w-full rounded-xl px-3 py-3 text-sm outline-none text-white placeholder-white/40"
                  style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
                />
                <Users size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40" />
              </div>
            </div>

            {/* IBAN */}
            <div>
              <label className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1 block">IBAN *</label>
              <input
                type="text"
                value={iban}
                onChange={e => setIban(e.target.value)}
                placeholder="FR76 XXXX XXXX XXXX XXXX XXXX XXX"
                className="w-full rounded-xl px-3 py-3 text-sm outline-none text-white placeholder-white/40 font-mono"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
              />
            </div>

            {/* Montant */}
            <div>
              <label className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1 block">Montant (€) *</label>
              <div className="relative">
                <input
                  type="number"
                  value={montant}
                  onChange={e => setMontant(e.target.value)}
                  placeholder="0,00"
                  min="0.01"
                  step="0.01"
                  className="w-full rounded-xl px-3 py-3 text-xl font-bold outline-none text-white placeholder-white/30"
                  style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 font-bold">€</span>
              </div>
            </div>

            {/* Motif */}
            <div>
              <label className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1 block">Motif</label>
              <input
                type="text"
                value={motif}
                onChange={e => setMotif(e.target.value)}
                placeholder="Référence du virement"
                className="w-full rounded-xl px-3 py-3 text-sm outline-none text-white placeholder-white/40"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-300 text-xs">
                <AlertCircle size={14} />
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition active:scale-95 mt-1"
              style={{ background: "white", color: "#00915A" }}
            >
              <Send size={16} />
              Valider le virement
            </button>
          </form>
        </div>
      </div>

      {/* Bénéficiaires enregistrés */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <Users size={16} style={{ color: "#00915A" }} />
          <p className="font-bold text-gray-800">Bénéficiaires enregistrés</p>
        </div>
        <div className="rounded-xl py-6 flex flex-col items-center gap-2" style={{ background: "#f8faf8" }}>
          <span className="text-3xl">👤</span>
          <p className="text-sm text-gray-400">Aucun bénéficiaire enregistré</p>
          <button className="text-xs font-bold px-4 py-1.5 rounded-full mt-1" style={{ background: "#f0faf5", color: "#00915A" }}>
            + Ajouter un bénéficiaire
          </button>
        </div>
      </div>

      {/* Infos frais */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <p className="font-bold text-gray-800 mb-3 text-sm">Frais de virement</p>
        <div className="flex flex-col gap-2">
          {[
            { type: "Virement SEPA standard", frais: "Gratuit" },
            { type: "Virement instantané", frais: "1,00 €" },
            { type: "Virement international (SWIFT)", frais: "À partir de 5,00 €" },
          ].map((f, i) => (
            <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
              <p className="text-xs text-gray-600">{f.type}</p>
              <p className="text-xs font-bold" style={{ color: "#00915A" }}>{f.frais}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
