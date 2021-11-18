let offIcon = document.getElementById("off");
let playIcon = document.getElementById("on");
let contador = 0;
let bote = new Audio('src/audio/audio.mp3');
let puedeBotar = false;

document.getElementById("bola").addEventListener("animationiteration", () => {

    contador++;

    if (contador % 2 == 0) {

        offIcon.addEventListener("click", () => {

            puedeBotar = true;

            playIcon.style.display = "inline";
            offIcon.style.display = "none";

        })

        playIcon.addEventListener("click", () => {

            puedeBotar = false;

            offIcon.style.display = "inline";
            playIcon.style.display = "none";

        });

        if (puedeBotar) {

            bote.play();

        }

    }

});