// fixed menu
$(window).scroll(function(){
  $scrollamount = $(window).scrollTop();
  
  if($scrollamount>130){
    $(".menu").addClass("fixed");
  }else{
    $(".menu").removeClass("fixed");
  }

  // if($scrollamount>1000){
  //   $(".btop").fadeIn();
  // }else{
  //   $(".btop").fadeOut();
  // }

  if($scrollamount>300){
    $(".back_top").css("visibility","visible");
  }else{
    $(".back_top").css("visibility","hidden");
  }
})



$('#banner_part').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
});

//WORK_PART VENOBOX JS
$('.venobox').venobox();

//CLIENT_PART SLIDER JS
$('.active_slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
     prevArrow: false,
    nextArrow: false,
    
});

//BLOG_PART SLIDER JS
$('.active_blog').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
     prevArrow: false,
    nextArrow: false,
    
});

//PARTNER_SLIDER JS

$('').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
     prevArrow: false,
    nextArrow: false,
    
});

//MIXITUP
var mixer = mixitup('.work');

// COLOR SHIWCHER

$(".rong").change(function(){
  console.log()
  $(".ami").css("color", $(".rong").val())
})







