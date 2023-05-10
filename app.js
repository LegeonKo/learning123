import '/app.styl'

const buttonStart = document.getElementById("button_start");
const buttonStop = document.getElementById("button_stop");
const timerCount = document.querySelector(".timer_count");
const timerRecords = document.querySelector(".timer_records__text");

let passedTime = 0;
let timer;
const newEvent = new CustomEvent("tick", {detail: {timer: `${passedTime}`}});

let buttonStopClicks = '0';

buttonStart.addEventListener("tick", el => {
    timerCount.style.fontSize = '32px';
    timerCount.innerText = `${el.detail.timer} с.`;
});

buttonStart.addEventListener("click", () => {
    timer = setInterval(()=> {
        buttonStart.dispatchEvent(newEvent);
        newEvent.detail.timer++;
    },1000);

});

buttonStop.addEventListener("click", () => {
    if (newEvent.detail.timer === '0') {
        return;
    }
    buttonStopClicks++;
    let div = document.createElement("div");
    timerRecords.append(div);
    div.append(`${buttonStopClicks}. ${timerCount.innerText}`);
    clearInterval(timer);
});