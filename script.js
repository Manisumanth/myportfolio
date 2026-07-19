// Typed name effect in the hero terminal
const NAME = "Manisumanth Kalle";
const typedEl = document.getElementById("typedName");

function typeName() {
  if (!typedEl) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    typedEl.textContent = NAME;
    typedEl.classList.add("done");
    return;
  }
  let i = 0;
  const interval = setInterval(() => {
    typedEl.textContent = NAME.slice(0, i + 1);
    i++;
    if (i === NAME.length) {
      clearInterval(interval);
      typedEl.classList.add("done");
    }
  }, 70);
}

document.addEventListener("DOMContentLoaded", () => {
  typeName();
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const menuBtn = document.getElementById("menuBtn");
  const tabbar = document.getElementById("tabbar");
  if (menuBtn && tabbar) {
    menuBtn.addEventListener("click", () => {
      tabbar.classList.toggle("menu-open");
    });
    document.querySelectorAll(".tab").forEach(tab => {
      tab.addEventListener("click", () => tabbar.classList.remove("menu-open"));
    });
  }
});