import '/app.styl'

const buttonStart = document.getElementById("button_start");
const buttonStop = document.getElementById("button_stop");
const timerCount = document.querySelector(".timer_count");
const timerRecords = document.querySelector(".timer_records__text");

let passedSecs = 0;
let passedMsecs = 0;
let Timer;
const newEvent = new CustomEvent("tick", {
    detail:
        {
            secs: `${passedSecs}`,
            msecs: `${passedMsecs}`,
        }
});

let buttonStopClicks = '0';

buttonStop.disabled = true;


buttonStart.addEventListener("tick", el => {
    timerCount.style.fontSize = '32px';
    timerCount.innerText = `${el.detail.secs}.${el.detail.msecs} с.`;
});

buttonStart.addEventListener("click", () => {
    clearInterval(Timer);
    buttonStop.disabled = false;
    buttonStart.disabled = true;
    Timer = setInterval(() => {
        passedMsecs++;
        buttonStart.dispatchEvent(newEvent);
        newEvent.detail.msecs = `${passedMsecs}`
        if(passedMsecs === 100) {
            passedMsecs = 0;
            newEvent.detail.msecs = 0;
            passedSecs++;
            newEvent.detail.secs = `${passedSecs}`
        }
    }, 10);
});

buttonStop.addEventListener("click", () => {
    buttonStop.disabled = true;
    buttonStart.disabled = false;
    buttonStopClicks++;
    let div = document.createElement("div");
    timerRecords.append(div);
    div.append(`${buttonStopClicks}. ${timerCount.innerText}`);
    clearInterval(Timer);
});