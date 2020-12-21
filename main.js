let score = document.querySelector(".score");
let timer = document.querySelector(".timer");
let holes = document.querySelectorAll(".hole");
let playBtn = document.querySelector(".play");

let time = 10;
timer.innerHTML = time;
score.innerHTML = 0;

playBtn.addEventListener("click", () => {
  playBtn.style.display = "none";
  let currHole;
  let currScore = 0;
  let noOfHoles = Math.floor(Math.random() * 4) + 5;
  for (let i = 0; i <= noOfHoles; i++) {
    holes[i].style.display = "block";
  }

  const start = setInterval(() => {
    let hole = Math.floor(Math.random() * noOfHoles);
    currHole = holes[hole];

    let moleImg = document.createElement("img");
    moleImg.setAttribute("src", "./mole.png");
    moleImg.setAttribute("class", "mole");
    currHole.appendChild(moleImg);
    let timeout = Math.floor(Math.random() * 300) + 500;
    // console.log(timeout);
    setTimeout(() => {
      currHole.removeChild(moleImg);
    }, timeout);
  }, 1000);

  window.addEventListener("click", (event) => {
    if (event.target === currHole) {
      currScore += 1;
      score.innerHTML = currScore;
    }
  });

  function checkTime() {
    if (time === 0) {
      playBtn.style.display = "block";
      playBtn.innerHTML = "REPLAY";
      currScore = 0;
      score.innerHTML = 0;
      currHole.innerHTML = "";
      clearInterval(start);
      time = 10;
      clearInterval(countdown);
      holes.forEach((hole) => {
        hole.style.display = "none";
      });
    }
  }
  let countdown = setInterval(() => {
    time--;
    timer.innerHTML = time;
    checkTime();
  }, 1000);
});
