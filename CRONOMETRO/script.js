console.log("hola");
let seg = 0;
let min = 0;
let hours = 0;
let init;
let state = 0;

const counter = document.querySelector(".counter");
const start = document.getElementById("start");
const stop = document.getElementById("stop");

start.addEventListener("click", () => {
  if (state == 0) {
    init = setInterval(contar, 200);
    console.log(`start: ${init}`);
    state = 1;
  }
});
stop.addEventListener("click", () => {
  if (state == 1) {
    clearInterval(init);
    console.log(`stop: ${init}`);
    state = 0;
  }
});
function contar() {
  seg++;
  if (seg > 59) {
    min++;
    seg = 0;
    if (min > 59) {
      hours++;
    }
  }
  counter.innerText = `${hours} : ${min} : ${seg}`;
}
