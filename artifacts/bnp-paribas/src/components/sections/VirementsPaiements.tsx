import { useState } from "react";
import { Send, AlertCircle, CheckCircle2, Lock } from "lucide-react";

export default function VirementsPaiements() {
  const [beneficiaire, setBeneficiaire] = useState("");
  const [iban, setIban] = useState("");
  const [montant, setMontant] = useState("");
  const [motif, setMotif] = useState("");
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
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-lg text-gray-800">Virements & Paiements</h2>
        <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center text-center gap-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "#f0faf5" }}>
            <CheckCircle2 size={36} style={{ color: "#00915A" }} />
          </div>
          <div>
            <p className="font-bold text-gray-800 text-lg">Demande enregistrée</p>
            <p className="text-sm text-gray-500 mt-1">Votre virement de <strong>{montant} €</strong> vers <strong>{beneficiaire}</strong> est en attente de validation par votre conseiller.</p>
          </div>
          <div className="w-full rounded-xl p-3 flex items-start gap-2" style={{ background: "#fff8e6" }}>
            <AlertCircle size={16} className="text-yellow-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-yellow-700">Votre compte est actuellement bloqué. Les virements seront traités dès la levée du blocage.</p>
          </div>
          <button
            onClick={() => { setSent(false); setBeneficiaire(""); setIban(""); setMontant(""); setMotif(""); }}
            className="px-6 py-2.5 rounded-xl text-white font-bold text-sm"
            style={{ background: "#00915A" }}
          >
            Nouveau virement
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-lg text-gray-800">Virements & Paiements</h2>

      {/* Warning */}
      <div className="rounded-xl p-3 flex items-start gap-2" style={{ background: "#fff8e6" }}>
        <Lock size={15} className="text-yellow-600 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-yellow-700">Compte bloqué — les virements sont enregistrés mais traités après levée du blocage.</p>
      </div>

      {/* Form */}
      <form onSubmit={handleVirement} className="bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-4">
        <p className="font-bold text-gray-800">Effectuer un virement</p>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Bénéficiaire *</label>
          <input
            type="text"
            value={beneficiaire}
            onChange={e => setBeneficiaire(e.target.value)}
            placeholder="Nom du bénéficiaire"
            className="border rounded-xl px-3 py-2.5 text-sm outline-none focus:border-green-500 transition"
            style={{ borderColor: "#e0e0e0" }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">IBAN *</label>
          <input
            type="text"
            value={iban}
            onChange={e => setIban(e.target.value)}
            placeholder="FR76 XXXX XXXX XXXX XXXX XXXX XXX"
            className="border rounded-xl px-3 py-2.5 text-sm outline-none focus:border-green-500 transition font-mono"
            style={{ borderColor: "#e0e0e0" }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Montant (€) *</label>
          <input
            type="number"
            value={montant}
            onChange={e => setMontant(e.target.value)}
            placeholder="0,00"
            min="0.01"
            step="0.01"
            className="border rounded-xl px-3 py-2.5 text-sm outline-none focus:border-green-500 transition"
            style={{ borderColor: "#e0e0e0" }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Motif</label>
          <input
            type="text"
            value={motif}
            onChange={e => setMotif(e.target.value)}
            placeholder="Référence ou motif du virement"
            className="border rounded-xl px-3 py-2.5 text-sm outline-none focus:border-green-500 transition"
            style={{ borderColor: "#e0e0e0" }}
          />
        </div>

        {error && (
          <div className="flex items-center gap-2 text-red-500 text-xs">
            <AlertCircle size={14} />
            {error}
          </div>
        )}

        <button
          type="submit"
          className="w-full py-3 rounded-xl text-white font-bold flex items-center justify-center gap-2 transition active:scale-95"
          style={{ background: "#00915A" }}
        >
          <Send size={16} />
          Valider le virement
        </button>
      </form>

      {/* Quick transfer history */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <p className="font-bold text-gray-800 mb-3">Bénéficiaires enregistrés</p>
        <p className="text-sm text-gray-400 text-center py-4">Aucun bénéficiaire enregistré.</p>
      </div>
    </div>
  );
}
