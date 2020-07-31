var menu = document.getElementById('menu')
var nav = document.getElementById('nav')
var exit = document.getElementById('exit')

menu.addEventListener('click', function(){
    nav.classList.remove('hide-mobile')
})

exit.addEventListener('click', function(){
    nav.classList.add('hide-mobile')
})
 // Automatic Slideshow - change image every 3 seconds
 var myIndex = 0;
 carousel();
 
 function carousel() {
   var i;
   var x = document.getElementsByClassName("mySlides");
   for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
   }
   myIndex++;
   if (myIndex > x.length) {myIndex = 1}
   x[myIndex-1].style.display = "block";
   setTimeout(carousel, 3000);
 }