function clickMe() {
    var testClassDiv = document.getElementsByClassName("testClass")[0];
    var testText = testClassDiv.innerHTML;
    testClassDiv.innerHTML = testText.replace(/click me.+?functionality/i, "I was clicked, the JavaScript is working");
}
