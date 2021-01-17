//Checks that doc is loaded
$( document ).ready(function() {
    console.log( "Doc ready!" );

$(".headerPic").on('load', function() {
    console.log('Header Pic loaded');
//Animates subpic "Marian Abuhazi Interactive..." to be centered based on different screen sizes
var less600 = window.matchMedia("(max-width: 600px)");
var more600=window.matchMedia("(min-width: 600px)");
function changeAnimate() {
      if (less600.matches) {
        console.log("media query works for < 600px!");
        $(".headerSubpic").animate({
          opacity:'0.90',
          margin:'0',
          padding:'0',
          position: 'absolute',
          top: '65%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }, 850);
      }
      if (more600.matches) {
        console.log("media query works for > 600px!");
        $(".headerSubpic").animate({
          opacity:'0.90',
          margin:'0',
          padding:'0',
          position: 'absolute',
          top: '70%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }, 850);
      }
   }

changeAnimate(less600);
changeAnimate(more600);

})



//Fixes nav to the top and allows it to scroll to different parts of page
  let mainNavLinks = document.querySelectorAll("nav ul li a");
  let mainSections = document.querySelectorAll("main section");

  let lastId;
  let cur = [];


  window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;

    mainNavLinks.forEach(link => {
      let section = document.querySelector(link.hash);

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("current");
      } else {
        link.classList.remove("current");
      }
    });
  });

//Function that when Experiences button is clicked, it shows dropdown
var experiencesBtn= $("#experiences");
var dropdownItems=$(".dropdown-item");

experiencesBtn.on("click", showDropdown);

function showDropdown(){
  dropdownItems.toggleClass("showExperiences");
  console.log("Experiences Button clicked!");
}

//Function that when Read More button is clicked, it expands div
var readMoreBtn= $(".readMore");
var rMPar= $(".readMorePar");

function showReadMore(){
  if(rMPar.css("display")=="none"){
    rMPar.addClass("showReadMore");
    readMoreBtn.text("Read Less");
    $(".ProfileDiv-row").css("align-items", "flex-start");
    $("#marianSki").css("display", "block");
  }
  else{
    rMPar.removeClass("showReadMore");
    readMoreBtn.text("Read More About Me");
    $("#marianSki").css("display", "none");
  }
  console.log("Read More Button clicked!");
}

readMoreBtn.on("click", showReadMore);

});
