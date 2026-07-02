const data = JSON.parse(localStorage.getItem("bipa_operator_preview") || "null") || {
  grades: [
    { name: "Aisha Rahman", subject: "Bahasa Indonesia Dasar", uts: 88, uas: 91, final: 90, status: "Published" }
  ],
  certificates: [
    { name: "Aisha Rahman", type: "Sertifikat Kelulusan", status: "Published", link: "#" }
  ],
  surveys: [
    { title: "Survey Kepuasan Pembelajaran", meta: "Aktif sampai 30 Juli 2026", status: "Published" }
  ],
  schedules: [
    { title: "Kelas A1 - Tata Bahasa", meta: "Senin, 09.00-12.00 · Gedung D" }
  ]
};

function card(title, meta, status = "") {
  const cls = status.toLowerCase().includes("draft") ? "draft" : "";
  return `<article class="item-card"><strong>${title}</strong><small>${meta}</small>${status ? `<span class="status ${cls}" style="margin-top:10px">${status}</span>` : ""}</article>`;
}

document.getElementById("studentGrades").innerHTML = data.grades
  .filter(g => g.status === "Published")
  .map(g => card(g.subject, `UTS ${g.uts} · UAS ${g.uas} · Nilai akhir ${g.final}`, g.status))
  .join("") || card("Belum ada nilai", "Nilai akan muncul setelah dipublish operator.");

document.getElementById("studentCerts").innerHTML = data.certificates
  .filter(c => c.status === "Published")
  .map(c => card(c.type, c.name, c.status))
  .join("") || card("Belum ada sertifikat", "Sertifikat akan muncul setelah dipublish operator.");

document.getElementById("studentSurvey").innerHTML = data.surveys
  .filter(s => s.status === "Published")
  .map(s => card(s.title, s.meta, s.status))
  .join("") || card("Belum ada survey", "Survey aktif akan muncul di sini.");

document.getElementById("studentSchedule").innerHTML = data.schedules
  .map(s => card(s.title, s.meta))
  .join("");
