//your JS code here. If required.
const sounds = [
    "applause",
    "boo",
    "gasp",
    "tada",
    "victory",
    "wrong"
];

let currentAudio = null;

function stopSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
}

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        const sound = button.dataset.sound;

        stopSound();

        currentAudio = new Audio(`sounds/${sound}.mp3`);
        currentAudio.play();
    });
});

document.querySelector(".stop").addEventListener("click", () => {
    stopSound();
});