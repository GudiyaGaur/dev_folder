const endDates = "5 June 2023 12:00PM";
document.getElementById("endDate").innerText = endDates;
let birthday = document.getElementById("birthday");
let inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date("June 5, 2023 12:00:00");
  let now = new Date();
  //console.log(end);
  //console.log(now);
  let diff = (end - now) / 1000;

  //convert into days
  inputs[0].value = Math.floor(diff / 3600 / 24);
  //convert into hous
  inputs[1].value = Math.floor((diff / 3600) % 24);
  //convert into minute
  inputs[2].value = Math.floor((diff / 60) % 60);
  //convert into second
  inputs[3].value = Math.floor(diff % 60);
  if (diff < 0) {
    birthday.innerText = "Happy Birthday";
  }
  return;
}
clock();

setInterval(() => {
  clock();
}, 1000);
