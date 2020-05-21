
$(window).on('scroll', function(){
  if($(window).scrollTop()){
    $('nav').addClass('navbar-custom');
  }
  else{
    $('nav').removeClass('navbar-custom');
  }
});


// -----------------education-------------
var items = document.querySelectorAll('#timeline li');

var isInViewport = function isInViewport(el) {
  var rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
};

var run = function run() {
  return items.forEach(function (item) {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });
}; // Events


window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);

//---------------Skills-------------
(function($){
        new WOW().init();
    })(jQuery);



//---------------Quote SlidesHow-------------

    $("#slideshow > div:gt(0)").hide();

    setInterval(function() {
      $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    }, 3000);
