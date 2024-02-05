// // for(i=0;i<=text.length;i++){
// //     type.innerHTML += text.charAt(i)+'as'
// // }
// type.innerHTML = ''

// function typejs() {
//     count++;
//     type.innerHTML += text.charAt(count)
//     console.log(count);
    
//     if (count > text.length) {
//         type.innerHTML = ''
//          count =- 1;
//     } 
// }
   


// let stop = setInterval(function() {
//     typejs()
// },300)


const wordToDisplay = "MD. Tanvir Ahamed Soysov";  // Word to display
const typeElement = document.querySelector('.type'); // HTML element with the class 'type'
const characters = wordToDisplay.split(''); // Split the word into an array of characters

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
        }
    }
}

// Log the array of characters
console.log(characters);

// Set an interval to call the 'typeWord' function every 300 milliseconds
let typingInterval = setInterval(typeWord, 300);
