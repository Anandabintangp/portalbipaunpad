const seed = {
  students: [
    { name: "Aisha Rahman", country: "Malaysia", program: "BIPA Reguler", className: "A1", status: "Aktif" },
    { name: "Daniel Kim", country: "Korea Selatan", program: "BIPA Reguler", className: "A2", status: "Aktif" },
    { name: "Sakura Tanaka", country: "Jepang", program: "BIPA Khusus", className: "B1", status: "Aktif" }
  ],
  grades: [
    { name: "Aisha Rahman", subject: "Bahasa Indonesia Dasar", uts: 88, uas: 91, final: 90, status: "Published" },
    { name: "Daniel Kim", subject: "Percakapan", uts: 82, uas: 87, final: 85, status: "Draft" }
  ],
  certificates: [
    { name: "Aisha Rahman", type: "Sertifikat Kelulusan", status: "Published", link: "#" },
    { name: "Daniel Kim", type: "Transkrip Nilai", status: "Draft", link: "#" }
  ],
  surveys: [
    { title: "Survey Kepuasan Pembelajaran", meta: "Aktif sampai 30 Juli 2026", status: "Published" },
    { title: "Evaluasi Dosen", meta: "Draft operator", status: "Draft" }
  ],
  schedules: [
    { title: "Kelas A1 - Tata Bahasa", meta: "Senin, 09.00-12.00 · Gedung D" },
    { title: "Kelas A2 - Percakapan", meta: "Rabu, 09.00-12.00 · Gedung D" },
    { title: "Kelas B1 - Budaya Indonesia", meta: "Jumat, 08.30-11.00 · Bale Motekar" }
  ],
  activities: [
    "Preview operator berhasil dimuat.",
    "Data demo lokal aktif.",
    "Koneksi API Apps Script belum diaktifkan."
  ]
};

const data = JSON.parse(localStorage.getItem("bipa_operator_preview") || "null") || seed;

function saveLocal() {
  localStorage.setItem("bipa_operator_preview", JSON.stringify(data));
}

function qs(id) { return document.getElementById(id); }

function toast(message) {
  const el = qs("toast");
  el.textContent = message;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 2200);
}

function statusClass(status) {
  if ((status || "").toLowerCase().includes("draft")) return "draft";
  if ((status || "").toLowerCase().includes("non")) return "off";
  return "";
}

function renderStats() {
  qs("statStudents").textContent = data.students.length;
  qs("statGrades").textContent = data.grades.length;
  qs("statCerts").textContent = data.certificates.length;
  qs("statSurvey").textContent = data.surveys.filter(s => s.status === "Published").length;
}

function renderStudents() {
  qs("studentRows").innerHTML = data.students.map(s => `
    <tr>
      <td>${s.name}</td>
      <td>${s.country}</td>
      <td>${s.program}</td>
      <td>${s.className}</td>
      <td><span class="status">${s.status}</span></td>
    </tr>
  `).join("");

  qs("gradeStudent").innerHTML = data.students.map(s => `<option value="${s.name}">${s.name}</option>`).join("");
}

function renderGrades() {
  qs("gradeRows").innerHTML = data.grades.map(g => `
    <tr>
      <td>${g.name}</td>
      <td>${g.subject}</td>
      <td>${g.uts}</td>
      <td>${g.uas}</td>
      <td><strong>${g.final}</strong></td>
      <td><span class="status ${statusClass(g.status)}">${g.status}</span></td>
    </tr>
  `).join("");
}

function renderCertificates() {
  qs("certRows").innerHTML = data.certificates.map(c => `
    <tr>
      <td>${c.name}</td>
      <td>${c.type}</td>
      <td><span class="status ${statusClass(c.status)}">${c.status}</span></td>
      <td><a href="${c.link}">Buka</a></td>
    </tr>
  `).join("");
}

function renderCards(containerId, items) {
  qs(containerId).innerHTML = items.map(item => `
    <article class="item-card">
      <strong>${item.title}</strong>
      <small>${item.meta}</small>
      ${item.status ? `<span class="status ${statusClass(item.status)}" style="margin-top:10px">${item.status}</span>` : ""}
    </article>
  `).join("");
}

function renderActivity() {
  qs("activityList").innerHTML = data.activities.map(a => `<article class="item-card"><small>${a}</small></article>`).join("");
}

function renderAll() {
  renderStats();
  renderStudents();
  renderGrades();
  renderCertificates();
  renderCards("surveyList", data.surveys);
  renderCards("scheduleList", data.schedules);
  renderActivity();
}

document.querySelectorAll(".menu-item").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".menu-item").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    qs("page-" + btn.dataset.page).classList.add("active");
    qs("pageTitle").textContent = btn.textContent.trim();
  });
});

qs("gradeForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = qs("gradeStudent").value;
  const subject = qs("gradeSubject").value || "Materi BIPA";
  const uts = Number(qs("gradeUts").value || 0);
  const uas = Number(qs("gradeUas").value || 0);
  const final = Math.round((uts + uas) / 2);

  data.grades.unshift({ name, subject, uts, uas, final, status: "Draft" });
  data.activities.unshift(`Nilai ${name} ditambahkan sebagai draft.`);
  saveLocal();
  renderAll();
  e.target.reset();
  toast("Nilai berhasil disimpan di preview lokal.");
});

qs("addStudentBtn").addEventListener("click", () => {
  const no = data.students.length + 1;
  data.students.push({
    name: `Pemelajar Baru ${no}`,
    country: "Indonesia",
    program: "BIPA Reguler",
    className: "A1",
    status: "Aktif"
  });
  data.activities.unshift(`Pemelajar Baru ${no} ditambahkan.`);
  saveLocal();
  renderAll();
  toast("Pemelajar demo ditambahkan.");
});

qs("addCertBtn").addEventListener("click", () => {
  const first = data.students[0]?.name || "Pemelajar";
  data.certificates.unshift({ name: first, type: "Sertifikat Kelulusan", status: "Draft", link: "#" });
  data.activities.unshift(`Sertifikat draft untuk ${first} dibuat.`);
  saveLocal();
  renderAll();
  toast("Sertifikat demo dibuat.");
});

qs("addSurveyBtn").addEventListener("click", () => {
  data.surveys.unshift({ title: "Survey Baru", meta: "Draft operator", status: "Draft" });
  data.activities.unshift("Survey baru dibuat sebagai draft.");
  saveLocal();
  renderAll();
  toast("Survey demo dibuat.");
});

qs("refreshBtn").addEventListener("click", () => {
  renderAll();
  toast("Data preview dimuat ulang.");
});

qs("syncBtn").addEventListener("click", () => {
  const api = window.BIPA_CONFIG?.API_URL || "";
  if (!api) {
    toast("API belum diisi. Ini masih mode preview.");
    return;
  }
  toast("Nanti tombol ini akan sinkron ke Apps Script.");
});

renderAll();
