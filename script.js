const body = document.querySelector('body');
const desktopImg = document.querySelector('.big-pic');
const mobileImg = document.querySelector('.hidden-img')
const firstBigDiv = document.querySelector('.bs-one-half');
const header = document.querySelector('.buttons');
const menuContent = document.querySelector('.menu-content');
const hamburger = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu-btn');


hamburger.addEventListener('click', function(){
  console.log(menuContent)
  console.log(hamburger)
  menuContent.classList.toggle('menu-visibility')
  body.style.position = 'fixed';
  body.style.backgroundColor = 'hsl(233, 8%, 79%)'
  mobileImg.style.filter = 'brightness(0.5)'
})

closeMenu.addEventListener('click', function(){
  menuContent.classList.toggle('menu-visibility')
  body.style.position = 'relative';
  body.style.backgroundColor = 'white'
  mobileImg.style.filter = 'brightness(1)'
})
