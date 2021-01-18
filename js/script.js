//Checks that doc is loaded
alert("Hello! I have only been working on this site for a couple of days, and it is still under construction! For now, have fun getting to know me :)");
$( document ).ready(function() {
    console.log( "Doc ready!" );


//Animates subpic "Marian Abuhazi Interactive..." to be centered based on different screen sizes
var less600 = window.matchMedia("(max-width: 600px)");
var more600=window.matchMedia("(min-width: 600px)");

changeAnimate(less600);
changeAnimate(more600);

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

//Function that when Experiences button is clicked, it shows dropdown. commented out for now, because failing
// var experiencesBtn= $("#experiences");
// var dropdownItems=$(".dropdown-item");
//
// experiencesBtn.on("click", showDropdown);
//
// function showDropdown(){
//   dropdownItems.toggleClass("showExperiences");
//   console.log("Experiences Button clicked!");
// }



//Function that when Read More button is clicked, it expands div
var readMoreBtn= $("#readMore");
var readLessBtn= $("#readLess");
var arrows= $(".arrow-animation");
var rMPar= $(".readMorePar");

function showReadMore(){
  if(rMPar.css("display")=="none")
  {
    rMPar.addClass("showStyleReadMore");
    readMoreBtn.css("display", "none");
    readLessBtn.css("display", "block");
    arrows.css("display", "inline-block");
  }
  console.log("Read More Button clicked!");
}

function showReadLess(){
    rMPar.removeClass("showStyleReadMore");
    readLessBtn.css("display", "none");
    readMoreBtn.css("display", "block");
    arrows.css("display", "none");
    console.log("Read Less Button clicked!");
  }

readMoreBtn.on("click", showReadMore);
readLessBtn.on("click", showReadLess)



//function that when More about this role button is clicked, div expands to show images.
var moreRole= $(".roleBtn");
var zgbtn1= $("#zgrole1");
var zgbtn2= $("#zgrole2");
var zgbtn3= $("#zgrole3");

var zgImage1= $("#showRole-img-1");
var zgImage2= $("#showRole-img-2");
var zgImage3= $("#showRole-img-3");

function showMoreRole1(){
  if(zgImage1.css("display")=="none")
  {
    zgbtn1.text("Less about this role");
    zgImage1.css("display", "block");
  }
  else{
    zgbtn1.text("More about this role");
    zgImage1.css("display", "none");
  }
  console.log("More about this role Button 1 clicked!");
}

function showMoreRole2(){
  if(zgImage2.css("display")=="none")
  {
    zgbtn2.text("Less about this role");
    zgImage2.css("display", "block");
  }
  else{
    zgbtn2.text("More about this role");
    zgImage2.css("display", "none");
  }
  console.log("More about this role Button 1 clicked!");
}

function showMoreRole3(){
  if(zgImage3.css("display")=="none")
  {
    zgbtn3.text("Less about this role");
    zgImage3.css("display", "block");
  }
  else{
    zgbtn3.text("More about this role");
    zgImage3.css("display", "none");
  }
  console.log("More about this role Button 1 clicked!");
}


zgbtn1.on("click", showMoreRole1);
zgbtn2.on("click", showMoreRole2);
zgbtn3.on("click", showMoreRole3);

});
