//a function using a while loop
function count_to_Ten() {
    var Digit = "";
    var x = 1;
    while (x < 11) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Count_to_Ten").innerHTML = Digit;
}

//a function using a for loop
var Instruments = [
    "Guitar",
    "Drums",
    "Keyboard",
    "Bass",
    "Violin",
    "Trombone",
    "Triangle",
    "Flute",
];
var content = "";
var y;
function for_loop() {
    for (y = 0; y < Instruments.lengths; y++){
        content += Instruments[y] + "<br>";
    }
    document.getElementById("Lst_of_Instruments").innerHTML = content;
}

//a function with an array
function color_array() {
    var Colors = [];
    Colors[1] = "Red";
    Colors[2] = "Orange";
    Colors[3] = "Yellow";
    Colors[4] = "Green";
    Colors[5] = "Blue";
    Colors[6] = "Purple";
    document.getElementById("Array").innerHTML=
        " My favourite color is " + Colors[3] + ".";
}

//Creating an object with the let keyword
function car() {
    let car = {
        make: "Ferrari",
        model: "F40",
        year: "1992",
        color: "Red",
    };

    document.getElementById("car").innerHTML = 
        "I have a " + car.year + " " + car.color + " " + car.make + " " + car.model + ".";
}