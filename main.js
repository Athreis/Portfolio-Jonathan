// hamburger

const navigasiMobile = document.querySelector ('#hamburger');
const navbar = document.querySelector ('#NavBar')
 
navigasiMobile.addEventListener('click', function(){
    navigasiMobile.classList.toggle('navigasimobile-active');
    navbar.classList.toggle('hidden');
    
});



//navbar fxed

window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    
    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed')
    } else{
        header.classList.remove('navbar-fixed')
    }
}





