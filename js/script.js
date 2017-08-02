$(document).ready(function() {

	// Main screen scroll init
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],
		navigation: true,
		navigationPosition: 'right', 
		// scrollOverflow: true,
		responsiveWidth: 1500
	});

	// Dropdown lang
	$('.lang-select').click(function(e){
		e.preventDefault();
		$(this).children('.dropdown-lang').slideToggle();
		$('.lang-select').toggleClass('active', 300);
	})

	$('.lang-select .dropdown-lang li').click(function(){
		var dataLang = $(this).attr('data');
		$('#lang-selected').attr('value', dataLang);
	})

	/*if ( $('body').hasClass('career') ) {
		var blockCareer = $('.career-list .career-block');
		var blockListLength = blockCareer.length;
		for (var i = 1; i <= blockListLength; i++ ) {
			console.log(i);
			setTimeout("$('.career-list .career-block:nth-child("+i+")').fadeIn('slow');"
			, 500*i);
		}
	}*/


	/*Animation block*/


	$('.btn-loud').viewportChecker({
		classToAdd: 'visible animated fadeInDown',
		offset: 100
	});

	$('h2').viewportChecker({
		classToAdd: 'visible animated rotateInDownLeft duration-one',
		offset: 100
	});

	$('.contacts form, .contacts .contact-data, .video-link img').viewportChecker({
		classToAdd: 'visible animated',
		offset: 100
	});

	$('.video-link').viewportChecker({
		classToAdd: 'visible animated jackInTheBox delay-one',
		offset: 100
	});



	// news 

	$('.news-item').viewportChecker({
		// classToAdd: 'visible-mode',
		offset: 100
	});

	if ( $('body').hasClass('news') ) {
		var blockNews = $('.news-list .news-item.visible');
		var blockNewsLength = blockNews.length;
		for (var i = 1; i <= blockNewsLength; i++ ) {
			console.log(i);
			setTimeout("$('.news-list .news-item:nth-child("+i+")').addClass('visible-mode');"
				, 300*i);
		}

		$(window).scroll(function(){
			if (!$('.news-item.visible').hasClass('.visible-mode')){
				$('.news-item.visible').addClass('visible-mode');
			}
		})
	}

	// Investments

	$('.block-step').viewportChecker({
		classToAdd: 'animated fadeIn',
		offset: 100
	});

	$('.case-item').viewportChecker({
		classToAdd: 'visible animated bounceInUp',
		offset: 100
	});

	$('.case-item').hover(function(){
		$(this).children('p').addClass('animated pulse');
	}, function(){
		$(this).children('p').removeClass('animated pulse');
	})

	// faq

	// Появление надписи при не найденном элементе
	$('.form-search .btn-search').click(function(e){
		e.preventDefault();
		setTimeout("$('.support-text').fadeIn()", 3000);
	})

	// contacts

	// career
	$('.career-block').hover(function(){
		$(this).children('.icon').children('img').addClass('animated tada');
	}, function(){
		$(this).children('.icon').children('img').removeClass('animated tada');
	})

	$('.career-block').viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset: 100
	});

	$('.career .career-descr h4').viewportChecker({
		classToAdd: 'visible animated jackInTheBox',
		offset: 100
	});


	// about
	$('.about-item').hover(function(){
		$(this).children('p').children('img').addClass('animated tada infinite');
	}, function(){
		$(this).children('p').children('img').removeClass('animated tada');
	})

	$('.video-link a').hover(function(){
		$(this).children('img').addClass('rubberBand');
	}, function(){
		$(this).children('img').removeClass('rubberBand');
	})

	// main
	$('.section-two .block-advantage').hover(function(){
		$(this).toggleClass('pulse block-advantage-hover');
	}, function(){
		$(this).toggleClass('pulse block-advantage-hover');
	})

	$(window).scroll(function(){
		console.log(5);
		if ( $('section-four').hasClass('active') ){
			console.log('yes');
		}
	})

});
