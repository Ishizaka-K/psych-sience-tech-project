//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {
	easing: 'easeInOut',
	duration: 1000,//時間
	strokeWidth: 0.2,//太さ
	color: '#555',//ゲージのカラー
	trailWidth: 0.2,//ベースの線の太さ
	trailColor: '#bbb',//ベースの線のカラー
	text: {//テキスト				
		style: {
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-30px 0 0 0',//バーより上に配置
			transform:'translate(-50%,-50%)',
			'font-size':'1rem',
			color: '#fff',
		},
		autoStyleContainer: false //自動付与のスタイルを切る
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
	}
});

//アニメーションスタート
bar.animate(1.0, function () {
	$("#splash").delay(500).fadeOut(800);
});  