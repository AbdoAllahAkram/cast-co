/*jshint -W117*/

$(function () {
    
    'use strict';
    
    // Trigeer NiceScroll
    
    $('html').niceScroll({
        cursorcolor: '#dc0008',
        cursorwidth: '8px',
        cursorborderradius: '3px',
        cursorborder: '0',
    });
    
    $("html").mouseover(function() {
        $("html").getNiceScroll().resize();
    });
    
    //Change Header Height
        
    var myHeader = $(".header");

    myHeader.height($(window).height());
    myHeader.width($(window).width());

    $(window).resize(function () {

        myHeader.height($(window).height());
        myHeader.width($(window).width());

    });
    
    
    // Links Add class Active

   /* $(".links li").click(function() {

        $(this).addClass("active").siblings().removeClass("active");
    });
    
    */
    
//    $('body').swipe({
//        swipe: function(event, direction) {
//        alert (direction);
//        }
//    });
    
    // arrow of scroll up

    $(window).on("scroll", function () {
        var scr = $(window).scrollTop();

        if( scr >450) {
            $('.fa-chevron-up').fadeIn();
        }
        else {
            $('.fa-chevron-up').fadeOut();
        }

    });
    
    //Make Smooth Scroll 

    $('.fa-chevron-up').click (function () {
        $('html, body').animate({

            scrollTop: 0 
        } ,900);
    });

    $('.links a').click (function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value') ).offset().top - 20,
        }, 900 );

        console.log($(this).data('value'));
    }); 
    
    //Scroll To Features
    
    $('.links a').click (function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value') ).offset().top - 20,
        }, 900 );

        console.log($(this).data('value'));
    });
    
    $('.header .arrow i').click(function () {
        $('html, body').animate({
            scrollTop: $('.features').offset().top     
        }, 700);
    });
    
    $('.hire').click(function () {
        
        $('html, body').animate({
            scrollTop: $('.contact').offset().top     
        }, 700);
        
    });
    
    $('.work-button').click(function () {

        $('html, body').animate({
            scrollTop: $('.our-work').offset().top     
        }, 700);

    });
    
    // Display Items 
    
    $('.show-more').click(function () {
        $('.our-work .hidden').fadeIn(); 
        $('.our-work .show-more').fadeOut();
    });
    

    // Project Selector

    $('.project li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');	
    });
    
    // Check Our-client 
        
    var leftArrow = $('.our-client .fa-angle-left'),
        rightArrow = $('.our-client .fa-angle-right');
    
    function checkClients() {
        $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
        
        $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
    }
    
    checkClients();
    
    $('.our-client i').click(function () {
        if ($(this).hasClass('fa-angle-right')) {
            $('.our-client .active').fadeOut(100, function () {
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                checkClients();
            });
        } else {
            
            $('.our-client .active').fadeOut(100, function () {
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                checkClients();
            });
        }
    });
});
