let button = document.getElementById("bt");

function randomColor() {
  let var1 = "0123456789ABCDE";
  let var2 = "#";
  for (let i = 0; i < 6; i++) {
    var2 = var2 + var1[Math.floor(Math.random() * 16)];
  }
  return var2;
}
console.log(randomColor());

function changeColor() {
  document.body.style.backgroundColor = randomColor();
}
button.addEventListener("click", changeColor);
