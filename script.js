const btn = document.querySelector(".btn");
const counter = document.querySelector(".counter");

let timerId;
let isCounting = true;

function countdown(seconds) {
  return new Promise((resolve) => {
    let count = seconds;
    const startTime = performance.now();

    const updateCounter = () => {
      if (!isCounting) return;
      const elapsedTime = Math.floor((performance.now() - startTime) / 1000);
      const remainingTime = count - elapsedTime;

      if (remainingTime >= 0) {
        counter.textContent = remainingTime;
        timerId = requestAnimationFrame(updateCounter);
      } else {
        resolve();
      }
    };

    timerId = requestAnimationFrame(updateCounter);
  });
}

async function startCountdown() {
  await countdown(30);
  btn.disabled = false;
}

btn.addEventListener("click", function () {
  window.location.href = "https://fullstack.edu.vn";
});

window.onload = function () {
  startCountdown();
};

// document.addEventListener("visibilitychange", function () {
//   if (document.visibilityState === "visible") {
//     isCounting = true;
//     timerId = requestAnimationFrame(countdown);
//   } else {
//     isCounting = false;
//     cancelAnimationFrame(timerId);
//   }
// });
