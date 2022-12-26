var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#textarea");
var txtOutput = document.querySelector("#txt-output");

function clickEventHandler() {
  txtOutput.innerText = "snfksnjs: " + txtInput.value;
}

btnTranslate.addEventListener("click", clickEventHandler);
