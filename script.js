const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");

console.log("Script cargado correctamente");

let noSize = 1;
let yesSize = 1;

noBtn.addEventListener("mouseenter", () => {

    noSize -= 0.1;

    if (noSize < 0.2) {
        noSize = 0.2;
    }

    yesSize += 0.15;

    noBtn.style.transform = scale(${noSize});
    yesBtn.style.transform = scale(${yesSize});

    noBtn.style.left = Math.random() * 220 + "px";
    noBtn.style.top = Math.random() * 70 + "px";
});

yesBtn.addEventListener("click", () => {

    result.textContent = "🥰 Sabía que dirías que sí ❤️";

    alert("❤️ Gracias por aceptar ❤️");

});
