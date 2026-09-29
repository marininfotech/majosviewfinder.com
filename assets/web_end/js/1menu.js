$(document).ready(function () {
 




  $('body').on('click','.hangburger_trigger',function(){

    $('.hamburger_menu').addClass('active');
    $('.bg_overlay').addClass('active');
 
  
});

$('body').on('click','.bg_overlay',function(){

  $('.hamburger_menu').removeClass('active');
  $('.bg_overlay').removeClass('active');


});


var menu = $('.menu_list').clone();
var login = $('.topLogin').clone();

$('.hamburger_menu').find('.menu_wrapper').append(menu);
$('.hamburger_menu').find('.loginMob').append(login);

$('.scrolldown').on('click', function(e) {

  e.preventDefault();

  $('html, body').animate({ scrollTop: $('.scrolldown').offset().top}, 500, 'linear');

});

$('body').on('click','.hamburger_menu .menu_item',function(){

  $(this).siblings().removeClass('active');
  
  $(this).toggleClass('active');
  // console.log($(this).parents().find('.menu_item').siblings().removeClass('active'));
  $(this).find('.arrow_down').toggleClass('rotate-y');


});


});

