const btn = document.getElementById("generate-btn");
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let randomIndex;

btn.addEventListener("click", function(){
    let passwordOne = [];
    let passwordTwo = [];
   generatePassword(passwordOne);
   generatePassword(passwordTwo);
   renderPassword(passwordOne, "first-password");
   renderPassword(passwordTwo, "second-password");
}
)

function generatePassword(password) {
    for (let i = 0; i < 15; i++) {
        randomIndex = Math.floor(((Math.random() * characters.length) + 1));
       password.push(characters[randomIndex])
    }
    return password
}

function renderPassword(password, element) {
    return document.getElementById(element).textContent = password.join("");
}



