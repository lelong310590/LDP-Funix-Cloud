jQuery(document).ready(function($) {
	if ($('#carouselList').length)
	{
		$('#carouselList').owlCarousel({
			loop:true,
		    dots: false,
			nav: false,
			margin: 10,
			autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
		    responsive:{
		        0:{
		            items:1,
		        },
		        600:{
		            items:3,
		        },
		        1000:{
		            items:3,
		        }
		    }
		});

		$(".carousel-next").click(function(event) {
			$(this).parent().next().trigger('next.owl.carousel');
		});

		$(".carousel-prev").click(function(event) {
			$(this).parent().next().trigger('prev.owl.carousel');
		});
	}

	$('body').on('click','.smooth',function(){
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});


	if ($(window).width() > 992) 
	{
		// $('.timeInfoLink').click(function(event) {
		// 	$('#timeInfo').show();
		// 	$('#connectInfo').hide();
		// 	$('#knowledgeInfo').hide();
		// 	$('#socialInfo').hide();
		// 	$('#methodInfo').hide();
		// });

		// $('.connectInfoLink').click(function(event) {
		// 	$('#timeInfo').hide();
		// 	$('#connectInfo').show();
		// 	$('#knowledgeInfo').hide();
		// 	$('#socialInfo').hide();
		// 	$('#methodInfo').hide();
		// });

		// $('.knowledgeInfoLink').click(function(event) {
		// 	$('#timeInfo').hide();
		// 	$('#connectInfo').hide();
		// 	$('#knowledgeInfo').show();
		// 	$('#socialInfo').hide();
		// 	$('#methodInfo').hide();
		// });

		// $('.socialInfoLink').click(function(event) {
		// 	$('#timeInfo').hide();
		// 	$('#connectInfo').hide();
		// 	$('#knowledgeInfo').hide();
		// 	$('#socialInfo').show();
		// 	$('#methodInfo').hide();
		// });

		// $('.methodInfoLink').click(function(event) {
		// 	$('#timeInfo').hide();
		// 	$('#connectInfo').hide();
		// 	$('#knowledgeInfo').hide();
		// 	$('#socialInfo').hide();
		// 	$('#methodInfo').show();
		// });

		// $('#connectInfo').hide();
		// $('#knowledgeInfo').hide();
		// $('#socialInfo').hide();
		// $('#methodInfo').hide();

		// var timeInfoSectionHeight = parseInt($('#timeInfo').offset().top);
		// var lastScroll = 0;

		// $(window).scroll(function() {
		// 	var st = parseInt($(this).scrollTop());
		// 	if (st < 1850) {
		// 		$('#timeInfo').show(400);
		// 		$('#connectInfo').hide(400);
		// 		$('#knowledgeInfo').hide(400);
		// 		$('#socialInfo').hide(400);
		// 		$('#methodInfo').hide(400);
		// 	}

		// 	if (st >= 1850 && st < 1950) {
		// 		$('#timeInfo').hide(400);
		// 		$('#connectInfo').show(400);
		// 		$('#knowledgeInfo').hide(400);
		// 		$('#socialInfo').hide(400);
		// 		$('#methodInfo').hide(400);
		// 	}

		// 	if (st >= 1950 && st < 2000) {
		// 		$('#timeInfo').hide(400);
		// 		$('#connectInfo').hide(400);
		// 		$('#knowledgeInfo').show(400);
		// 		$('#socialInfo').hide(400);
		// 		$('#methodInfo').hide(400);
		// 	}

		// 	if (st >= 2050 && st < 2100) {
		// 		$('#timeInfo').hide(400);
		// 		$('#connectInfo').hide(400);
		// 		$('#knowledgeInfo').hide(400);
		// 		$('#socialInfo').show(400);
		// 		$('#methodInfo').hide(400);
		// 	}

		// 	if (st >= 2100 ) {
		// 		$('#timeInfo').hide(400);
		// 		$('#connectInfo').hide(400);
		// 		$('#knowledgeInfo').hide(400);
		// 		$('#socialInfo').hide(400);
		// 		$('#methodInfo').show(400);
		// 	}

		// 	lastScroll = st;
		// });
		new WOW().init();
	}

});	