const automaticTextElement = document.getElementById('automatic-type');
const wordPhrases = 'Air Service Licence(ASL) and an Operating Certificate(AOC/ROC)?';

let i = 0;

const intervalElement = setInterval(function() {
    automaticTextElement.innerHTML += wordPhrases[i];
    i++;

    if (i === wordPhrases.length) {
        clearInterval(intervalElement);
    } 
    
},70)

