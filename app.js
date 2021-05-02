const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Dispaly"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Dispaly"),
};

const reset = document.querySelector("#reset");
const play2 = document.querySelector("#playto");
let winingScore = 3;
let isGameOver = false;

play2.addEventListener("input", function (e) {
  winingScore = e.target.value;
  resetAll();
});

reset.addEventListener("click", resetAll);

p1.button.addEventListener("click", function () {
  updateScores(p1, p2);
});

p2.button.addEventListener("click", function () {
  updateScores(p2, p1);
});

function updateScores(player, opponent) {
  if (!isGameOver) {
    if (player.score != winingScore) {
      player.score += 1;
      player.display.innerText = player.score;
    }
    if (player.score == winingScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
  }
}

function resetAll() {
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.innerText = 0;
    isGameOver = false;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}
