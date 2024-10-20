//Assiging local and global variables
var X = 10; //global variable

function Add_numbers_1() {
    var X = 99;//local variable
    document.write(10 + X + "<br>");//using local variable
}

function Add_numbers_2() {
    document.write(X + 12); //using global variable
    console.log(X);//using console.log to debug which variable is being used
}

Add_numbers_1();
Add_numbers_2();


//A function that includes an if statement

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "It is currently before 6pm";
    }
}

//A function with if and else statements
function get_Reply() {
    var user_input = document.getElementById("userInput").value;
    if (user_input % 2 === 0) {
        reply = "You entered an even number!";
        document.getElementById("feedback").innerHTML = reply;
    }
    else {
        reply = "You entered an odd number!";
        document.getElementById("feedback").innerHTML = reply;
    }
}

//Utilizing the time_function()
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    } else if (Time >= 12 == Time <18) {
        Reply = "It is afternoon!";
    } else {
        Reply = "It is evening time!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
