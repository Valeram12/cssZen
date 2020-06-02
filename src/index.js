window.addEventListener("load", (event) => {
  let buttonFind = document.querySelector(".selector-find");
  let buttonNext = document.querySelector(".selector-next");
  let buttonPrev = document.querySelector(".selector-prev");
  let input = document.querySelector("input");
  let Element;
  let counter = 0;

  let buttonNavTop = document.querySelector(".nav-top");
  let buttonNavBottom = document.querySelector(".nav-bottom");
  let buttonNavLeft = document.querySelector(".nav-left");
  let buttonNavRight = document.querySelector(".nav-right");

  input.addEventListener("input", (event) => {
    buttonNavTop.disabled = true;
    buttonNavBottom.disabled = true;
    buttonNavLeft.disabled = true;
    buttonNavRight.disabled = true;
    buttonFind.disabled = false;
    let allElement = document.querySelectorAll("*");
    for (let i = 0; i < allElement.length; i++) {
      if (allElement[i].style.cssText != "") {
        allElement[i].style.cssText = "";
      }
      counter = 0;
    }
  });

  buttonNavTop.onclick = function () {
    buttonDisabled();

    Element.style.cssText = "";

    Element = Element.parentNode;
    if (Element.tagName == "HTML") {
      buttonNavTop.disabled = true;
    }

    if (Element != null) {
      replaceStyle(Element);

      if (Element.parentNode === null) {
        buttonNavTop.disabled = true;
      }
      Element.firstElementChild === null ? (buttonNavBottom.disabled = true) : 1;
      Element.previousElementSibling === null ? (buttonNavLeft.disabled = true) : 1;
      Element.nextElementSibling === null ? (buttonNavRight.disabled = true) : 1;
    }
  };

  buttonNavBottom.onclick = function () {
    buttonDisabled();

    Element.style.cssText = "";

    Element = Element.firstElementChild;
    if (Element != null) {
      replaceStyle(Element);

      Element.parentNode === null ? (buttonNavTop.disabled = true) : 1;
      Element.firstElementChild === null ? (buttonNavBottom.disabled = true) : 1;
      Element.previousElementSibling == null ? (buttonNavLeft.disabled = true) : 1;
      Element.nextElementSibling === null ? (buttonNavRight.disabled = true) : 1;
    }
  };

  buttonNavLeft.onclick = function () {
    buttonDisabled();

    Element.style.cssText = "";

    Element = Element.previousElementSibling;
    replaceStyle(Element);

    Element.parentNode === null ? (buttonNavTop.disabled = true) : 1;
    Element.firstElementChild === null ? (buttonNavBottom.disabled = true) : 1;
    Element.previousElementSibling === null ? (buttonNavLeft.disabled = true) : 1;
    Element.nextElementSibling === null ? (buttonNavRight.disabled = true) : 1;
  };

  buttonNavRight.onclick = function () {
    buttonDisabled();

    Element.style.cssText = "";

    Element = Element.nextElementSibling;
    replaceStyle(Element);

    Element.parentNode === null ? (buttonNavTop.disabled = true) : 1;
    Element.firstElementChild === null ? (buttonNavBottom.disabled = true) : 1;
    Element === null ? (buttonNavLeft.disabled = true) : 1;
    Element.nextElementSibling === null ? (buttonNavRight.disabled = true) : 1;
  };

  buttonFind.onclick = function () {
    buttonNavTop.disabled = false;
    buttonNavBottom.disabled = false;
    buttonNavLeft.disabled = false;
    buttonNavRight.disabled = false;

    if (counter != 0) {
      return;
    }
    let inputValue = document.querySelector("input").value;
    let input = document.querySelector("input");
    if (inputValue == "") {
      return;
    }
    let arrElement = document.querySelectorAll(inputValue);
    arrElement.length == 1
      ? (buttonNext.disabled = true) && (buttonPrev.disabled = true)
      : (buttonNext.disabled = false) && (buttonPrev.disabled = false);
    Element = arrElement[0];
    !Element.parentNode ? (buttonNavTop.disabled = true) : 1;
    !Element.firstElementChild ? (buttonNavBottom.disabled = true) : 1;
    !Element.previousElementSibling ? (buttonNavLeft.disabled = true) : 1;
    !Element.nextElementSibling ? (buttonNavRight.disabled = true) : 1;
    replaceStyle(arrElement[0]);
  };

  buttonNext.onclick = function () {
    let inputValue = document.querySelector("input").value;
    let arrElement = document.querySelectorAll(inputValue);
    arrElement[0].style.cssText != "" ? (arrElement[0].style.cssText = "") : 1;
    counter++;
    counter + 1 >= arrElement.length ? (buttonNext.disabled = true) : 1;
    if (counter >= arrElement.length) {
      counter--;
      return;
    }
    buttonPrev.disabled = false;

    Element = arrElement[counter];

    arrElement[counter - 1].style.cssText = ``;

    replaceStyle(arrElement[counter]);

    Element.parentNode == null ? (buttonNavTop.disabled = true) : (buttonNavTop.disabled = false);
    Element.firstElementChild == null ? (buttonNavBottom.disabled = true) : (buttonNavBottom.disabled = false);
    Element.previousElementSibling == null ? (buttonNavLeft.disabled = true) : (buttonNavLeft.disabled = false);
    Element.nextElementSibling == null ? (buttonNavRight.disabled = true) : (buttonNavRight.disabled = false);
  };

  buttonPrev.onclick = function () {
    counter - 1 == 0 ? (buttonPrev.disabled = true) : 1;
    if (counter == 0) {
      return;
    }
    counter--;
    buttonNext.disabled = false;
    let inputValue = document.querySelector("input").value;
    let arrElement = document.querySelectorAll(inputValue);

    Element = arrElement[counter];

    arrElement[counter + 1].style.cssText = " ";

    replaceStyle(arrElement[counter]);

    Element.parentNode == null ? (buttonNavTop.disabled = true) : (buttonNavTop.disabled = false);
    Element.firstElementChild == null ? (buttonNavBottom.disabled = true) : (buttonNavBottom.disabled = false);
    Element.previousElementSibling == null ? (buttonNavLeft.disabled = true) : (buttonNavLeft.disabled = false);
    Element.nextElementSibling == null ? (buttonNavRight.disabled = true) : (buttonNavRight.disabled = false);
  };
});

function replaceStyle(x) {
  x.style.cssText = `
  outline: solid red 5px;
  background-color: lightblue; `;
}

function buttonDisabled() {
  document.querySelector(".selector-next").disabled = true;
  document.querySelector(".selector-prev").disabled = true;
  document.querySelector(".selector-find").disabled = true;
  document.querySelector(".nav-top").disabled = false;
  document.querySelector(".nav-bottom").disabled = false;
  document.querySelector(".nav-left").disabled = false;
  document.querySelector(".nav-right").disabled = false;
}