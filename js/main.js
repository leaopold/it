$ = jQuery.noConflict();//Fix

function main() {

    (function () {
       'use strict';
    var navbar_init = function(){
        if ($(window).scrollTop() > 50) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    };

    var totop_init = function(){
        var $toTop = $('#totop');
        if ($(window).scrollTop() > 100) {
            $toTop.fadeIn();
        } else {
            $toTop.fadeOut();
        }
    };

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: $('.navbar').height()+1
    })

    $(document).on('click', "a[href='#totop']", function(e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
    
    navbar_init();
    totop_init();
    $(window).scroll(function() {
        navbar_init();
        totop_init();
    });

}());


}
main();
$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
 });