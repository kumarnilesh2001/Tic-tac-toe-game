const turnParagraph = document.querySelector(".turn");
const winImg = document.querySelector("#image-container");
const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#btn");
let isgameover = false;
let turn = "X";

function checkTurn() {
  return turn === "X" ? "O" : "X";
}

function checkWin() {
  const boxes = document.getElementsByClassName("boxtext");
  const h1 = document.querySelector("h1");
  let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [1, 4, 8],
    [2, 4, 6],
  ];

  winConditions.forEach((e) => {
    if (
      boxes[e[0]].textContent === boxes[e[1]].textContent &&
      boxes[e[1]].textContent === boxes[e[2]].textContent &&
      boxes[e[0]].textContent !== ""
    ) {
      turnParagraph.innerText = " Player " + boxes[e[0]].textContent + "  WON";
      isgameover = true;
      winImg.style.width = "200px";
      turnParagraph.style.fontsize = "50px";
    }
  });
}

boxes.forEach((items) => {
  const boxtext = items.querySelector(".boxtext");

  items.addEventListener("click", function () {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = checkTurn();
      checkWin();
      if (!isgameover) {
        turnParagraph.innerText = `Player ${turn} Turn`;
      }
    }
  });
});

resetBtn.addEventListener("click", () => {
  const boxtext = document.querySelectorAll(".boxtext");
  turnParagraph.innerText = "Player X Turn";
  winImg.style.width = "0px";
  boxtext.forEach((items) => {
    items.innerText = "";
  });
  turn = "X";
  isgameover = false;
});
