// document.querySelector("button").addEventListener('click', handleclick);

// function handleclick(){
//     alert('Hey you clicked me!!');
// }

// document.querySelector("button").addEventListener('click',
//     function () {
//         alert('Hey you clicked me using anonymous function!!');
//     });


// Writing only function name means passing it as parameter
// and adding paranthesis means calling it right then and there itself.
//beware of it/

for(let i = 0; i<document.querySelectorAll('.drum').length; i++)
document.querySelectorAll(".drum")[i].addEventListener('click',function (){
    let expression = this.innerHTML;
    makeSound(expression);
    addAnimation(expression);
   
} );



// Now instead of adding keydown event to any of the query 
// we are going to add it to the whole document to listen to it.

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    addAnimation(event.key);
})

function makeSound(expression)
{
    switch (expression) {
        case 'w': 
                var tom1 = new Audio('/sounds/tom-1.mp3')
                tom1.play();
            break;
    
        case 'a': 
                var tom2 = new Audio('/sounds/tom-2.mp3')
                tom2.play();
            break;
    
        case 's': 
                var tom3 = new Audio('/sounds/tom-3.mp3')
                tom3.play();
            break;
    
        case 'd': 
                var tom4 = new Audio('/sounds/tom-4.mp3')
                tom4.play();
            break;
    
        case 'j': 
                var snare = new Audio('/sounds/snare.mp3')
                snare.play();
            break;
    
        case 'k': 
                var crash = new Audio('/sounds/crash.mp3')
                crash.play();
            break;
        case 'l': 
                var kick = new Audio('/sounds/kick-bass.mp3')
                kick.play();
            break;
    
        default: console.log(expression);
            break;
    }
}

function addAnimation(key)
{
    document.querySelector('.' + key).classList.add('pressed');

    setInterval(function (){
        document.querySelector('.' + key).classList.remove('pressed');
    }, 100);
}