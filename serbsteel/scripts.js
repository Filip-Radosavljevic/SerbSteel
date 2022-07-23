const header = document.querySelector('.header');

window.onscroll = function() {
var top = window.scrollY;
console.log(top);

if (top >=400) {
    header.classList.add('active');
}

else {
    header.classList.remove('active');
}

}




  // Add smooth scrolling to all links
  // $("a").on('click', function(event) {

  //   // Make sure this.hash has a value before overriding default behavior
  //   if (this.hash !== "") {
  //     // Prevent default anchor click behavior
  //     event.preventDefault();

  //     // Store hash
  //     var hash = this.hash;

  //     // Using jQuery's animate() method to add smooth page scroll
  //     // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
  //     $('html, body').animate({
  //       scrollTop: $(hash).offset().top
  //     }, 800, function(){

  //       // Add hash (#) to URL when done scrolling (default click behavior)
  //       window.location.hash = hash;
  //     });
  //   } // End if
  // });

const hamburg = document.getElementById('hamburg');
const navigation = document.getElementById('navigation');

// Show up the responsive nav//
function navShow() {
  navigation.style.display = "block";
  setTimeout(function() {
    navigation.style.transform = "translateY(0)";
    setTimeout(function() {
      hamburg.setAttribute('onclick', 'navHide()');
    }, 100);
  }, 100);
}
function navHide() {
  navigation.style.transform = "translateY(-115%)";
  setTimeout(function() {
    navigation.style.display = "block";
    setTimeout(function() {
      hamburg.setAttribute('onclick', 'navShow()');
    }, 100);
  }, 100);
}



