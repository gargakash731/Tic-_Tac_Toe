let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-button");
let newbtn = document.querySelector("#new-button");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
let count = 0;
const winning_pattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const resetgame = () => {
  count = 0;
  turnO = true;
  enable_boxes();
  msgcontainer.classList.add("hide");
};
const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgcontainer.classList.remove("hide");
  disable_boxes();
};
const disable_boxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
  const enable_boxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkwinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});


const showwinner = (winner) => {
  msg.innerText = `Congratulations,The Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disable_boxes();
};

const checkwinner = () => {
  for (let pattern of winning_pattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos1Val != "" && pos1Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showwinner(pos1Val);
        return true;
      }
    }
  }
};
resetbtn.addEventListener("click", resetgame);
newbtn.addEventListener("click", resetgame);
