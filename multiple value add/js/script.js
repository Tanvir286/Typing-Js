let wordToDisplay = ["Tohomina", "Tanvir", "soysov","Ahamed","Sukonna","Suhana"]; // Words to display as an array
let typeElement = document.querySelector('.type'); // HTML element with the class 'type'
let arrIndex = 0;
let characters = wordToDisplay[arrIndex].split(''); // Split the word into an array of characters

typeElement.innerHTML = ''; // Clear any existing content in the 'type' element

let currentIndex = 0; // Initialize the index
let text; // Variable to store the text array

function typeWord() {
    if (currentIndex < characters.length) {
        typeElement.innerHTML += characters[currentIndex];
        currentIndex++;
        text = typeElement.innerHTML.split('');
    } else {
        text.pop();
        typeElement.innerHTML = text.join('');
        if (text.length === 0) {
            currentIndex = 0;
            if (arrIndex < wordToDisplay.length - 1) {
                arrIndex++;
                characters = wordToDisplay[arrIndex].split('');
            } else {
                arrIndex = 0;
                characters = wordToDisplay[arrIndex].split('');
            }
        }
    }
}

// Log the array of characters
console.log(characters);

// Set an interval to call the 'typeWord' function every 300 milliseconds
let typingInterval = setInterval(typeWord, 300);
