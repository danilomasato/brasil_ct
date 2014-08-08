document.write(unescape("%3Cscript src='assets/js/jquery-1.10.2.min.js' type='text/javascript'%3E%3C/script%3E"));  
document.write(unescape("%3Cscript src='assets/js/jquery.cycle2.js' type='text/javascript'%3E%3C/script%3E")); 
document.write(unescape("%3Cscript src='assets/js/jquery.reveal.js' type='text/javascript'%3E%3C/script%3E")); 

window.onload=function(){

/****** jquery fallback *************************************************************************************/
if (typeof jQuery == 'undefined') {
    document.write(unescape("%3Cscript src='assets/js/jquery-1.10.2.min.js' type='text/javascript'%3E%3C/script%3E"));
}

/*--- Menu --------------------------------------------------------------------------*/
$('.linkNav').on('click',function(){
      var alvo = $(this).attr('href').split('#').pop();
      $('html, body').animate({scrollTop: $('#'+alvo).offset().top }, 1000);
      return false;
   
});

$('#nav > ul > li:eq(0)').css({ "margin":"0 0 0 100px" });
$('#nav > ul > li:eq(3)').css({ "margin":"0 0 0 250px" });

/*--- Banner --------------------------------------------------------------------------*/
$('#bannerCarousel').cycle({ 
    fx:     'fade',  
    speed:  'slow', 
    timeout: 2000,  
    next:   '.next1', 
    prev:   '.prev1',
    pager:  '#pager'
});

/*--- Carousel Prod --------------------------------------------------------------------------*/
$('#prodDestaques').cycle({ 
    fx:     'fade',  
    speed:  'slow', 
    timeout: 2000,  
    next:   '.next', 
    prev:   '.prev'
});

var ck = {}

ck.dataProduct = function () {
}

ck.reviews = function () {
}

ck.Gallery = function () {

}
   
ck.init = function () {
    ck.dataProduct();
    ck.reviews();
    ck.Gallery();
}

$(ck.init);

/****************************************************************************************************************/
};
