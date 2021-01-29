var playGame;
innit();

window.onload = function () {
  var x = Math.random() * 100;
  x = Math.floor(x);
  console.log(x);
  document.getElementById("myButton").onclick = function (e) {
    e.preventDefault;
    if (playGame) {
      if (document.getElementById("answer").value.match(/^[0-9]+$/)) {
        if (document.getElementById("answer").value == x) {
          document.getElementById("reply").textContent = "correct!!";
        } else if (document.getElementById("answer").value < x) {
          document.getElementById("reply").textContent = "its to cold";
        } else if (document.getElementById("answer").value > x) {
          document.getElementById("reply").textContent = "its to hot";
        }
      } else {
        document.getElementById("reply").textContent =
          "Please enter a valid Number";
      }
    } else {
      document.getElementById("reply").textContent = "Please start a new game";
    }
  };
};

function innit() {
  playGame = true;
  document.getElementById("reply").textContent = "";
  document.getElementById("answer").value = "";
}
document.querySelector("#newGame").addEventListener("click", innit);
