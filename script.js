// const { createElement } = require("react");

const h1 = document.getElementsByTagName("h1");

// function on() {
//   h1[0].style.color = "blue";
//   h1[0].style.color = "blue";
// }

// function off() {
//   h1[0].style.color = "red";
//   h1[0].style.color = "red";
// }

// const h1 = document.getElementsByClassName("h1");

// h1[0].onmouseover = function () {
//   h1[0].style.color = "blue";
// };
// h1[0].onmouseout = function () {
//   h1[0].style.color = "red";
// };

// const h1 = document.getElementsByClassName("h1");

// h1[0].addEventListener("mouseover", function () {
//   h1[0].style.color = "blue";
// });

// h1[0].addEventListener("mouseout", () => {
//   h1[0].style.color = "green";
// });

const buton = document.getElementById("btn");
// const body = document.getElementsByTagName("body");
// const body = document.getElementsByClassName("body");
// const body = document.getElementById("body");
const body = document.querySelector(".body");

// buton.innerText = "BAS";
// buton.innerHTML = "BAS";

// buton.addEventListener("click", function () {
//   body.style.backgroundColor = "red";
//   buton.innerText = "BAS";
// });

const renkler = [
  "olive",
  "orangered",
  "cornflowerblue",
  "plum",
  "crimson",
  "deeppink",
  "fuchsia",
  "gold",
  "lime",
];
const isimler = [
  "olive",
  "orangered",
  "cornflowerblue",
  "plum",
  "crimson",
  "deeppink",
  "fuchsia",
  "gold",
  "lime",
];

buton.addEventListener("click", function () {
  rastgeleSayi = Math.floor(Math.random() * renkler.length);
  body.style.backgroundColor = renkler[rastgeleSayi];
  h1[0].innerText = "RENK : " + isimler[rastgeleSayi].toLocaleUpperCase();
});

const inputText = document.getElementById("input");
const inputCheck = document.getElementById("checkbox");

// inputCheck.addEventListener("disabled", function () {
//   inputText.value = inputText.value.toLocaleUpperCase();
// });

inputText.addEventListener("keyup", function () {
  if (inputCheck.checked) {
    inputText.value = inputText.value.toLocaleUpperCase();
  } else {
    inputText.value = inputText.value.toLocaleLowerCase();
  }
});

const yeniH1 = document.querySelector(".yeni-h1");
const H1 = document.createElement("h1");
const text = document.createTextNode("Programlama Dilleri");

H1.appendChild(text);
yeniH1.appendChild(H1);
H1.style.marginTop = "5%";
H1.style.color = "green";
H1.style.textAlign = "center";

const ul = document.createElement("ul");
const li = document.createElement("li");
const input = document.createElement("input");
const ekleBtn = document.createElement("button");
const silBtn = document.createElement("button");
const ekle = document.createTextNode("EKLE");
const sil = document.createTextNode("SİL");

yeniH1.appendChild(ul);
ul.appendChild(li);
yeniH1.appendChild(input);
yeniH1.appendChild(ekleBtn);
yeniH1.appendChild(silBtn);

ekleBtn.appendChild(ekle);
silBtn.appendChild(sil);

ul.style.textAlign = "left";
ul.style.marginLeft = "400px";
li.style.display = "none";

ekleBtn.style.width = "180px";
ekleBtn.style.height = "80px";
ekleBtn.style.fontSize = "2rem";
ekleBtn.style.background = "green";
ekleBtn.style.color = "white";
silBtn.style.width = "180px";
silBtn.style.height = "80px";
silBtn.style.fontSize = "2rem";
silBtn.style.background = "red";
silBtn.style.color = "white";
// silBtn.style.margin = "10px";
input.style.width = "180px";
input.style.height = "70px";

// input.style.padding = "30px";
input.style.marginTop = "60px";

yeniH1.style.textAlign = "center";
yeniH1.style.verticalAlign = "middle";

ekleBtn.addEventListener("click", function () {
  const li = document.createElement("li");
  ul.appendChild(li);
  const text = document.createTextNode(input.value);
  li.appendChild(text);
});

silBtn.addEventListener("click", function () {
  ul.removeChild(ul.lastElementChild);
});
