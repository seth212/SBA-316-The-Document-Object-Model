const MenuBar = document.querySelector('nav')
const errorDisplay = document.getElementById('errorDisplay')

const menuLinks = [
    {text: 'Home', href: '#'},
    {text: 'Tips To Play The GAME!', href: '#'},
    {text: 'Contact', href: '#'},
    {text: 'About This Game', href: '#'}
]

for (let link of menuLinks){
    const a = document.createElement('a');
    a.textContent = link.text;
    a.href = link.href
    MenuBar.appendChild(a)
}

const nav = document.querySelector('nav')
nav.addEventListener('click', function (event){
    event.target.style.color = 'red';
    event.target.style.transform = 'scale(1.1)'
})


const grid = document.getElementById('grid')
let luckyNumber = null;

for (let i = 1; i <= 100; i++){
const div = document.createElement('div');
div.classList.add('box')
div.textContent = '?' 

div.addEventListener('click', function (event){
    event.target.style.transform = 'rotateY(360deg)';

    const newNumber = Math.floor(Math.random() * 100)+ 1;
    event.target.textContent = newNumber;

    if (luckyNumber === null){
        luckyNumber = newNumber;
        alert(`Your lucky number is ${luckyNumber}`)
    }

    else if (newNumber === luckyNumber){
        alert(`You matched your lucky number ${luckyNumber}, YOU WIN!`)
    }

    setTimeout(function(){
        event.target.textContent = newNumber;
        event.target.style.color = 'yellow'
    }, 250)
})
grid.appendChild(div)
}

const passwordInput = document.getElementById('password');
passwordInput.addEventListener('input', function(event){
if(passwordInput.value.toLowerCase().includes('password')){
    errorDisplay.style.display = 'flex';
    errorDisplay.textContent = `Password cannot have the word 'password'`

} else{
     errorDisplay.style.display = 'none';
    errorDisplay.textContent = '';
}
})

const passwordCheck = document.getElementById('passwordCheck');
passwordCheck.addEventListener('input', function (event){
    if(passwordInput.value !== '' && passwordCheck.value !== passwordInput.value){
        errorDisplay.style.display = 'flex'
        errorDisplay.textContent = 'Passwords do not match'

    } else {
        errorDisplay.style.display = 'none';
        errorDisplay.textContent = ''
    }
});


const backgroundSound = document.getElementById('backgroundSound');

grid.addEventListener('click', function (event){
    backgroundSound.play();
    backgroundSound.loop = true;
})

const boxclickSound = document.getElementById('boxclickSound');
const boxes = document.querySelectorAll('.box');

for(box of boxes){
    box.addEventListener('click', function(event){
        boxclickSound.play()
    })
}


