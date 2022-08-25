const titeloverskrift = document.querySelector("header");
const underoverskrift = document.querySelector("main");
let mainSection = document.querySelector("section");
const article1p = document.querySelector("article:nth-child(1) p");
const article1h3 = document.querySelector("article:nth-child(1) h3");
const pic1 = document.querySelector("article:nth-child(1) img");
const pic2 = document.querySelector("article:nth-child(2) img");
const article2h3 = document.querySelector("article:nth-child(2) h3");
const article2p = document.querySelector("article:nth-child(2) p");
const parag = document.querySelector("p");
const footer = document.querySelector("footer");

document.addEventListener("DOMContentLoaded", start);

// opretter nyt article tag
let newArticle = document.createElement("article");

// opretter ny h3
let overskrift = document.createElement("h3");

// opretter text til at stå i h3
let indhold = document.createTextNode("article 3");

// opretter brødtekst teskt
let newBroedTekst = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iure at, corporis numquam rerum rem nulla quos qui, repudiandae delectus suscipit fugit animi officia illo eveniet consequuntur alias quod praesentium.");

// opretter paragraf element
let newParagraf = document.createElement("p");

// opretter img tag
let image = document.createElement("img");

function start() {
  titeloverskrift.textContent = "Overskrift";

  article1p.textContent = "Dette er en lorteartikel om at være mega lort";

  article1h3.textContent = "lorteartikel";

  article2h3.innerHTML = "<h3> Dette er den fede artikel</h3>";
  article2p.innerHTML = "<p> Det her er en artikel, som handler om at være top nice.</p>";

  console.log(pic1);

  pic1.src = "http://placeimg.com/640/480/any";

  pic1.alt = "link billede";

  pic2.src = "billeder/random.jpg";

  pic2.alt = "lokalt billede";

  // tilføjer en src til min image variabel
  image.src = "billeder/ok.jpg";

  // tilføjer min image variabel til newArticle
  newArticle.appendChild(image);

  // sætter indhold på h3
  overskrift.appendChild(indhold);

  // sætter h3 i en article
  newArticle.appendChild(overskrift);

  // sætter brødtekst ind i paragraf tag
  newParagraf.appendChild(newBroedTekst);

  // sætter paragraf ind i newarticle.
  newArticle.appendChild(newParagraf);

  // sætter article i section, som allerede findes.
  mainSection.appendChild(newArticle);
}
