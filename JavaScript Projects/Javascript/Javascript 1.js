function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
      case "Red":
        Color_Output + "Red" + Color_String;
        break;
        case "Yellow":
            Color_Output + "Yellow" + Color_String;
            break;
      case "Green":
        Color_Output + "Green" + Color_String;
        break;
        case "Blue":
            Color_Output + "Blue" + Color_String;
            break;
            case "Pink":
                Color_Output + "Pink" + Color_String;
                break;
                case "Purple":
                    Color_Output + "Purple" + Color_String;
                    break;
        default: 
        Color_Output = "Please enter your choice exactly as it is written in the list above"                                                
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed";
}

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Create a Gradient
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

// Draw a filled Rectangle
ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);