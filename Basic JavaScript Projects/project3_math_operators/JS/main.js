function addition() { //Defining and naming addition function
    var add = 1+2;
    document.getElementById("Add").innerHTML = "1 + 2 = " + add; //Print the result in html
}

function subtraction() { //Defining and naming subtraction function
    var sub = 9-7;
    document.getElementById("Sub").innerHTML = "9 - 7 = " + sub; //Print the result in html
}

function multiplication() { //Defining and naming multiplication function
    var mult = 12*5;
    document.getElementById("Mlt").innerHTML = "12 + 5 = " + mult; //Print the result in html
}

function division() { //Defining and naming division function
    var divide = 39/3;
    document.getElementById("Div").innerHTML = "39 / 3 = " + divide; //Print the result in html
}

function random() { //Defining and naming random function
    document.getElementById("Ran").innerHTML = Math.random()*10; //Print the result in html 
}

function modulus_operator() { //Defining and naming modulus operator function
    var modulus = 38 % 4;
    document.getElementById("Mod").innerHTML =
    "When you divide 38 by 4 you have a remainder of" + modulus; //Print the result in html
}

function Increment() { //Defining and naming incrementtecxt function
    var value = document.getElementById("IncrementText").innerHTML; //saves the text of HTML element to a variable

    value++; //add one to the value

    document.getElementById("IncrementText").innerHTML = value; //Print the result in html
}

function Decrement() { //Defining a function and naming it
    var value = document.getElementById("DecrementText").innerHTML; //saves the text of HTML element to a variable

    value--; //subtract one from value

    document.getElementById("DecrementText").innerHTML = value; //Print the result in html
}    