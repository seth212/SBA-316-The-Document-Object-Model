const MenuBar = document.querySelector('nav')

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

for (let i = 1; i <= 100; i ++){
const div = document.createElement('div');
div.classList.add('box')
div.textContent = Math.floor(Math.random() * 100) + 1;
grid.appendChild(div)
}

const boxes = document.querySelector('.box')

for (let box of boxes){
    box.addEventListener('click', function (event){
        event.target.style.transform = 'rotateY(180deg)'
    })
}