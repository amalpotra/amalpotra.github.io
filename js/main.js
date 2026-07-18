document.getElementById("year").textContent = new Date().getFullYear();

const themes = ["cool", "warm", "paper", "dark"];
let themeIndex = themes.indexOf(document.body.dataset.theme);
if (themeIndex === -1) themeIndex = 0;

const toastEl = document.getElementById("toast");
let toastTimer = null;

function showToast(msg, ms = 1800) {
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), ms);
}

document.addEventListener("keydown", (e) => {
  if (e.target && /input|textarea/i.test(e.target.tagName)) return;
  if (e.key === "t" || e.key === "T") {
    themeIndex = (themeIndex + 1) % themes.length;
    document.body.dataset.theme = themes[themeIndex];
    showToast(themes[themeIndex], 1200);
  }
});
