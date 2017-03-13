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
  
    if (myHeader.height() < 640) {
        myHeader.height($(window).height()+300);
    }
    
    myHeader.width($(window).width());

    $(window).resize(function () {
        myHeader.height($(window).height());
        if (myHeader.height() < 640) {
            myHeader.height($(window).height()+300);
        }

        myHeader.width($(window).width());
    });
    
    //Change Contact Page Height
    
    var myContact = $(".contact");

    myContact.height($(window).height());
    
    if (myContact.height() < 640) {
        myContact.height($(window).height()+500);
    }
    
    // Menu Bar In Small Screen
    var click = 0;
    
    $('.fa-bars').click(function () {
        
        if (click == 0) {
            $('.links').addClass('active-menu');
            $('.links').hide();
            $('.links').slideDown(400);
           
//            $('.links').addClass('active-menu').removeClass('hide');

            click ++;
        } 
        else {

            $('.links').slideUp(400);
            $('.links').addClass('active-menu');
          //  $('.links').removeClass('active-menu');
            click --;
        }
        
    });
    
//    if (click > 0){
//        $('.links').hide();
//        click = 0;
//    }
  //  $('.links').addClass('active-menu');
    

   
    
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
            scrollTop: $('.features').offset().top -110     
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
    
    /*--------- Down Counter ----------*/
    
    // Set the date we're counting down to
    var countDownDate = new Date("april 5, 2017 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
    
    // Adjust MixItUp

    $('#Container').mixItUp();

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
