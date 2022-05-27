const bjp = document.querySelector("#bjp");
const cong = document.querySelector("#congress");
const mns = document.querySelector("#mns");
const submit = document.querySelector("#submit");
const hide = document.querySelector("#hide");

// let bjpTemp = false;
// let congTemp = false;
// let mnsTemp = false;
let bjpVote = 0;
let congVote = 0;
let mnsVote = 0;
let total = 0;

bjp.addEventListener("click", () => {
  bjpVote += 1;
  document.getElementById("score1").innerText = bjpVote;
  //   bjpTemp = true;
  //   congTemp = false;
  //   mnsTemp = false;
  //   bjp.classList.add("btnActive");
  //   congTemp && cong.classList.remove("btnActive");
  //   mnsTemp && mns.classList.remove("btnActive");
});

cong.addEventListener("click", () => {
  congVote += 1;
  document.getElementById("score2").innerText = congVote;
  //   bjpTemp = false;
  //   congTemp = true;
  //   mnsTemp = false;
  //   cong.classList.add("btnActive");
  //   bjpTemp && bjp.classList.remove("btnActive");
  //   mnsTemp && mns.classList.remove("btnActive");
});

mns.addEventListener("click", () => {
  mnsVote += 1;
  document.getElementById("score3").innerText = mnsVote;
  //   bjpTemp = false;
  //   congTemp = false;
  //   mnsTemp = true;
  //   mns.classList.add("btnActive");
  //   congTemp && cong.classList.remove("btnActive");
  //   bjpTemp && bjp.classList.remove("btnActive");
});

submit.addEventListener("click", () => {
  //   if (bjpTemp) {
  //     bjpVote += 1;
  //   } else if (congTemp) {
  //     congVote += 1;
  //   } else if (mnsTemp) {
  //     mnsVote += 1;
  //   }
  total = bjpVote + congVote + mnsVote;
  //   bjpTemp = "flase";
  //   congTemp = "false";
  //   mnsTemp = "flase";
  document.getElementById("total").innerHTML = "Total Vote: " + total;
});

hide.addEventListener("onclick", () => {
  document.getElementById("total").style.display = "none";
});
