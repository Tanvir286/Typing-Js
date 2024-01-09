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

let myCondition = false;
const button = document.getElementById("myButton");


let type = document.querySelector('.type')
let text = type.innerHTML.split('')
let plaintext = type.innerHTML
let count = -1;

type.innerHTML = ''




 function typejs() {
       if (count < text.length) {
           count++;
           type.innerHTML += plaintext.charAt(count);
           text = plaintext.split('') 
       }
       else{
            if(myCondition){
                text.pop()
                type.innerHTML = text.join('');
                console.log(count);
                if(text.length == 0){
                    myCondition = false;
                    
                }
                
            }
          
       }

}


let stop = setInterval(function() {
        typejs()
    },300);
    

button.addEventListener("click", function() {
        myCondition = true;
       
});    




     