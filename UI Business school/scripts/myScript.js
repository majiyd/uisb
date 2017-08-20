$('.main').click(function(){
  $('.nav-bar').toggle('fast');
});

$('#slideshow').hover(function() {
  $('#prev, #next').css('display','block');
});
$('#hide-prev-next').hover(function() {
  $('#prev, #next').hide();
});
