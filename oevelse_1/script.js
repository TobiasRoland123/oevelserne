const alko = "alkohol";
const noAlko = "alkoholfri";

let snaps = document.querySelector(".snaps");
let oel = document.querySelector(".oel");
let faxe = document.querySelector(".faxe");
let cola = document.querySelector(".cola");

snaps.addEventListener("click", printOut);
oel.addEventListener("click", printOut);
faxe.addEventListener("click", printOut);
cola.addEventListener("click", printOut);

function printOut() {
  if (this == oel || this == snaps) {
    console.log(alko);
  } else {
    console.log(noAlko);
  }
}
