document.addEventListener("DOMContentLoaded", function () {
    const userInput = document.getElementById("userInput");
    const image = document.querySelector("img");
    const heading = document.querySelector("h1");
    const list = document.getElementById("list");
    const ul = list.querySelector("ul");
    let currentAudio = null;
    let currentMood = "neutral";

    const moods = {
        feliz: [
            "quiero mucho", "bonito", "tierno", "lindo", "encantado", "en la vida"
        ],
        enojado: [
            "aweonao", "weon", "tarado", "pendejo", "baboso", "bobo", "idiota",
            "tonto", "weko", "puto", "tonoto", "tonto polla", "saco wea"
        ],
        weird: [
            "skibidi", "sigma", "pomni", "toilet", "pollo", "papas", "causa",
            "miau", "poto", "nunca mas", "pelo", "pollito"
        ]
    };

    function playNewAudio(audioPath) {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        if (audioPath) {
            currentAudio = new Audio(audioPath);
            currentAudio.play();
        }
    }

    function updateWordList(words) {
        ul.innerHTML = ""; // Limpiar lista anterior
        words.forEach(word => {
            const li = document.createElement("li");
            li.textContent = word;
            ul.appendChild(li);
        });
    }

    userInput.addEventListener("input", function () {
        const inputText = userInput.value.toLowerCase();

        let newMood = "neutral";

        if (moods.feliz.some(word => inputText.includes(word))) {
            newMood = "feliz";
        } else if (moods.enojado.some(word => inputText.includes(word))) {
            newMood = "enojado";
        } else if (moods.weird.some(word => inputText.includes(word))) {
            newMood = "weird";
        }

        if (newMood !== currentMood) {
            currentMood = newMood;

            switch (currentMood) {
                case "feliz":
                    image.src = "cat.png";
                    heading.textContent = "gracias causa 👍";
                    playNewAudio("cat-happy.mp3");
                    list.style.display = "block";
                    currentAudio.currentTime = 0.5;
                    updateWordList(moods.feliz);
                    break;

                case "enojado":
                    image.src = "image.png";
                    heading.textContent = "A tons chinga tu madre también";
                    playNewAudio("vine-boom.mp3");
                    list.style.display = "block";
                    currentAudio.currentTime = 0.23; 
                    Audio.volume = 2;
                    updateWordList(moods.enojado);
                    break;

                case "weird":
                    image.src = "huh.jpg";
                    heading.textContent = "watafak uste que tu habla causa";
                    playNewAudio("huh.mp3");
                    Audio.volume = 2;
                    currentAudio.currentTime = 0.5; 
                    list.style.display = "block";
                    updateWordList(moods.weird);
                    break;

                default: // Neutral
                    image.src = "Screenshot_63.png";
                    heading.textContent = "escribele algo para cambiar su humor! :D";
                    playNewAudio("cat-neutral.mp3");
                    list.style.display = "none";
                    break;
            }
        }
    });
});
