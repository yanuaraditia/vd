$('.date-picker').datepicker();
feather.replace();
$(document).ready(function(){
    getHeight();
});
$('.nav-overlay').click(function() {
    $('.navbar-collapse').toggleClass('show');
});
var hei = $('.main-navbar').height() + 40;
function getHeight() {
    $('.wrapper').css('--topH',hei+'px');
}
window.onscroll = function() {
    scrollFunction()
};
function scrollFunction() {
    if (document.body.scrollTop > hei || document.documentElement.scrollTop > hei) {
        $('.main-navbar').addClass('on-scroll');
    }
    else {
        $('.main-navbar').removeClass('on-scroll');
    }
}