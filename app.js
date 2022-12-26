var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#textarea");
var txtOutput = document.querySelector("#txt-output");

// var serverURL = "https://api.funtranslations.com/translate/yoda.json";
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("Error occured: " + error);
}

function clickEventHandler() {
  var inputText = txtInput.value;

  //calling server for processing
  fetch(getTranslationURL(inputText))
    .then((response) => response.json)
    .then((json) => {
      console.log(json.contents.translated);
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickEventHandler);
