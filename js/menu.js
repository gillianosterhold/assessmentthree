window.addEventListener("DOMContentLoaded", function(event) {
    let isOpen = false;

//  these are the names of the id for the button and the settings menu.
 const accountMenu = document.querySelector("#mobile-menu");
 const accountButton = document.querySelector("#mobile-menu-button");
 

// Code to open and close the settings menu.
accountButton.onclick =()=>{
   accountMenu.classList.toggle('hidden');
}


 /*
 https://greensock.com/docs/Easing/Bounce
 easing graph
 */

//  code to animate mobile navigation menu.
  menuOpenButton.onclick = (e)=>{
     isOpen = !isOpen;
     if(!isOpen){
         TweenMax.to(menu,  0.8, {top:"-55vh",    ease:Power4.easeOut});
     }else{
         TweenMax.to(menu, 0.5,  {top:"65px",   ease:Power4.easeOut});
     }
  }
 
  
 
});