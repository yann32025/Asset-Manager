import { BookOpen, MessageCircle, User, ChevronRight, HelpCircle, Send } from "lucide-react";
import { useState } from "react";

const FAQS = [
  { q: "Mon compte est bloqué, que faire ?", a: "En cas de compte bloqué, contactez votre conseiller via le chat ou rendez-vous en agence avec une pièce d'identité. Un déblocage peut prendre 24 à 72h ouvrées." },
  { q: "Comment changer mon mot de passe ?", a: "Accédez à Profil & Paramètres > Sécurité et connexion. Vous pouvez réinitialiser votre code depuis l'onglet correspondant." },
  { q: "Comment faire opposition à ma carte ?", a: "Utilisez le bouton 'Faire opposition' dans la section Assurances & Sécurité de votre espace client, disponible à tout moment." },
  { q: "Comment effectuer un virement ?", a: "Votre compte doit être actif. Allez dans l'onglet Virement en bas de l'écran et renseignez les informations du bénéficiaire." },
  { q: "Comment télécharger un relevé de compte ?", a: "Accédez à la section Documents dans le menu hamburger. Vos relevés sont disponibles et téléchargeables en PDF." },
];

export default function SupportPanel() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMsg, setChatMsg] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Bonjour M. Chavet ! Comment puis-je vous aider aujourd'hui ?" }
  ]);

  function sendMsg() {
    if (!chatMsg.trim()) return;
    const userMsg = chatMsg;
    setMessages(m => [
      ...m,
      { from: "user", text: userMsg },
    ]);
    setChatMsg("");
    setTimeout(() => {
      setMessages(m => [
        ...m,
        { from: "bot", text: "Merci pour votre message. Un conseiller va prendre en charge votre demande dans les meilleurs délais." },
      ]);
    }, 800);
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Quick actions */}
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={() => setChatOpen(v => !v)}
          className={`flex flex-col items-center gap-1.5 p-3 rounded-xl shadow-sm transition ${chatOpen ? "shadow-md" : "bg-white hover:shadow"}`}
          style={chatOpen ? { background: "#f0faf5" } : { background: "white" }}
        >
          <MessageCircle size={22} style={{ color: "#00915A" }} />
          <span className="text-xs font-semibold text-gray-700 text-center">Chat en ligne</span>
        </button>
        <button className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-white shadow-sm hover:shadow transition">
          <User size={22} style={{ color: "#00915A" }} />
          <span className="text-xs font-semibold text-gray-700 text-center">Mon conseiller</span>
        </button>
        <button className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-white shadow-sm hover:shadow transition">
          <BookOpen size={22} style={{ color: "#00915A" }} />
          <span className="text-xs font-semibold text-gray-700 text-center">Aide & FAQ</span>
        </button>
      </div>

      {/* Chat window */}
      {chatOpen && (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden section-fade">
          <div className="px-4 py-3 flex items-center gap-2" style={{ background: "#00915A" }}>
            <div className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
            <MessageCircle size={15} className="text-white" />
            <p className="text-white font-bold text-sm">Chat BNP Paribas</p>
            <span className="ml-auto text-xs text-white/70">Conseiller en ligne</span>
          </div>
          <div className="p-3 flex flex-col gap-2 max-h-52 overflow-y-auto">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className="max-w-[80%] rounded-xl px-3 py-2 text-xs leading-relaxed"
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
              className="flex-1 border rounded-xl px-3 py-2 text-xs outline-none"
              style={{ borderColor: "#e0e0e0" }}
            />
            <button
              onClick={sendMsg}
              className="p-2 rounded-xl text-white"
              style={{ background: "#00915A" }}
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Contacter conseiller */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <User size={16} style={{ color: "#00915A" }} />
          <p className="font-bold text-gray-800 text-sm">Contacter votre conseiller</p>
        </div>
        <div className="rounded-xl p-3" style={{ background: "#f0faf5" }}>
          <p className="text-sm font-bold text-gray-800">Marie Dupont</p>
          <p className="text-xs text-gray-500 mt-0.5">Conseillère patrimoniale — Agence Bordeaux Centre</p>
          <div className="flex gap-2 mt-3">
            <button className="flex-1 py-2 rounded-xl text-xs font-bold text-white" style={{ background: "#00915A" }}>
              Envoyer un message
            </button>
            <button className="flex-1 py-2 rounded-xl text-xs font-bold border" style={{ borderColor: "#00915A", color: "#00915A" }}>
              Prendre RDV
            </button>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="flex items-center gap-2 px-4 pt-4 pb-2">
          <HelpCircle size={16} style={{ color: "#00915A" }} />
          <p className="font-bold text-gray-800 text-sm">Questions fréquentes</p>
        </div>
        {FAQS.map((f, i) => (
          <div key={i} className="border-b border-gray-50 last:border-0">
            <button
              className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition"
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <p className="text-xs font-medium text-gray-800 pr-3 leading-snug">{f.q}</p>
              <ChevronRight
                size={15}
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
    </div>
  );
}
