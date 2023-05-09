const hour = document.querySelector(".inp-hrs");
const min = document.querySelector(".inp-min");
const sec = document.querySelector(".inp-sec");
const btnStart = document.querySelector(".btn-start");
const btnReset = document.querySelector(".btn-reset");

function startTimer() {
  timer = setInterval(countTimer, 1000);
}

function countTimer() {
  if (sec.value != 0) {
    sec.value--;
    document.querySelector(".inp-sec").textContent = ("00" + sec.value).slice(
      -2
    );
  } else {
    if (min.value != 0) {
      min.value--;
      document.querySelector(".inp-min").textContent = ("00" + min.value).slice(
        -2
      );
      sec.value = 59;
    } else {
      clearTimer(timer);
    }
  }
}

function clearTimer(t) {
  clearInterval(t);
}

function resetTimer() {
  clearTimer(timer);
}

btnStart.addEventListener("click", startTimer);
btnReset.addEventListener("click", resetTimer);
