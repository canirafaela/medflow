import { useState } from "react";

// ─── Icons ────────────────────────────────────────────────────────────────────
const Icon = ({ d, size = 22, stroke = "currentColor", fill = "none", strokeWidth = 2, children, viewBox = "0 0 24 24" }) => (
  <svg width={size} height={size} viewBox={viewBox} fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    {d ? <path d={d} /> : children}
  </svg>
);

const HomeIcon = ({ color = "#aab4c0" }) => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const PatientsIcon = ({ color = "#aab4c0" }) => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const RoutesIcon = ({ color = "#aab4c0" }) => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" />
  </svg>
);
const FinanceIcon = ({ color = "#aab4c0" }) => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);
const ChevronRight = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#c8d4e0" strokeWidth={2.5} strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>
);
const ChevronLeft = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth={2.5} strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
);
const SearchIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#aab4c0" strokeWidth={2} strokeLinecap="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
);
const SyncIcon = () => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="#5ec8d8" strokeWidth={2} strokeLinecap="round">
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);
const PlusIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
);
const CheckIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={3} strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
);
const ClockIcon = () => (
  <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="#aab4c0" strokeWidth={2} strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
);
const CloudIcon = () => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth={2} strokeLinecap="round">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
);
const PinIcon = () => (
  <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="#3aadbe" strokeWidth={2} strokeLinecap="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" />
  </svg>
);
const WaveIcon = () => (
  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" stroke="#5ec8d8" strokeWidth={2.5} strokeLinecap="round">
    <polyline points="2,18 8,10 14,20 20,8 26,16 30,12" />
  </svg>
);

// ─── Styles (inline objects) ───────────────────────────────────────────────────
const s = {
  screen: { minHeight: 700, background: "#f4f7f9", display: "flex", flexDirection: "column" },
  scrollArea: { overflowY: "auto", flex: 1, paddingBottom: 12 },

  // Bottom Nav
  bottomNav: { background: "white", borderTop: "1px solid #eef2f7", display: "flex", padding: "10px 0 6px", flexShrink: 0 },
  navItem: (active) => ({ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3, cursor: "pointer", padding: "4px 0" }),
  navLabel: (active) => ({ fontSize: 11, fontWeight: 600, color: active ? "#5ec8d8" : "#aab4c0" }),

  // Page header
  pageHeader: { background: "white", padding: "16px 20px", display: "flex", alignItems: "center", gap: 12, borderBottom: "1px solid #eef2f7", flexShrink: 0 },
  backBtn: { width: 36, height: 36, borderRadius: 10, background: "#f4f7f9", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, border: "none" },
  pageTitle: { fontSize: 18, fontWeight: 700, color: "#1a1a2e", flex: 1, margin: 0 },
  pageAction: { width: 36, height: 36, borderRadius: 10, background: "#5ec8d8", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, border: "none" },
  syncBtn: { display: "flex", alignItems: "center", gap: 6, padding: "8px 12px", border: "1.5px solid #e0e8f0", borderRadius: 10, fontSize: 12, fontWeight: 600, color: "#5ec8d8", cursor: "pointer", background: "white", fontFamily: "Nunito, sans-serif" },

  // Badges
  badge: (type) => {
    const map = {
      active: { background: "#e8faf2", color: "#1d9e75" },
      inactive: { background: "#f0f4f8", color: "#8a9ab0" },
      visit: { background: "#fff3e0", color: "#d48c20" },
      done: { background: "#f0f4f8", color: "#8a9ab0" },
    };
    return { padding: "4px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700, whiteSpace: "nowrap", ...map[type] };
  },
};

// ─── Bottom Nav Component ──────────────────────────────────────────────────────
function BottomNav({ active, navigate }) {
  const items = [
    { id: "home", label: "Home", Icon: HomeIcon },
    { id: "patients", label: "Pacientes", Icon: PatientsIcon },
    { id: "routes", label: "Rotas", Icon: RoutesIcon },
    { id: "finance", label: "Financeiro", Icon: FinanceIcon },
  ];
  return (
    <div style={s.bottomNav}>
      {items.map(({ id, label, Icon }) => (
        <div key={id} style={s.navItem(active === id)} onClick={() => navigate(id)}>
          <Icon color={active === id ? "#5ec8d8" : "#aab4c0"} />
          <span style={s.navLabel(active === id)}>{label}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Login Screen ──────────────────────────────────────────────────────────────
function LoginScreen({ navigate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 32px", minHeight: 700 }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 8 }}>
          <WaveIcon />
          <span style={{ fontSize: 26, fontWeight: 800, color: "#1a1a2e" }}>MedFlow</span>
        </div>
        <p style={{ fontSize: 13, color: "#8a9ab0", margin: 0 }}>Gestão de atendimentos domiciliares</p>
      </div>

      <div style={{ width: "100%", marginBottom: 16 }}>
        <label style={{ fontSize: 13, fontWeight: 600, color: "#555", marginBottom: 6, display: "block" }}>E-mail</label>
        <input
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "14px 16px", border: "1.5px solid #e0e8f0", borderRadius: 14, fontSize: 15, color: "#1a1a2e", background: "#f8fbfd", outline: "none", fontFamily: "Nunito, sans-serif", boxSizing: "border-box" }}
        />
      </div>

      <div style={{ width: "100%", marginBottom: 16 }}>
        <label style={{ fontSize: 13, fontWeight: 600, color: "#555", marginBottom: 6, display: "block" }}>Senha</label>
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "14px 16px", border: "1.5px solid #e0e8f0", borderRadius: 14, fontSize: 15, color: "#1a1a2e", background: "#f8fbfd", outline: "none", fontFamily: "Nunito, sans-serif", boxSizing: "border-box" }}
        />
      </div>

      <button
        onClick={() => navigate("home")}
        style={{ width: "100%", padding: 16, background: "linear-gradient(135deg, #5ec8d8, #3db5c7)", border: "none", borderRadius: 16, color: "#fff", fontSize: 16, fontWeight: 700, cursor: "pointer", marginTop: 8, fontFamily: "Nunito, sans-serif", letterSpacing: "0.3px" }}
      >
        Entrar
      </button>

      <span style={{ marginTop: 20, color: "#5ec8d8", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
        Esqueci minha senha
      </span>
    </div>
  );
}

// ─── Home Screen ───────────────────────────────────────────────────────────────
function HomeScreen({ navigate }) {
  const menuItems = [
    {
      id: "patients", title: "Pacientes", desc: "Gerencie seus pacientes",
      iconBg: "#eef6ff",
      icon: <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#3aadbe" strokeWidth={2} strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
    },
    {
      id: "routes", title: "Rotas", desc: "Veja a rota do dia",
      iconBg: "#fff8e6",
      icon: <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#d48c20" strokeWidth={2} strokeLinecap="round"><path d="M3 11l19-9-9 19-2-8-8-2z" /></svg>
    },
    {
      id: "finance", title: "Financeiro", desc: "Resumo do mês",
      iconBg: "#edfff5",
      icon: <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#1d9e75" strokeWidth={2} strokeLinecap="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
    },
  ];

  return (
    <div style={s.screen}>
      {/* Header */}
      <div style={{ padding: "20px 20px 16px", background: "linear-gradient(135deg, #5ec8d8, #3aadbe)", color: "white", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 13, opacity: 0.85, fontWeight: 500 }}>Bom dia,</div>
            <div style={{ fontSize: 20, fontWeight: 700, marginTop: 2 }}>Dr(a). Carla Mendes</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <CloudIcon />
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, color: "white", border: "2px solid rgba(255,255,255,0.5)" }}>CM</div>
          </div>
        </div>
      </div>

      <div style={{ padding: 16, flex: 1, overflowY: "auto" }}>
        {/* Menu Cards */}
        <div style={{ background: "white", borderRadius: 18, overflow: "hidden", border: "1px solid #eef2f7" }}>
          {menuItems.map((item, i) => (
            <div
              key={item.id}
              onClick={() => navigate(item.id)}
              style={{ display: "flex", alignItems: "center", padding: "18px 20px", gap: 16, cursor: "pointer", borderBottom: i < menuItems.length - 1 ? "1px solid #f4f7f9" : "none" }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 12, background: item.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {item.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#1a1a2e" }}>{item.title}</div>
                <div style={{ fontSize: 12, color: "#8a9ab0", marginTop: 2 }}>{item.desc}</div>
              </div>
              <ChevronRight />
            </div>
          ))}
        </div>

        {/* Today summary */}
        <div style={{ marginTop: 16, background: "linear-gradient(135deg,#e8fdf6,#d4f5e9)", borderRadius: 16, padding: 16, border: "1px solid #a8e8d0" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#1d9e75", marginBottom: 4 }}>HOJE · Segunda-Feira, 23 Mar</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#1a1a2e" }}>3 atendimentos</div>
          <div style={{ fontSize: 13, color: "#5a7a6e", marginTop: 4 }}>1 concluído · 2 pendentes</div>
        </div>
      </div>

      <BottomNav active="home" navigate={navigate} />
    </div>
  );
}

// ─── Patients Screen ───────────────────────────────────────────────────────────
const PATIENTS = [
  { initials: "MS", name: "Maria Silva", addr: "Rua das Flores, 123 - São Paulo, SP", freq: "3x por semana", status: "active", avatarBg: "#dff3f6", avatarColor: "#3aadbe" },
  { initials: "JP", name: "João Pereira", addr: "Av. Brasil, 456 - São Paulo, SP", freq: "1x por semana", status: "active", avatarBg: "#fff0e0", avatarColor: "#d48c20" },
  { initials: "AS", name: "Ana Souza", addr: "Rua do Sol, 789 - São Paulo, SP", freq: "Diário", status: "inactive", avatarBg: "#f0e8ff", avatarColor: "#7c56cc" },
];

function PatientsScreen({ navigate }) {
  const [search, setSearch] = useState("");
  const filtered = PATIENTS.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={s.screen}>
      <div style={s.pageHeader}>
        <button style={s.backBtn} onClick={() => navigate("home")}><ChevronLeft /></button>
        <span style={s.pageTitle}>Pacientes</span>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button style={s.syncBtn}><SyncIcon /> Mera</button>
          <button style={s.pageAction}><PlusIcon /></button>
        </div>
      </div>

      <div style={s.scrollArea}>
        {/* Search */}
        <div style={{ margin: 16, background: "white", borderRadius: 14, display: "flex", alignItems: "center", padding: "12px 16px", gap: 10, border: "1.5px solid #eef2f7" }}>
          <SearchIcon />
          <input
            placeholder="Buscar paciente..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ border: "none", outline: "none", fontSize: 14, color: "#8a9ab0", fontFamily: "Nunito, sans-serif", background: "transparent", width: "100%" }}
          />
        </div>

        {/* List */}
        <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 10 }}>
          {filtered.map((p) => (
            <div key={p.name} style={{ background: "white", borderRadius: 16, padding: 16, display: "flex", alignItems: "center", gap: 14, border: "1px solid #eef2f7", cursor: "pointer" }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: p.avatarBg, color: p.avatarColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>
                {p.initials}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#1a1a2e" }}>{p.name}</div>
                <div style={{ fontSize: 12, color: "#8a9ab0", marginTop: 2 }}>{p.addr}</div>
                <div style={{ fontSize: 11, color: "#aab4c0", marginTop: 1 }}>{p.freq}</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
                <span style={s.badge(p.status)}>{p.status === "active" ? "Ativo" : "Inativo"}</span>
                <ChevronRight />
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav active="patients" navigate={navigate} />
    </div>
  );
}

// ─── Routes Screen ─────────────────────────────────────────────────────────────
const ROUTES_DATA = [
  { num: 1, name: "Maria Silva", addr: "Rua das Flores, 123", time: "08:00", status: "done" },
  { num: 2, name: "João Pereira", addr: "Av. Brasil, 456", time: "09:30", status: "next" },
  { num: 3, name: "Ana Souza", addr: "Rua do Sol, 789", time: "11:00", status: "pending" },
];

function RoutesScreen({ navigate }) {
  const [routes, setRoutes] = useState(ROUTES_DATA);

  const conclude = (index) => {
    setRoutes(prev => prev.map((r, i) => i === index ? { ...r, status: "done" } : r));
  };

  return (
    <div style={s.screen}>
      <div style={s.pageHeader}>
        <button style={s.backBtn} onClick={() => navigate("home")}><ChevronLeft /></button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#1a1a2e" }}>Rota de hoje</div>
          <div style={{ fontSize: 12, color: "#8a9ab0", fontWeight: 500, marginTop: 1 }}>Segunda-Feira, 23 de Março</div>
        </div>
      </div>

      <div style={s.scrollArea}>
        {/* Map placeholder */}
        <div style={{ margin: 16, background: "white", borderRadius: 16, height: 160, border: "1px solid #eef2f7", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #e8f5f8 0%, #d4eef2 40%, #c8e8ed 100%)" }} />
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.2 }} viewBox="0 0 300 160" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#3aadbe" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <line x1="0" y1="80" x2="300" y2="80" stroke="#3aadbe" strokeWidth="1" />
            <line x1="150" y1="0" x2="150" y2="160" stroke="#3aadbe" strokeWidth="1" />
          </svg>
          <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <PinIcon />
            <span style={{ fontSize: 12, fontWeight: 600, color: "#5e7a88" }}>Mapa da rota</span>
          </div>
        </div>

        {/* Route list */}
        <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 10 }}>
          {routes.map((r, i) => (
            <div key={r.name} style={{ background: "white", borderRadius: 16, padding: 16, display: "flex", alignItems: "center", gap: 14, border: r.status === "next" ? "1.5px solid #5ec8d8" : "1px solid #eef2f7", opacity: r.status === "pending" ? 0.7 : 1 }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, flexShrink: 0,
                background: r.status === "done" ? "#1d9e75" : r.status === "next" ? "#5ec8d8" : "#e8f0f6",
                color: r.status === "done" || r.status === "next" ? "white" : "#8a9ab0"
              }}>
                {r.status === "done" ? <CheckIcon /> : r.num}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: r.status === "done" ? "#aab4c0" : "#1a1a2e", textDecoration: r.status === "done" ? "line-through" : "none" }}>{r.name}</div>
                <div style={{ fontSize: 12, color: "#8a9ab0", marginTop: 2 }}>{r.addr}</div>
                <div style={{ fontSize: 11, color: "#aab4c0", marginTop: 2, display: "flex", alignItems: "center", gap: 3 }}>
                  <ClockIcon /> {r.time}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end" }}>
                {r.status === "done" && <span style={s.badge("done")}>Concluído</span>}
                {r.status === "next" && (
                  <>
                    <span style={s.badge("visit")}>A visitar</span>
                    <button onClick={() => conclude(i)} style={{ padding: "6px 12px", border: "1.5px solid #5ec8d8", borderRadius: 10, fontSize: 12, fontWeight: 700, color: "#5ec8d8", background: "white", cursor: "pointer", fontFamily: "Nunito, sans-serif" }}>Concluir</button>
                  </>
                )}
                {r.status === "pending" && <span style={s.badge("inactive")}>Pendente</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav active="routes" navigate={navigate} />
    </div>
  );
}

// ─── Finance Screen ────────────────────────────────────────────────────────────
const TRANSACTIONS = [
  { initials: "MS", name: "Maria Silva", date: "23 Mar", value: "R$ 150", status: "active", avatarBg: "#dff3f6", avatarColor: "#3aadbe" },
  { initials: "JP", name: "João Pereira", date: "22 Mar", value: "R$ 150", status: "visit", avatarBg: "#fff0e0", avatarColor: "#d48c20" },
  { initials: "AS", name: "Ana Souza", date: "21 Mar", value: "R$ 150", status: "active", avatarBg: "#f0e8ff", avatarColor: "#7c56cc" },
  { initials: "MS", name: "Maria Silva", date: "20 Mar", value: "R$ 150", status: "active", avatarBg: "#dff3f6", avatarColor: "#3aadbe" },
];

const BARS = [
  { label: "Sem 1", height: "75%", active: false },
  { label: "Sem 2", height: "90%", active: true },
  { label: "Sem 3", height: "65%", active: false },
  { label: "Sem 4", height: "55%", active: false },
];

function FinanceScreen({ navigate }) {
  const [tab, setTab] = useState("all");

  const filtered = TRANSACTIONS.filter(t => {
    if (tab === "paid") return t.status === "active";
    if (tab === "pend") return t.status === "visit";
    return true;
  });

  return (
    <div style={s.screen}>
      <div style={{ ...s.pageHeader, justifyContent: "space-between" }}>
        <button style={s.backBtn} onClick={() => navigate("home")}><ChevronLeft /></button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#1a1a2e" }}>Financeiro</div>
          <div style={{ fontSize: 12, color: "#8a9ab0", fontWeight: 500, marginTop: 2 }}>Março de 2026</div>
        </div>
        <button style={s.syncBtn}><SyncIcon /> Mera</button>
      </div>

      <div style={s.scrollArea}>
        {/* Metrics */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, padding: 16 }}>
          {[
            { icon: "💰", label: "Receita", value: "R$ 4.800" },
            { icon: "📋", label: "Atend.", value: "32" },
            { icon: "📈", label: "Ticket", value: "R$ 150" },
          ].map(m => (
            <div key={m.label} style={{ background: "white", borderRadius: 14, padding: "14px 12px", border: "1px solid #eef2f7" }}>
              <div style={{ fontSize: 18, marginBottom: 6 }}>{m.icon}</div>
              <div style={{ fontSize: 10, color: "#8a9ab0", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.3px" }}>{m.label}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#1a1a2e", marginTop: 3 }}>{m.value}</div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div style={{ margin: "0 16px 16px", background: "white", borderRadius: 16, padding: 16, border: "1px solid #eef2f7" }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1a2e", marginBottom: 14 }}>Receita por semana</div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 100 }}>
            {BARS.map(b => (
              <div key={b.label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, height: "100%", justifyContent: "flex-end" }}>
                <div style={{ width: "100%", borderRadius: "8px 8px 0 0", background: b.active ? "#5ec8d8" : "#b8e8f0", height: b.height, minHeight: 20 }} />
                <span style={{ fontSize: 11, color: "#8a9ab0", fontWeight: 500 }}>{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", margin: "0 16px 16px", gap: 8 }}>
          {[["all", "Todos"], ["paid", "Pagos"], ["pend", "Pendentes"]].map(([id, label]) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              style={{ padding: "8px 18px", borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "Nunito, sans-serif", border: tab === id ? "none" : "1px solid #eef2f7", background: tab === id ? "#5ec8d8" : "white", color: tab === id ? "white" : "#8a9ab0" }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Transaction list */}
        <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 10 }}>
          {filtered.map((t, i) => (
            <div key={i} style={{ background: "white", borderRadius: 14, padding: "14px 16px", border: "1px solid #eef2f7", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: t.avatarBg, color: t.avatarColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
                {t.initials}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1a2e" }}>{t.name}</div>
                <div style={{ fontSize: 12, color: "#8a9ab0" }}>{t.date} · {t.value}</div>
              </div>
              <span style={s.badge(t.status)}>{t.status === "active" ? "Pago" : "Pendente"}</span>
            </div>
          ))}
        </div>
      </div>

      <BottomNav active="finance" navigate={navigate} />
    </div>
  );
}

// ─── Phone Frame ───────────────────────────────────────────────────────────────
function PhoneFrame({ children }) {
  return (
    <div style={{ width: 375, background: "#fff", borderRadius: 40, overflow: "hidden", border: "8px solid #1a1a2e", boxShadow: "0 24px 70px rgba(0,0,0,0.28)", flexShrink: 0 }}>
      <div style={{ background: "#1a1a2e", height: 10, borderRadius: "32px 32px 0 0" }} />
      <div style={{ background: "#1a1a2e", display: "flex", justifyContent: "center", padding: "4px 0 0" }}>
        <div style={{ width: 100, height: 26, background: "#1a1a2e", borderRadius: "0 0 14px 14px", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#2a2a3e" }} />
          <div style={{ width: 40, height: 6, borderRadius: 3, background: "#2a2a3e" }} />
        </div>
      </div>
      <div style={{ background: "#f8fafb", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4px 20px", fontSize: 11, fontWeight: 600, color: "#333", borderBottom: "1px solid #f0f0f0" }}>
        <span>9:41</span>
        <span style={{ display: "flex", gap: 5, alignItems: "center" }}>
          <svg width={14} height={10} viewBox="0 0 14 10">
            <rect x="0" y="4" width="2" height="6" rx="1" fill="#333" />
            <rect x="3" y="2.5" width="2" height="7.5" rx="1" fill="#333" />
            <rect x="6" y="1" width="2" height="9" rx="1" fill="#333" />
            <rect x="9" y="0" width="2" height="10" rx="1" fill="#333" />
          </svg>
          <svg width={16} height={10} viewBox="0 0 16 10">
            <rect x="0.5" y="0.5" width="13" height="9" rx="2" fill="none" stroke="#333" strokeWidth="1" />
            <rect x="14" y="3" width="1.5" height="4" rx="0.75" fill="#333" />
            <rect x="1.5" y="1.5" width="9" height="7" rx="1.5" fill="#333" />
          </svg>
        </span>
      </div>
      {children}
    </div>
  );
}

// ─── App Root ──────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState("login");

  const SCREENS = ["login", "home", "patients", "routes", "finance"];
  const LABELS = ["Login", "Home", "Pacientes", "Rotas", "Financeiro"];

  const renderScreen = () => {
    switch (screen) {
      case "login":    return <LoginScreen navigate={setScreen} />;
      case "home":     return <HomeScreen navigate={setScreen} />;
      case "patients": return <PatientsScreen navigate={setScreen} />;
      case "routes":   return <RoutesScreen navigate={setScreen} />;
      case "finance":  return <FinanceScreen navigate={setScreen} />;
      default:         return <LoginScreen navigate={setScreen} />;
    }
  };

  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", minHeight: "100vh", background: "#e8edf2", display: "flex", flexDirection: "column", alignItems: "center", padding: "2rem 1rem" }}>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      <h1 style={{ fontSize: 22, fontWeight: 800, color: "#1a1a2e", marginBottom: 6 }}>MedFlow</h1>
      <p style={{ fontSize: 14, color: "#8a9ab0", marginBottom: "1.5rem" }}>Protótipo Mobile</p>

      {/* Screen selector */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: "1.5rem" }}>
        {SCREENS.map((id, i) => (
          <button
            key={id}
            onClick={() => setScreen(id)}
            style={{ padding: "8px 18px", borderRadius: 20, border: "2px solid #5ec8d8", background: screen === id ? "#5ec8d8" : "white", color: screen === id ? "white" : "#5ec8d8", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "Nunito, sans-serif" }}
          >
            {LABELS[i]}
          </button>
        ))}
      </div>

      {/* Phone */}
      <PhoneFrame>
        {renderScreen()}
      </PhoneFrame>
    </div>
  );
}
