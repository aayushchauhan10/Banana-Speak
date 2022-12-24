var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#textarea");

function clickEventHandler() {
  txtInput.toUpperCase();
}

btnTranslate.addEventListener("click", clickEventHandler);
