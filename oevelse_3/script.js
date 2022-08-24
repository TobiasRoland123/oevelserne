const ranTal = Math.floor(Math.random() * 11);
let forsoeg = 0;
console.log(ranTal);

let chekKnap = document.querySelector(".checker");
let gaet;

chekKnap.addEventListener("click", checkTal);

function checkTal() {
  gaet = document.querySelector("#tal").value;
  console.log(gaet);

  forsoeg++;
  if (gaet == ranTal) {
    alert(ranTal + " er rigtigt og du har brugt " + forsoeg + " forsøg. Prøv med et nyt tal :)");
  } else if (gaet > ranTal) {
    alert("Øv! " + gaet + " var for højt. Prøv igen :)");
  } else {
    alert("Øv! " + gaet + " var for lavt. Prøv igen :)");
  }
}
