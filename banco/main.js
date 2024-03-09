let menu = document.querySelector('#menu-btn');
let navegation = document.querySelector('.navegation');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navegation.classList.toggle('active');

}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navegation.classList.remove('active');


}

// login e register
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnpopup= document.querySelector('.btnLogin-popup');
const iconClose= document.querySelector('.icon-close');


registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');

});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');

});
btnpopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');

});
iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');

});