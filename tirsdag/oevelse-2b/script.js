const titeloverskrift = document.querySelector("header");
const underoverskrift = document.querySelector("main");
const article1p = document.querySelector("article:nth-child(1) p");
const article1h3 = document.querySelector("article:nth-child(1) h3");
const article2h3 = document.querySelector("article:nth-child(2) h3");
const article2p = document.querySelector("article:nth-child(2) p");
const parag = document.querySelector("p");
const footer = document.querySelector("footer");

titeloverskrift.textContent = "Overskrift";

article1p.textContent = "Dette er en lorteartikel om at være mega lort";

article1h3.textContent = "lorteartikel";

article2h3.innerHTML = "<h3> Dette er den fede artikel</h3>";
article2p.innerHTML = "<p> Det her er en artikel, som handler om at være top nice.</p>";
