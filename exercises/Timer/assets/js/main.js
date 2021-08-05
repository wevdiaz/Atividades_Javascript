const btnStart = document.getElementById("start");
const btnPause = document.getElementById("pause");
const btnReset = document.getElementById("reset");
const clock = document.getElementById("relogio");
let seconds = 0;
let timer;

function formatTimer(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString("pt-BR", { hour12: false, timeZone: "UTC" });
}

function startTimer() {
    seconds++;
    clock.innerHTML = formatTimer(seconds);
}



btnStart.addEventListener("click", () => {
    clearInterval(timer);
    timer = setInterval(startTimer, 1000);
    clock.classList.remove("stop");

});

btnPause.addEventListener("click", () => {
    clearInterval(timer);
    clock.classList.add("stop");
});

btnReset.addEventListener("click", () => {
    clearInterval(timer);
    clock.innerHTML = formatTimer(0);
    seconds = 0;
    clock.classList.remove("stop");
});


