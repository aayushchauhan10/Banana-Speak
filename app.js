var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#textarea");
var txtOutput = document.querySelector("#txt-output");

function clickEventHandler() {
  txtOutput.innerText = "This is a test string: " + txtInput.value;
}

btnTranslate.addEventListener("click", clickEventHandler);

//creating APIs
