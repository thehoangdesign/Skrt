$(document).ready(function () {
	$('.colinfosm').click(function (val){
		if ( $(val.currentTarget).hasClass('active') ){
			$(val.currentTarget).removeClass('active');
		} else {
			$('.colinfosm').removeClass('active');
			$(val.currentTarget).addClass('active');
		};
	});
});
