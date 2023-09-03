function UI() {

    this.outputImage = document.getElementById("outputImage");
    this.outputLanguage = document.getElementById("outputLanguage");
    this.outputWord = document.getElementById("outputWord");
    this.langaugeList = document.getElementById("language");

}

UI.prototype.changeUI = function () {
    
    this.outputImage.src = `images/${this.langaugeList.value}.png`;

}

UI.prototype.displayTranslate = function (word) {
    this.outputWord.textContent = word;
}