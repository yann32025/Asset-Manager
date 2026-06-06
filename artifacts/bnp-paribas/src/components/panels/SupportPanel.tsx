import { BookOpen, MessageCircle, Phone, ChevronRight, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "Mon compte est bloqué, que faire ?", a: "En cas de compte bloqué, contactez votre conseiller au 3009 ou rendez-vous en agence avec une pièce d'identité. Un déblocage peut prendre 24 à 72h." },
  { q: "Comment changer mon mot de passe ?", a: "Accédez à Profil & Paramètres > Sécurité et connexion. Vous pouvez réinitialiser votre code depuis l'onglet correspondant." },
  { q: "Comment faire opposition à ma carte ?", a: "Appelez le +33 9 69 37 00 00 (24h/24, 7j/7) ou utilisez le bouton 'Faire opposition' dans la section Assurances & Sécurité." },
  { q: "Comment effectuer un virement international ?", a: "Votre compte doit être actif. Allez dans Virements & Paiements et renseignez l'IBAN international du bénéficiaire." },
];

export default function SupportPanel() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [chatMsg, setChatMsg] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Bonjour M. Chavet ! Comment puis-je vous aider ?" }
  ]);

  function sendMsg() {
    if (!chatMsg.trim()) return;
    setMessages(m => [
      ...m,
      { from: "user", text: chatMsg },
      { from: "bot", text: "Merci pour votre message. Un conseiller vous répondra dans les meilleurs délais. Pour une urgence, appelez le 3009." },
    ]);
    setChatMsg("");
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Quick actions */}
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={() => setChatOpen(v => !v)}
          className="flex flex-col items-center gap-1 p-3 rounded-xl bg-white shadow-sm hover:shadow transition"
        >
          <MessageCircle size={22} style={{ color: "#00915A" }} />
          <span className="text-xs font-semibold text-gray-700">Chat en ligne</span>
        </button>
        <a href="tel:3009" className="flex flex-col items-center gap-1 p-3 rounded-xl bg-white shadow-sm hover:shadow transition">
          <Phone size={22} style={{ color: "#00915A" }} />
          <span className="text-xs font-semibold text-gray-700">Contacter</span>
        </a>
        <button className="flex flex-col items-center gap-1 p-3 rounded-xl bg-white shadow-sm hover:shadow transition">
          <BookOpen size={22} style={{ color: "#00915A" }} />
          <span className="text-xs font-semibold text-gray-700">Aide & FAQ</span>
        </button>
      </div>

      {/* Chat */}
      {chatOpen && (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-4 py-3 flex items-center gap-2" style={{ background: "#00915A" }}>
            <MessageCircle size={16} className="text-white" />
            <p className="text-white font-bold text-sm">Chat BNP Paribas</p>
            <span className="ml-auto text-xs text-white/70">En ligne</span>
          </div>
          <div className="p-3 flex flex-col gap-2 max-h-48 overflow-y-auto">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className="max-w-[80%] rounded-xl px-3 py-2 text-xs"
                  style={m.from === "user"
                    ? { background: "#00915A", color: "white" }
                    : { background: "#f0faf5", color: "#333" }
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t flex gap-2" style={{ borderColor: "#e8f5ee" }}>
            <input
              type="text"
              value={chatMsg}
              onChange={e => setChatMsg(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMsg()}
              placeholder="Votre message…"
              className="flex-1 border rounded-lg px-3 py-2 text-xs outline-none"
              style={{ borderColor: "#e0e0e0" }}
            />
            <button
              onClick={sendMsg}
              className="px-3 py-2 rounded-lg text-white text-xs font-bold"
              style={{ background: "#00915A" }}
            >
              Envoyer
            </button>
          </div>
        </div>
      )}

      {/* FAQ */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="flex items-center gap-2 px-4 pt-4 pb-2">
          <HelpCircle size={18} style={{ color: "#00915A" }} />
          <p className="font-bold text-gray-800">Questions fréquentes</p>
        </div>
        {faqs.map((f, i) => (
          <div key={i} className="border-b border-gray-50 last:border-0">
            <button
              className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition"
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <p className="text-sm font-medium text-gray-800 pr-3">{f.q}</p>
              <ChevronRight
                size={16}
                className="text-gray-400 flex-shrink-0 transition-transform"
                style={{ transform: openFaq === i ? "rotate(90deg)" : "none" }}
              />
            </button>
            {openFaq === i && (
              <div className="px-4 pb-3">
                <p className="text-xs text-gray-500 leading-relaxed">{f.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact info */}
      <div className="rounded-2xl p-4 flex items-center gap-3" style={{ background: "#f0faf5" }}>
        <Phone size={20} style={{ color: "#00915A" }} />
        <div>
          <p className="font-bold text-sm text-gray-800">Service client — 3009</p>
          <p className="text-xs text-gray-500">Lun–Ven 8h–20h · Sam 8h–18h</p>
          <p className="text-xs text-gray-500">Appel gratuit depuis la France</p>
        </div>
      </div>
    </div>
  );
}
