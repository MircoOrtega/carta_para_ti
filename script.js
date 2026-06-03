const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");

let noSize = 1;
let yesSize = 1;

noBtn.addEventListener("mouseover", () => {

    noSize -= 0.1;

    if(noSize < 0.2){
        noSize = 0.2;
    }

    yesSize += 0.15;

    noBtn.style.transform = scale(${noSize});
    yesBtn.style.transform = scale(${yesSize});

    noBtn.style.left = Math.random() * 220 + "px";
    noBtn.style.top = Math.random() * 70 + "px";
});

yesBtn.addEventListener("click", () => {

    result.innerHTML = "🥰 Sabía que dirías que sí ❤️";

    for(let i = 0; i < 100; i++){

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";
        heart.classList.add("heart");

        heart.style.left =
            Math.random() * window.innerWidth + "px";

        heart.style.top =
            window.innerHeight + "px";

        heart.style.fontSize =
            (Math.random() * 30 + 15) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
});
