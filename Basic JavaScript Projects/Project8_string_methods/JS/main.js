function full_sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("StringMethod").innerHTML = whole_sentence;
}

function slice_Method() {
    var sentence ="Slice and Dice";
    var section = sentence.slice(10, 14);
    document.getElementById("Slice").innerHTML = section;
}

function string_Method() {
    var myNumber = 999;
    document.getElementById("ToString").innerHTML = myNumber.toString();
}

function precision_Method() {
    var myNumber = 123.45678910111213;
    document.getElementById("SpecificLength").innerHTML = 
      myNumber.toPrecision(5);  
}