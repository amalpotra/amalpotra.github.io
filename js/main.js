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

function burstConfetti() {
  const colors = [
    "#2fb344",
    "#e0245e",
    "#1d4ed8",
    "#f59e0b",
    "#8b5cf6",
    "#f0efea",
  ];
  for (let i = 0; i < 36; i++) {
    const el = document.createElement("div");
    el.className = "confetti";
    el.style.left = Math.random() * 100 + "vw";
    el.style.background = colors[i % colors.length];
    const dur = 1400 + Math.random() * 1400;
    const drift = (Math.random() - 0.5) * 200;
    document.body.appendChild(el);
    el.animate(
      [
        { transform: "translate(0,0) rotate(0)", opacity: 1 },
        {
          transform: `translate(${drift}px, 110vh) rotate(${720 * (Math.random() - 0.5)}deg)`,
          opacity: 0.9,
        },
      ],
      { duration: dur, easing: "cubic-bezier(.2,.6,.4,1)" },
    ).onfinish = () => el.remove();
  }
}

let nameClicks = 0;
const nameEl = document.querySelector(".name");
nameEl.addEventListener("click", () => {
  nameClicks++;
  nameEl.classList.remove("spin");
  void nameEl.offsetWidth;
  nameEl.classList.add("spin");
  setTimeout(() => nameEl.classList.remove("spin"), 700);
  if (nameClicks === 3) showToast("you really like clicking that, huh", 1800);
  if (nameClicks === 7) {
    burstConfetti();
    showToast("okay okay 🎉", 1800);
    nameClicks = 0;
  }
});

const frameEl = document.querySelector(".frame");
frameEl.addEventListener("click", () => {
  frameEl.classList.remove("boop");
  void frameEl.offsetWidth;
  frameEl.classList.add("boop");
  setTimeout(() => frameEl.classList.remove("boop"), 700);
});

document.querySelector(".secret-heart").addEventListener("click", () => {
  showToast("press T · click the name · boop the image", 2400);
});

document.addEventListener("keydown", (e) => {
  if (e.target && /input|textarea/i.test(e.target.tagName)) return;
  if (e.key === "t" || e.key === "T") {
    themeIndex = (themeIndex + 1) % themes.length;
    document.body.dataset.theme = themes[themeIndex];
    showToast(themes[themeIndex], 1200);
  }
});

const big =
  'font: italic 600 22px/1 "Instrument Serif",serif; color:#f0efea; padding:6px 0;';
const sm = "font: 11px ui-monospace,monospace; color:#888;";
console.log("%cHi there 👋", big);
console.log(
  "%cYou found the console. Try clicking the name. Or boop the image. Or press T.",
  sm,
);
