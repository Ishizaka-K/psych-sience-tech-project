function BgFadeAnime(){
	$('.bgRLextendTrigger').each(function(){ 
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('bgRLextend');
		}else{
			$(this).removeClass('bgRLextend');
		}
	});
   // 文字列を囲う子要素
	$('.bgappearTrigger').each(function(){ 
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('bgappear');
		}else{
			$(this).removeClass('bgappear');
		}
	});		
}

// 画面をスクロールをしたら動かしたい場合の記述
	$(window).scroll(function (){
		BgFadeAnime();
	});

// 画面が読み込まれたらすぐに動かしたい場合の記述
	$(window).on('load', function(){
		BgFadeAnime();
	});