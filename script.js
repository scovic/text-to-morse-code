var letterToMorse = function(char) {
    return morseAlphabet[char.toUpperCase()];
}

var check = function(char) {
    if(char == "," || char == "." || char == "!" || char == "?" || char == ":" || char == ";"
    || char == "\"" || char == "\'")
        return true;
    else
        return false;
}

function textToMorse(elem) {
    var text = elem.value;
    var resultString = "";
    for(var i = 0; i< text.length; i++)
    {   
        if(check(text[i]))
            continue;

        resultString += letterToMorse(text[i])+ " ";
    }

    document.getElementById("morse-textarea").value= resultString;
        
}


function alr() {
    alert("radii");
}

var morseAlphabet = {
    "A" : ".-",
    "B" : "-...",
    "C" : "-.-.",
    "D" : "-..",
    "E" : ".",
    "F" : "..-.",
    "G" : "--.",
    "H" : "....",
    "I" : "..",
    "J" : ".---",
    "K" : "-.-",
    "L" : ".-..",
    "M" : "--",
    "N" : "-.",
    "O" : "---",
    "P" : ".--.",
    "Q" : "--.-",
    "R" : ".-.",
    "S" : "...",
    "T" : "-",
    "U" : "..-",
    "V" : "...-",
    "W" : ".--",
    "X" : "-..-",
    "Y" : "-.--",
    "Z" : "--..",
    //NUMBERS
    "1" : ".----",
    "2" : "..---",
    "3" : "...--",
    "4" : "....-",
    "5" : ".....",
    "6" : "-....",
    "7" : "--...",
    "8" : "---..",
    "9" : "----.",
    "0" : "-----",
    " " : "  "  
}