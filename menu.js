var bielMenu = document.getElementById('biel-menu')
var menu = document.getElementById('menu-mobile')
var overlay = document.getElementById('overlay-menu-moba')

bielMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

// END
