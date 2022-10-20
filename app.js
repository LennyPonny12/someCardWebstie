"use strict";

let nameInput = document.querySelector(".nameu");
let nameLabel = document.querySelector(".card-one-name");
let codeInput = document.querySelector(".codeu");
let codeLabel = document.querySelector(".card-code-1");
let monthInput = document.querySelector(".mnt");
let yearInput = document.querySelector(".yer");
let monthLabel = document.querySelector(".month");
let yearLabel = document.querySelector(".year");
let cvcInput = document.querySelector(".cvc-nput");
let cvcLabel = document.querySelector(".card-two-code");
let btnConfirm = document.querySelector(".btn-confirm");
let form = document.querySelector(".form");
let compalte = document.querySelector(".complteet-state");
let btnContainue = document.querySelector(".btn-continue");

let pass = true;

nameInput.addEventListener("input", function (e) {
  let name = nameInput.value;

  if (name === "") {
    nameLabel.textContent = "jane appleseed";
    return;
  }
  nameLabel.textContent = name;
});

codeInput.addEventListener("input", function (e) {
  let inputu = codeInput.value;
  let str = "";

  if (inputu === "") {
    codeLabel.textContent = "0000 0000 0000 0000";
    return;
  }

  for (let i = 0; i < inputu.length; i++) {
    if (i % 4 === 0) {
      str += " ";
    }
    str += inputu[i];
  }

  codeLabel.textContent = str;
});

monthInput.addEventListener("input", function (e) {
  monthLabel.textContent = monthInput.value;

  if (monthInput.value === "") {
    monthLabel.textContent = "00";
  }
});

yearInput.addEventListener("input", function (e) {
  yearLabel.textContent = yearInput.value;

  if (yearInput.value === "") {
    yearLabel.textContent = "00";
  }
});

cvcInput.addEventListener("input", function (e) {
  cvcLabel.textContent = cvcInput.value;

  if (cvcInput.value === "") {
    cvcLabel.textContent = "000";
  }
});

function checkIfPass(el) {
  if (!el.value) {
    el.style.outline = "1px solid red";
    pass = false;
  } else {
    el.style.outline = "1px solid hsl(279, 6%, 55%)";
  }
}

btnConfirm.addEventListener("click", function (e) {
  e.preventDefault();

  checkIfPass(nameInput);
  checkIfPass(codeInput);
  checkIfPass(monthInput);
  checkIfPass(yearInput);
  checkIfPass(cvcInput);

  if (pass) {
    form.classList.add("hidden");
    compalte.classList.remove("hidden");
  }
  pass = true;
});

btnContainue.addEventListener("click", function (e) {
  form.classList.toggle("hidden");
  compalte.classList.toggle("hidden");
});
