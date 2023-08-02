const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let generateBtn = document.getElementById("generate-button")
let fieldOne = document.getElementById("field1")
let fieldTwo = document.getElementById("field2")

function getRandomCharacter() {
    let randomNumber = Math.floor(Math.random() * characters.length)
    return characters[randomNumber]
}

function generatePassword() {
    let randomPassword = ""
    for (let i = 0; i < 15; i++) {
        randomPassword += getRandomCharacter()
    }
    return randomPassword
}

generateBtn.addEventListener("click",()=>{
        fieldOne.textContent = generatePassword()
        fieldTwo.textContent = generatePassword()
})


