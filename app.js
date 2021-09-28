//reference to the query selector is stored in variable at 38:min watch video
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output")

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
//api gor numerals to roman
var serverURL = "https://api.funtranslations.com/translate/roman-numerals.json";

function getTranslationURL(text)
{
    return serverURL + "?" + "text=" + text
}

function errorHandler(err)
{
    console.log("error occured ",err);
    alert("something wrong with server!!!Try again after some time");
}

btnTranslate.addEventListener("click",function clickEventHandler()
{
    //txtOutput.innerText = "translated text is : " + txtInput.value  
    var inputText = txtInput.value; //taking input

    //calling server for processing
    fetch(getTranslationURL(inputText))
    .then(res => res.json())
    .then(json => {
        var translateTxt = json.contents.translated;
        txtOutput.innerText = translateTxt;
        
    })
    .catch(errorHandler)
})

