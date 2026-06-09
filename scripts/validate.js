const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const css = fs.readFileSync(path.join(root, "styles.css"), "utf8");
const js = fs.readFileSync(path.join(root, "script.js"), "utf8");

const requiredSections = [
  "anasayfa",
  "hakkimizda",
  "egitimler",
  "portfolyo",
  "teknoloji",
  "yurtdisi",
  "sanat-terapisi",
  "ogrenci-calismalari",
  "blog",
  "iletisim"
];

const requiredCopy = [
  "Design House",
  "Portfolyo Hazırlık",
  "Sanat Atölyeleri",
  "3D Modelleme",
  "Yurtdışı Sanat ve Tasarım Okulları",
  "Sanat Terapisi",
  "Öğrenci Çalışmaları",
  "Blog ve Kaynak Merkezi",
  "Başvuru formu"
];

const failures = [];

for (const section of requiredSections) {
  if (!html.includes(`id="${section}"`)) {
    failures.push(`Missing section id: ${section}`);
  }
}

for (const copy of requiredCopy) {
  if (!html.includes(copy)) {
    failures.push(`Missing required copy: ${copy}`);
  }
}

if (!css.includes("@media (max-width: 860px)")) {
  failures.push("Missing mobile responsive breakpoint.");
}

if (!js.includes("IntersectionObserver")) {
  failures.push("Missing scroll reveal interaction.");
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Validated Design House static site structure, required copy, responsiveness, and interactions.");
