const automaticTextElement = document.getElementById('automatic-type');
const wordPhrases = 'Air Service Licence(ASL) and an Operating Certificate(AOC/ROC)?';
const typingDelay = 200;
const erasingDelay = 50;
const repeatText = 200;


let i = 0;

const intervalElement = setInterval(function() {
    automaticTextElement.innerHTML += wordPhrases[i];
    i++;

    if (i === wordPhrases.length) {
        clearInterval(intervalElement);
    } 
    
},70)

