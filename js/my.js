// the slideIndex begins at the first number of the array, which is 0
var slideIndex = 0;
showImage(slideIndex);
var dot_section = document.getElementsByClassName("dot_section");

// the previous and next button
function plusIndex(increment)
{
  showImage(slideIndex += increment);
}
// The currentSlide is is function for the bulletpoints
//the slideIndex = the slideNumber, which means in the array,
// if you click on the first one, you will get 0 and that's also the first slide
function currentSlide(slideNumber){
  showImage(slideIndex = slideNumber);
}

function showImage(n){
  // it picks all the images with that classname
  var slide = document.getElementsByClassName("slider-item");

  if (n > slide.length) // if image is greater than the slide length, it will return one
  // Which means that there will be a cyclus, it goes back to the first slider
  {
    slideIndex = 1
  };

  if (n < 1)
  {
    slideIndex = slide.length
  };

  for (var i = 0; i < slide.length; i++)  // all the slides are being displayed to none
  {
    slide[i].style.display = "none";
  }
  slide[slideIndex-1].style.display = "block"; //The slideIndex gives an index of one so 1-1 gives a result of display

  // This is where the function for the bulletpoints
  // When you click on a dot, and the value of it is greater than 0, it will show your slide you clicked
  // Once you click on a bullet and then on the next button, it will be no longer active
  for (var i = 0; i < dot_section.length; i++) {
    dot_section[i].className = dot_section[i].className.replace("active", "");
  }

  // if you click on one of the bulletpoints, with the class name dot_section, you will go to the slide
  dot_section[slideIndex-1].className += "active";

}
