let burgerMenuFirstStick = document.querySelector('.burger-menu span:nth-child(1)')
let burgerMenuSecondStick = document.querySelector('.burger-menu span:nth-child(2)')
let burgerMenuThirdStick = document.querySelector('.burger-menu span:nth-child(3)')
let menu = document.querySelector('header nav ul')

let burgerMenu= document.querySelector('.burger-menu')

let flag = false
burgerMenu.addEventListener('click', () => {
    if(flag === false){
        burgerMenuFirstStick.style = 'transform:rotate(45deg);'
        burgerMenuSecondStick.style = 'display:none;'
        burgerMenuThirdStick.style = 'transform:rotate(135deg);bottom:17px;'
        menu.classList.add('show-menu')
        flag = true
    }else if(flag === true){
        burgerMenuFirstStick.style = 'transform:rotate(0deg);'
        burgerMenuSecondStick.style = 'display:inline-block;'
        burgerMenuThirdStick.style = 'transform:rotate(0deg);bottom:0px;'
        menu.classList.remove('show-menu')
        flag = false
    }
})

