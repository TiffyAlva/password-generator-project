const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
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

// Copy Password
function copyToClipboard(fieldId) {
    const targetField = document.getElementById(fieldId);
    if (targetField) {
        const range = document.createRange();
        range.selectNode(targetField);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        try {
            const successful = document.execCommand('copy');
            if (successful) {
                // Password successfully copied to clipboard
                alert('Password copied to clipboard!');
            } else {
                // Copy command failed
                alert('Copy command failed. Please copy the password manually.');
            }
        } catch (err) {
            // Handle any errors that may occur during the copy process
            console.error('Copy to clipboard failed:', err);
            alert('Copy to clipboard failed. Please copy the password manually.');
        } finally {
            window.getSelection().removeAllRanges();
        }
    }
}



