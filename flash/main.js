$(document).ready(function(){
  $('div img').on("mouseenter",function(){
    $(this).addClass('animated flash');
  });
  
  $('div img').on("mouseleave",function(){
    $(this).removeClass('animated flash');
  });
  
});