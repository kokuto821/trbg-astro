// ハンバーガーメニュー
const ham = document.getElementById("js-hamburger");
const nav = document.getElementById("js-nav");
const body = document.body;

function adjustNavDisplay() {
  if (!nav) return;
  if (window.innerWidth <= 768) {
    nav.style.display = "none";
    nav.classList.add("fadeout");
  } else {
    nav.style.display = "flex";
    nav.classList.remove("fadeout", "fadein");
  }
}

// 初期表示とウィンドウサイズ変更時にナビゲーションの表示を調整
adjustNavDisplay();
window.addEventListener("resize", adjustNavDisplay);

let isClickable = true;

ham?.addEventListener("click", () => {
  if (!nav || !isClickable) return;
  setTimeout(() => {
    isClickable = true;
  }, 500);

  ham.classList.toggle("active");
  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    body.classList.add("no-scroll");
    nav.classList.remove("fadeout");
    nav.classList.add("fadein");
    setTimeout(() => {
      nav.style.display = "block";
    }, 10);
    isClickable = false;
  } else {
    nav.classList.remove("fadein");
    nav.classList.add("fadeout");
    setTimeout(() => {
      nav.style.display = "none";
    }, 500);
    body.classList.remove("no-scroll");
    isClickable = false;
  }
});
