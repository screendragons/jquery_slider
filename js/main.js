jQuery(document).ready(function ($){
  //previous and next button
  $(function() {

    // the variable inWrap will be used for the class inner-wrapper
    var inWrap = $('.inner-wrapper');

    // previous button
    // if you click on the previous button it will go back to the previous slider the .prev will target the inner-wrapper class
    // which is defined in line 6
    $('.prev').on('click', function()
    {
      // previous button (animation)
      inWrap.animate({left: '0%'}, function()
      {
        // previous button (css)
        // when the previous button is clicked, the slider will go to the left with -100%, it picks the css of the class
        inWrap.css('left', '-100%');

        // after the first slider it will go back to the last slider. Using the class slide, it targets all the classes with slide
        // and in the class slide, there are the images
        $('.slide').first().before($('.slide').last());
      });
    });


    // next button
    // When you click the next button
    $('.next').on('click', function()
    {
      // next button (animation)
      // the slide will go to the left with 200%, which means that you will see your second slide
      inWrap.animate({left: '-200%'}, function()
      {
        // next button (css)
        // when the next button is clicked, the slider will go to the move to the right, it picks the css of the class
        inWrap.css('left', '-100%');

        // after the last slider it will go back to the first slider. Using the class slide, it targets all the classes with slide
        // and in the class slide, there are the images
        $('.slide').last().after($('.slide').first());

      });
    });
  });

  // bullets
  $(document).ready(function() {
    // bullet one
    // When bullet one in the navigation is clicked, the class active will be added to the id #bullet1
    // and the id of the slider, #0 will be selected by the class selected
    $('#bullet1').click(function(){
      deselect();
      $(this).addClass('active');
      $('img #0').addClass('selected');
    });

    // bullet two
    $('#bullet2').click(function(){
      deselect();
      $(this).addClass('active');
      $('img #1').addClass('selected');
    });

    // bullet three
    $('#bullet3').click(function(){
      deselect();
      $(this).addClass('active');
      $('img #2').addClass('selected');
    });
   });

  // deselect function
  // if an bullet is deselected, the class active will be removed when another bullet is selected
  function deselect(){
   $('#bullet1, #bullet2, #bullet3').removeClass('active');
   // the class of the id 0, 1 and 2 (= id of the slides) will be removed when another bullet is selected
   $('img #0, img #1, img #2').removeClass('selected');
  }

});
