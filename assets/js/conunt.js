let count = 1;
let yearCount = setInterval(yearCounter, 301);
let count2 = 1;
let memberCount = setInterval(memberCounter, 11);
let count3 = 1;
let clintCount = setInterval(clintCounter, 8);
let count4 = 1;
let projectCount = setInterval(projectCounter, 1);
function yearCounter() {
  count++;
  document.querySelector("#number1").innerHTML = count + "Years+";
  if (count == 11) {
    clearInterval(yearCount);
  }
}

function memberCounter() {
  count2++;
  document.querySelector("#number2").innerHTML = count2 + "+";
  if (count2 == 300) {
    clearInterval(memberCount);
  }
}

function clintCounter() {
  count3++;
  document.querySelector("#number3").innerHTML = count3 + "+";
  if (count3 == 425) {
    clearInterval(clintCount);
  }
}
function projectCounter() {
  count4++;
  document.querySelector("#number4").innerHTML = count4 + "+";
  if (count4 == 855) {
    clearInterval(projectCount);
  }
}
