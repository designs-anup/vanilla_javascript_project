// console.log("responsive navigation");

const togglebtn = document.querySelector('.menuIconWrap')
const navMenu = document.querySelector('.nav')

togglebtn.addEventListener('click', function(){
    // console.log("nav button clicked");
    togglebtn.classList.toggle('menuClose')
    navMenu.classList.toggle('navStyle')
})