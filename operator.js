:root {
  --bg: #0b1020;
  --sidebar: #10182b;
  --panel: rgba(255,255,255,.075);
  --panel2: rgba(255,255,255,.105);
  --border: rgba(255,255,255,.13);
  --text: #f5f7fb;
  --muted: #a8b3c7;
  --primary: #6ea8ff;
  --primary2: #b7cdfd;
  --green: #8ee6b3;
  --yellow: #ffd38a;
  --red: #ff9aa8;
  --radius: 22px;
}
* { box-sizing: border-box; }
html, body { margin: 0; min-height: 100%; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: var(--text); background: radial-gradient(circle at 10% 0%, rgba(110,168,255,.28), transparent 32%), linear-gradient(135deg, #080b14, #10182b 54%, #080b14); }
button, input, select { font: inherit; }
a { color: inherit; text-decoration: none; }
.app { min-height: 100vh; display: grid; grid-template-columns: 260px minmax(0, 1fr); gap: 18px; padding: 18px; }
.sidebar { background: rgba(8,11,20,.68); border: 1px solid var(--border); border-radius: 28px; padding: 18px; display: flex; flex-direction: column; backdrop-filter: blur(18px); }
.brand { display: flex; align-items: center; gap: 12px; padding-bottom: 16px; border-bottom: 1px solid var(--border); }
.brand-logo { width: 42px; height: 42px; border-radius: 16px; display: grid; place-items: center; font-weight: 900; background: linear-gradient(135deg, var(--primary), #9bf1d1); color: #071020; }
.brand strong { display: block; }
.brand small { display: block; color: var(--muted); margin-top: 2px; }
.menu { display: flex; flex-direction: column; gap: 7px; padding: 18px 0; flex: 1; }
.menu-item { width: 100%; text-align: left; border: 1px solid transparent; background: transparent; color: var(--muted); padding: 11px 12px; border-radius: 16px; cursor: pointer; }
.menu-item:hover { background: var(--panel); color: var(--text); }
.menu-item.active { background: rgba(110,168,255,.16); border-color: rgba(110,168,255,.28); color: #fff; font-weight: 700; }
.side-footer { color: var(--muted); font-size: 12px; border-top: 1px solid var(--border); padding-top: 14px; }
.main { min-width: 0; background: rgba(8,11,20,.34); border: 1px solid rgba(255,255,255,.08); border-radius: 28px; overflow: hidden; }
.topbar { min-height: 96px; display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 22px 26px; border-bottom: 1px solid var(--border); background: rgba(255,255,255,.04); }
h1, h2, p { margin: 0; }
.topbar h1 { font-size: 28px; letter-spacing: -.04em; }
.topbar p, .muted { color: var(--muted); margin-top: 4px; }
.top-actions { display: flex; gap: 10px; }
.page { display: none; padding: 24px 26px; }
.page.active { display: block; }
.stats { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 16px; margin-bottom: 18px; }
.stats article, .panel, .portal-card { background: var(--panel); border: 1px solid var(--border); border-radius: var(--radius); backdrop-filter: blur(18px); box-shadow: 0 22px 70px rgba(0,0,0,.22); }
.stats article { padding: 18px; }
.stats small { color: var(--muted); font-weight: 700; text-transform: uppercase; letter-spacing: .05em; font-size: 11px; }
.stats strong { display: block; font-size: 34px; line-height: 1; margin-top: 8px; }
.panel { padding: 20px; }
.panel-head { display: flex; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 16px; }
.panel h2 { font-size: 18px; letter-spacing: -.02em; }
.btn { border: 1px solid var(--border); border-radius: 999px; padding: 9px 15px; background: rgba(255,255,255,.05); color: var(--text); cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 8px; }
.btn:hover { background: rgba(255,255,255,.11); }
.btn.primary { background: linear-gradient(135deg, var(--primary), #9bf1d1); color: #071020; border: 0; font-weight: 800; }
.btn.ghost { background: rgba(255,255,255,.05); }
.table-wrap { overflow-x: auto; }
table { width: 100%; border-collapse: collapse; }
th, td { text-align: left; padding: 12px 10px; border-bottom: 1px solid rgba(255,255,255,.09); vertical-align: top; }
th { color: var(--muted); font-size: 12px; text-transform: uppercase; letter-spacing: .05em; }
tr:last-child td { border-bottom: 0; }
.form-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 14px; }
.form-grid label { color: var(--muted); font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .05em; }
input, select { width: 100%; margin-top: 7px; border: 1px solid var(--border); border-radius: 14px; background: rgba(255,255,255,.07); color: var(--text); padding: 11px 12px; outline: none; }
select option { background: #10182b; color: white; }
.form-grid button { align-self: end; }
.mt { margin-top: 18px; }
.card-list { display: grid; gap: 12px; }
.item-card { border: 1px solid var(--border); border-radius: 18px; padding: 14px; background: rgba(255,255,255,.055); }
.item-card strong { display: block; }
.item-card small { color: var(--muted); display: block; margin-top: 3px; }
.status { display: inline-flex; padding: 4px 9px; border-radius: 999px; font-size: 12px; font-weight: 800; background: rgba(142,230,179,.14); color: var(--green); }
.status.draft { background: rgba(255,211,138,.14); color: var(--yellow); }
.status.off { background: rgba(255,154,168,.14); color: var(--red); }
.codebox { overflow-x: auto; background: rgba(0,0,0,.28); border: 1px solid var(--border); border-radius: 18px; padding: 16px; color: #dce8ff; }
.toast { position: fixed; right: 20px; bottom: 20px; background: #121b30; border: 1px solid var(--border); color: var(--text); border-radius: 16px; padding: 12px 15px; opacity: 0; transform: translateY(10px); transition: .18s; pointer-events: none; box-shadow: 0 16px 50px rgba(0,0,0,.32); }
.toast.show { opacity: 1; transform: translateY(0); }

.landing-body { min-height: 100vh; display: grid; place-items: center; padding: 24px; }
.landing { max-width: 920px; width: 100%; text-align: center; }
.brand-mark { width: 72px; height: 72px; margin: 0 auto 18px; border-radius: 26px; display: grid; place-items: center; font-weight: 900; color: #071020; background: linear-gradient(135deg, var(--primary), #9bf1d1); }
.landing h1 { font-size: clamp(34px, 6vw, 64px); letter-spacing: -.06em; }
.landing p { color: var(--muted); margin-top: 8px; }
.portal-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px; margin-top: 30px; }
.portal-card { text-align: left; padding: 24px; transition: .15s; }
.portal-card:hover { transform: translateY(-3px); background: var(--panel2); }
.card-kicker { display: inline-flex; color: var(--primary2); font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: .08em; margin-bottom: 14px; }
.portal-card strong { display: block; font-size: 24px; margin-bottom: 7px; }
.portal-card small { color: var(--muted); font-size: 14px; line-height: 1.5; }
.note { margin-top: 20px; font-size: 13px; }
.note code { color: var(--primary2); }

.student-body { padding: 24px; }
.student-shell { max-width: 1180px; margin: 0 auto; }
.student-hero { display: flex; justify-content: space-between; align-items: flex-start; gap: 18px; background: rgba(255,255,255,.06); border: 1px solid var(--border); border-radius: 30px; padding: 30px; margin-bottom: 18px; }
.student-hero h1 { font-size: clamp(32px, 5vw, 58px); letter-spacing: -.06em; margin-top: 10px; }
.pill { display: inline-flex; border: 1px solid rgba(110,168,255,.35); background: rgba(110,168,255,.14); color: var(--primary2); padding: 6px 11px; border-radius: 999px; font-weight: 800; font-size: 12px; }
.student-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 18px; }

@media (max-width: 900px) {
  .app { grid-template-columns: 1fr; padding: 0; }
  .sidebar { border-radius: 0; }
  .main { border-radius: 0; border-left: 0; border-right: 0; }
  .stats, .portal-grid, .student-grid { grid-template-columns: 1fr; }
  .topbar, .student-hero { flex-direction: column; }
  .form-grid { grid-template-columns: 1fr; }
}
