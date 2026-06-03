const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");

let noScale = 1;
let yesScale = 1;

noBtn.addEventListener("mouseover", () => {

    noScale -= 0.1;

    if(noScale < 0.2){
        noScale = 0.2;
    }

    yesScale += 0.15;

    noBtn.style.transform = scale(${noScale});
    yesBtn.style.transform = scale(${yesScale});

    noBtn.style.left = Math.random() * 220 + "px";
    noBtn.style.top = Math.random() * 80 + "px";
});

yesBtn.addEventListener("click", () => {

    result.innerHTML = "🥰 ¡Sabía que dirías que sí! ❤️";

    for(let i = 0; i < 50; i++){

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";
        heart.classList.add("heart");

        heart.style.left =
            Math.random() * window.innerWidth + "px";

        heart.style.top =
            window.innerHeight + "px";

        heart.style.fontSize =
            (Math.random() * 25 + 15) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
});
});
