// // Make menu bar can change active selection
var header = document.getElementById("menu_selection");
var slc = header.getElementsByClassName("nav_selection");
for (var i = 0; i < slc.length; i++) {
  slc[i].addEventListener("click", function () {
    var cur = document.getElementsByClassName("active");
    cur.className = cur.className.replace("active", "");
    this.className += " active";
  });
}

// // Make responsive website
function myFunction() {
  var x = document.getElementById("menu_selection");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// // Scroll to reveal
tmp = ScrollReveal({
  origin: "left",
  distance: "50px",
  duration: 1000,
  reset: true,
});
tmp.reveal(".first_about", { delay: 200 });
tmp1 = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 1000,
  reset: true,
});
tmp2 = ScrollReveal({
  origin: "right",
  distance: "50px",
  duration: 1000,
  reset: true,
});
tmp1.reveal(".education", { delay: 200 });
tmp1.reveal(".Skills", { delay: 200 });
tmp1.reveal(".pro_language", { delay: 200 });
tmp1.reveal(".web_programming", { delay: 200 });
tmp1.reveal(".edu_title", { delay: 200 });
tmp1.reveal(".education_milestone", { delay: 200 });
tmp1.reveal(".projects", { delay: 200 });
tmp1.reveal(".contact_me", { delay: 200 });
tmp1.reveal(".contact_title", { delay: 200 });
tmp1.reveal(".contact_list", { delay: 200 });
tmp1.reveal(".the_end", { delay: 200 });
tmp1.reveal(".btn", { delay: 200 });

// Go to top button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Smooth scrolling

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        400,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
