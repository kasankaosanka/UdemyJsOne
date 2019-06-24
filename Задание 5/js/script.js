let menu = document.querySelector('.menu'),
    menuItem = menu.querySelectorAll('.menu-item'),
    newMenuItem = document.createElement('li'),
    column = document.querySelectorAll('.column'),
    adv = column[1].querySelector('.adv'),
    promptBlock = document.getElementById('prompt');

menu.insertBefore(menuItem[2], menuItem[1]);
newMenuItem.classList.add('menu-item');
newMenuItem.textContent = 'Пятый пункт';
menu.appendChild(newMenuItem);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

column[1].removeChild(adv);

let opinion = prompt("Как вы относитесь к технике Apple?");
promptBlock.textContent = opinion;

