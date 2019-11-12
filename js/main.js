jQuery(document).ready(function ($){

  $(function() {

    // the variable inWrap will be used in the class inner-wrapper
    var inWrap = $('.inner-wrapper');

    var bullet = $('.bullets .bullet');

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
    // if the next button is clicked
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

  // bulletpoints
  bullet.on('click', function () {

    // if you click on one of the bulletpoints, it will be active, if you click on another bulletpoint
    // the class will be removed and another bulletpoint will be active
    $(this).addClass('active').siblings().removeClass('active');

    slide = $(this).data('slide');
    if ($(this).hasClass('active')) {
        slide.animate({'margin-left': (bullet.length - $(this).data('image')) * width }, slideClick);
    }
  });

  // $("#controle1").click(function(e){
  //     $("#1").fadeIn();
  //     $("#2").fadeOut();
  //     $("#3").fadeOut();
  //   });

  //   $("#controle2").click(function(e){
  //     $("#1").fadeOut();
  //     $("#2").fadeIn();
  //     $("#3").fadeOut();
  //   });

  //   $("#controle3").click(function(e){
  //     $("#1").fadeOut();
  //     $("#2").fadeOut();
  //     $("#3").fadeIn();
  //   });


});
