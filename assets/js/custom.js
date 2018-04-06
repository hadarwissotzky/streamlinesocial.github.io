$(document).on('ready', function () {
    
    "use strict";
    
    var win = $(window);
            
    
    win.on('load', function () {
        $('.loading-overlay').fadeOut(100);
    });
    
   
  
    win.on("scroll", function () {
      var wScrollTop  = $(window).scrollTop();    
        
        if (wScrollTop > 150) {
            $("#pageHeader").addClass("shrink");
        } else {
            $("#pageHeader").removeClass("shrink");
        }
    });


     // Bootstrap Scroll Spy //
       
    $("body").scrollspy({
        target: ".navbar-collapse",
        offset: 70
    });
    
     // Collapse navigation on click on nav anchor in Mobile //
       
    $(".nav a").on('click', function () {
        $("#myNavbar").removeClass("in").addClass("collapse");
    });

     // navbar Scroll //
     
    $(".navbar-nav li a, .navbar-brand, .button a, .a-btn, .a-btn-style-1,.a-btn-style-2, .a-btn-style-3").on("click", function (e) {
        var anchor = $(this);
        $("html, body").stop().animate({
            
            scrollTop: $(anchor.attr("href")).offset().top - 60
        }, 1000);
        e.preventDefault();
    });
	
	 $(".sidebar-menu ul li a, .side .a-btn").on("click", function (e) {
        var anchor = $(this);
        $("html, body").stop().animate({
            
            scrollTop: $(anchor.attr("href")).offset().top
        }, 1000);
        e.preventDefault();
    });
    
    $('.sidebar-menu .fa-times').on('click', function () {
        $('.sidebar-menu').addClass('hide-menu');
        $('.toggle-menu .fa').removeClass('hide-toggle');
    });
    
    $('.toggle-menu .fa').on('click', function () {
        $('.sidebar-menu').removeClass('hide-menu');
        $(this).addClass('hide-toggle');
    });
	
	//  section skills
	
	var wind = $(window);

    var main_height = $(".main-height").outerHeight();
 
    wind.on('scroll', function () {
        $(".skills-progress span").each(function () {
            var bottom_of_object = 
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = 
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).css({
                  width : myVal
                });
            }
        });
    });
	
	$('.counter').counterUp({
        delay: 50,
        time: 2000
    });
 
	
	$('.slider .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 650,
    });
	
	
	// slider of team section
    $('.team .owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 650,
        responsiveClass:true,
        responsive : {
            992 : {
                items: 3
            },
    
            768 : {
                items: 2
            },
            
            0 : {
                items: 1
            }
        }
        
    });
	
	 
	
	// slider of clients section
    $('.clients .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 650
    });
    
  
	// slider of blog section
    $('.blog .owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 650,
        responsiveClass:true,
        responsive : {
            992 : {
                items: 3
            },
    
            768 : {
                items: 2
            },
            
            0 : {
                items: 1
            }
        }
        
    });
	
	// slider of team section
    $('.partners .owl-carousel').owlCarousel({
        items: 6,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        smartSpeed: 600,
        responsiveClass:true,
        responsive : {
            992 : {
                items: 6
            },
    
            768 : {
                items: 4
            },
            
            0 : {
                items: 2
            }
        }
        
    });
	
	
	// swiper slider for carousel page
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
        effect: 'fade',
		speed: 500
    });
	
	// dynamic tabs
	
	$('.services-tabs ul li').on('click', function(){
		var myID = $(this).attr('id');
		$(this).addClass('active').siblings().removeClass('active');
		
		
		$('#' + myID + '-content').fadeIn(700).siblings().hide();
	});
	
	$('.element').typed({
        strings: [ " Creative Agency",  "  The Best One Page", " Akser Creative page"],
        loop: true,
        showCursor: true,
        startDelay: 2000,
        backDelay: 2500,
		typeSpeed: 60
    });
	
	$('.freelancer-typed').typed({
        strings: [ " Web Developer",  "  Hard Working", " Web Designer"],
        loop: true,
        showCursor: true,
        startDelay: 2000,
        backDelay: 2500,
		typeSpeed: 60
    });
	
	// text animated page
	$('.tlt').textillate({
        loop: true,
        // in animation settings.
        in: {
            // set the delay factor applied to each consecutive character         
            delayScale: 0.8,

            // set the delay between each character
            delay: 100,

            // set to true to animate all the characters at the same time
            sync: false,

            // randomize the character sequence
            // (note that shuffle doesn't make sense with sync = true)
            shuffle: false,

            // reverse the character sequence
            // (note that reverse doesn't make sense with sync = true)
            reverse: false,

            // callback that executes once the animation has finished
            callback: function () {}
        },
        // out animation settings.
        out: {
            delayScale: 10,
            delay: 5,
            sync: false,
            shuffle: false,
            reverse: true,
            callback: function () {}
        },

       // callback that executes once textillate has finished
        callback: function () {} ,

    });
	
	
	// creative-1-animated for creative-1 page
	$('.creative-1-animated').textillate({
        loop: true,
        // in animation settings.
        in: {        
            delayScale: 30,
            delay: 0.1,
            callback: function () {}
        },
        // out animation settings.
        out: {
            delayScale: 1,
            delay: 1,
            callback: function () {}
        },
        callback: function () {} ,

    });
	
	
	
	
	// contact form
    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });
	
	// Caching The Scroll Top Element
	var scrollButton = $('#scroll-top');
    win.on('scroll', function () {
        if ($(this).scrollTop() >= 700) {
            
            scrollButton.show();
            
        } else {
            
            scrollButton.hide();
        }
        
    });
    
    // Click On Button To Scroll Top
    
    scrollButton.on('click', function () {
        
        $('html,body').animate({ scrollTop : 0 }, 1100);
        
    });
	
});
