/**
 * Created by ebad on 3.4.2016.
 */
$(function(){
    var $window = $(window);
    var $slideAd = $('#slideAd');
    var endZone = $('#footer').offset().top - $window.height() - 500;

    $window.on('scroll', function(){
        if ((endZone) < $window.scrollTop()){
            $slideAd.animate({'right': '0px'}, 250);
        } else {
            $slideAd.stop(true).animate({'right': '-360px'}, 250);
        }
    });
});