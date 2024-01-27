const display = document.querySelector(".display");
const displayHide = document.querySelector(".displayHide");
const root = document.querySelector(':root');
let a = '';
let b = '';
let sign = '';
const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['+', '-', '/', 'x', '%'];

document.querySelector(".c").onclick = c;
document.querySelector(".g").onclick = g;
document.querySelector(".r").onclick = r;
document.querySelector(".n").onclick = n;
document.querySelector(".buttons").onclick = btn;
document.querySelector(".ac").onclick = clear;

function c() {
  root.style.setProperty('--main-bg-color', "black");
  root.style.setProperty('--bg-color', "black");
  root.style.setProperty('--btn-color', "#333");
  root.style.setProperty('--orange', "#ff9501");
  root.style.setProperty('--gray', "#a6a6a6");
}
function g() {
  root.style.setProperty('--main-bg-color', "#618264");
  root.style.setProperty('--bg-color', "#79AC78");
  root.style.setProperty('--btn-color', "#B0D9B1");
  root.style.setProperty('--orange', "lightgreen");
  root.style.setProperty('--gray', "green");
}
function r() {
  root.style.setProperty('--main-bg-color', "#900C3F");
  root.style.setProperty('--bg-color', "#C70039");
  root.style.setProperty('--btn-color', "#F94C10");
  root.style.setProperty('--orange', "orange");
  root.style.setProperty('--gray', "#FFBB5C");
}
function n() {
  root.style.setProperty('--main-bg-color', "#645CAA");
  root.style.setProperty('--bg-color', "#A084CA");
  root.style.setProperty('--btn-color', "#BFACE0");
  root.style.setProperty('--orange', "#7360DF");
  root.style.setProperty('--gray', "#EBC7E8");
}

function clear() {
  a = '';
  b = '';
  sign = '';
  display.textContent = '0';
  displayHide.textContent = "";
}

function btn(e) {
  if (!e.target.classList.contains('btn')) return;
  if (e.target.classList.contains('ac')) return;

  const key = e.target.textContent;
  if (sign == "" && digit.includes(key)) {
    if (a =="0")
      a = key;
    else
      a += key;
    display.textContent = a + " " + sign +  " " + b;
  }
  else if (action.includes(key)) {
    sign = key;
    display.textContent = a + " " + sign +  " " + b;
  }
  else if (sign != "" && digit.includes(key)) {
    if (b =="0")
      b = key;
    else
      b += key;
    display.textContent = a + " " + sign +  " " + b;
  }
  else if (key == "+/-") {
    a = 0 - a;
    display.textContent = a + " " + sign +  " " + b;
  }
  else if (key == "=" && sign != "" && a != "" && b != "") {
    switch(sign){
      case "+":
        display.textContent = Number(a) + Number(b);
        break;
      case "-":
        display.textContent = Number(a) - Number(b);
        break;
      case "/":
        display.textContent = Number(a) / Number(b);
        break;
      case "x":
        display.textContent = Number(a) * Number(b);
        break;
      case "%":
        display.textContent = Number(a) % Number(b);
        break;
    }
    displayHide.textContent = a + " " + sign +  " " + b + " =";
    a = display.textContent;
    sign = "";
    b = "";
  }
}
