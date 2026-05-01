// Lógica Menu

const scene = document.getElementById("body");
const buttons = document.querySelectorAll(".btn-cam");
const htmlRoot = document.documentElement;

buttons.forEach((button, idx) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const newPersp = button.getAttribute("data-p");
    const newOrigin = button.getAttribute("data-o");
    const newFontSize = button.getAttribute("data-f");

    body.style.setProperty("--persp", newPersp);
    body.style.setProperty("--origin", newOrigin);
    htmlRoot.style.fontSize = newFontSize;

    // Lógica para ocultar/exibir filhos do .floor cam 5

    const floor = document.querySelector(".floor");
    if (floor) {
      const filhos = Array.from(floor.children);

      if (idx === 4) {
        // Cam 5
        filhos.forEach((el) => {
          el.style.transitionDelay = "0s";
          el.style.opacity = "0";
        });
      } else {
        filhos.forEach((el) => {
          el.style.transitionDelay = "0.1s";
          el.style.opacity = "1";
        });
      }
    }
  });
});


const meuItem = document.querySelector('.ballshadow');

// Verifica se a string do navegador contém "Firefox"
if (navigator.userAgent.includes("Firefox")) {
    meuItem.style.display = 'none';
}