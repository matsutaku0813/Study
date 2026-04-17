const root = document.documentElement;

// 年を自動表示
document.getElementById("year").textContent = String(new Date().getFullYear());

// テーマ切替（localStorageで記憶）
const btn = document.getElementById("themeToggle");
const saved = localStorage.getItem("theme");
if (saved === "dark") {
  root.dataset.theme = "dark";
  btn.setAttribute("aria-pressed", "true");
  btn.textContent = "☀️ Light";
}

btn.addEventListener("click", () => {
  const isDark = root.dataset.theme === "dark";
  if (isDark) {
    delete root.dataset.theme;
    localStorage.setItem("theme", "light");
    btn.setAttribute("aria-pressed", "false");
    btn.textContent = "🌙 Dark";
  } else {
    root.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
    btn.setAttribute("aria-pressed", "true");
    btn.textContent = "☀️ Light";
  }
});

// フォーム（ダミー送信 + バリデーション）
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const msgInput = document.getElementById("msgInput");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const msg = msgInput.value.trim();

  if (!name) {
    formMsg.textContent = "お名前を入力してください。";
    return;
  }
  if (msg.length < 10) {
    formMsg.textContent = "メッセージは10文字以上にしてください。";
    return;
  }

  formMsg.textContent = "送信しました！（ダミー）";
  form.reset();
});