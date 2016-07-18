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
		$('.timeInfoLink').click(function(event) {
			$('#timeInfo').show();
			$('#connectInfo').hide();
			$('#knowledgeInfo').hide();
			$('#socialInfo').hide();
			$('#methodInfo').hide();
		});

		$('.connectInfoLink').click(function(event) {
			$('#timeInfo').hide();
			$('#connectInfo').show();
			$('#knowledgeInfo').hide();
			$('#socialInfo').hide();
			$('#methodInfo').hide();
		});

		$('.knowledgeInfoLink').click(function(event) {
			$('#timeInfo').hide();
			$('#connectInfo').hide();
			$('#knowledgeInfo').show();
			$('#socialInfo').hide();
			$('#methodInfo').hide();
		});

		$('.socialInfoLink').click(function(event) {
			$('#timeInfo').hide();
			$('#connectInfo').hide();
			$('#knowledgeInfo').hide();
			$('#socialInfo').show();
			$('#methodInfo').hide();
		});

		$('.methodInfoLink').click(function(event) {
			$('#timeInfo').hide();
			$('#connectInfo').hide();
			$('#knowledgeInfo').hide();
			$('#socialInfo').hide();
			$('#methodInfo').show();
		});
		$('#note2').css({
			position: 'absolute',
			top: 2030,
		});
		$('#note3').css({
			position: 'absolute',
			top: 2080,
		});
		$('#note4').css({
			position: 'absolute',
			top: 2200,
		});
		$('#note5').css({
			position: 'absolute',
			top: 2230,
		});
		$('#connectInfo').hide();
		$('#knowledgeInfo').hide();
		$('#socialInfo').hide();
		$('#methodInfo').hide();

		var timeInfoSectionHeight = parseInt($('#timeInfo').offset().top);
		var lastScroll = 0;

		$(window).scroll(function() {
			var st = parseInt($(this).scrollTop());
			console.log(st);
			if (st < 2000) {
				$('#timeInfo').show();
				$('#connectInfo').hide();
				$('#knowledgeInfo').hide();
				$('#socialInfo').hide();
				$('#methodInfo').hide();
			}

			if (st >= 2000 && st < 2070) {
				$('#timeInfo').hide();
				$('#connectInfo').show();
				$('#knowledgeInfo').hide();
				$('#socialInfo').hide();
				$('#methodInfo').hide();
			}

			if (st >= 2070 && st < 2140) {
				$('#timeInfo').hide();
				$('#connectInfo').hide();
				$('#knowledgeInfo').show();
				$('#socialInfo').hide();
				$('#methodInfo').hide();
			}

			if (st >= 2140 && st < 2210) {
				$('#timeInfo').hide();
				$('#connectInfo').hide();
				$('#knowledgeInfo').hide();
				$('#socialInfo').show();
				$('#methodInfo').hide();
			}

			if (st >= 2210 ) {
				$('#timeInfo').hide();
				$('#connectInfo').hide();
				$('#knowledgeInfo').hide();
				$('#socialInfo').hide();
				$('#methodInfo').show();
			}

			lastScroll = st;
		});
		// new WOW().init();
	}

});	