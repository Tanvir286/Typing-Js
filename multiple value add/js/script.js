

let type = document.querySelector('.type')
let click = document.querySelector('.click')


type.innerHTML = 'Hello!!'


function change() {

    let text = type.innerHTML.split('')
    let plaintext = type.innerHTML
    let count = -1;

    type.innerHTML = ''
    console.log(text);


    function typejs() {
       if (count < text.length) {
           count++;
           type.innerHTML += plaintext.charAt(count);
           text = plaintext.split(''); 
       }
       else{
           text.pop()
           console.log(text);
           type.innerHTML = text.join('')
           if (text.length == 0) {
               count = -1;
               clearInterval(stop);
           }
       }

    }

    let stop = setInterval(function() {
         typejs()
     },300);
}


change();



click.addEventListener("click", function () {
    type.innerHTML = 'i love allah'
   
    change();
   
  });   