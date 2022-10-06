$(document).ready(function () {
	$('.accorwrap').click(function (val){
		if ( $(val.currentTarget).hasClass('selected') ){
			$(val.currentTarget).removeClass('selected');
		} else {
			$('.accorwrap').removeClass('selected');
			$(val.currentTarget).addClass('selected');
		};
	});
});

$(document).ready(function () {
	$('.menu input').click(function (val){
		if ($(val.currentTarget).hasClass('menuToggle')){
				$(val.currentTarget).removeClass('menuToggle');
				$(val.currentTarget).addClass('menuClose');
				$(val.currentTarget).attr('id', 'menuClose');
				$(".menu form label").attr('for', 'menuClose');
				$('#menu').css('left', '0%');
				document.body.style.overflow = 'hidden';
			} else {
				$(val.currentTarget).removeClass('menuClose');
				$(val.currentTarget).addClass('menuToggle');
				$(val.currentTarget).attr('id', 'menuToggle');
				$(".menu form label").attr('for', 'menuToggle');
				$('#menu').css('left', '-200%');
				$('.menucontainer .menuleft').css('left','0');
				$('.menucontainer .menuright').css('right','-100%');
				document.body.style.overflow = '';
		};
	});
});



$(document).ready(function(){
	$('.navi').hover(function(){
		$('.dropdown-content').show();
		$('#bgoverlay1').css('top','0');
		$('#bgoverlay2').css('top','0vh');
		$('.dropdown-content').show();
		$("#navi .navicon .bagicon a span").css("background", "white");
		document.body.style.overflow = 'hidden';

		$("#navi .navlink li a").css("color", "white");
		$("#navi .navicon .bagicon a span p").css("color", "black");
		$("#navi .navicon .bagicon a span").css("background", "white");
		$("#navi .navicon .bagicon a span p").css("top", "-9px");
		$("#navi .navicon .bagicon a span").css("border", "white");
		$("#navi .navicon li a .icons").css("stroke", "white");
		$("#navi .navicon li a .heart").css("fill", "white");
	}, function(){
		$('#bgoverlay1').css('top','-310px');
		$('#bgoverlay2').css('top','-100vh');
		$('.dropdown-content').hide();
		document.body.style.overflow = '';

		$("#navi .navlink li a").css("color", "black");
		$("#navi .navicon .bagicon a span p").css("color", "white");
		$("#navi .navicon .bagicon a span p").css("top", "-9px");
		$("#navi .navicon .bagicon a span").css("background", "black");
		$("#navi .navicon .bagicon a span").css("border", "black");
		$("#navi .navicon .bagicon a span").css("background", "black");
		$("#navi .navicon .bagicon a span").css("border", "black");
		$("#navi .navicon li a .icons").css("stroke", "black");
		$("#navi .navicon li a .heart").css("fill", "black");

	});

	$("#navi .navicon .bagicon").hover(function(){
			$("#navi .navicon li .iconbag").css("stroke","var(--neon)");
			$("#navi .navicon .bagicon span").css("background","var(--neon)");
		}, function(){
			$("#navi .navicon li .iconbag").css("stroke","white");
			$("#navi .navicon .bagicon span").css("background","white");
	});

	$("#navi .navicon .hearticon").hover(function(){
			$("#navi .navicon .hearticon .heart").css("fill","var(--neon)");
		}, function(){
			$("#navi .navicon .hearticon .heart").css("fill","white");
	});

	$("#navi .navicon .usericon").hover(function(){
			$("#navi .navicon .usericon .iconuser").css("stroke","var(--neon)");
		}, function(){
			$("#navi .navicon .usericon .iconuser").css("stroke","white");
	});

	$('.arrow1').click(function(val){
		$('.menucontainer .menuright').css('right','0%');
		$('.menucontainer .menuleft').css('left','-100%');
	});
	$('.arrow2').click(function(val){
		$('.menucontainer .menuright').css('right','-100%');
		$('.menucontainer .menuleft').css('left','0');
	});
});



$(document).ready(function(){
	$('.inputbg input').focus(function(){
		$('.inputfill').css('background','rgba(255,255,255, .6)');
		$('.inputfill').css('height','100vh');
		$('.inputbg').css('height','50vh');
	});

	$('.inputfill').click(function(){
		$('.inputbg').css('height','0');
		$('.inputfill').css('height','0');
		document.getElementById("inputsearch").reset();
	});
});


var prevScrollpos = window.pageYOffset;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		$("#navi").css('background','black');
		$("#btntotop").css('display','block');
		$("#navi .navlink li a").css("color", "white");
		$("#navi .navicon .bagicon a span p").css("color", "black");
		$("#navi .navicon .bagicon a span p").css("top", "-9px");
		
		$("#navi .navlink li a").css("color", "white");
		$("#navi .navicon .bagicon a span p").css("color", "black");
		$("#navi .navicon .bagicon a span").css("background", "white");
		$("#navi .navicon .bagicon a span p").css("top", "-9px");
		$("#navi .navicon .bagicon a span").css("border", "white");
		$("#navi .navicon li a .icons").css("stroke", "white");
		$("#navi .navicon li a .heart").css("fill", "white");
	} else {

		$("#navi").css('background','transparent');
		$("#btntotop").css('display','none');
		$("#navi .navlink li a").css("color", "black");
		$("#navi .navicon .bagicon a span p").css("top", "-9px");
		$("#navi .navicon .bagicon a span p").css("color", "white");
		$("#navi .navicon .bagicon a span").css("background", "black");
		$("#navi .navicon .bagicon a span").css("border", "black");
		$("#navi .navicon .bagicon a span").css("border", "black");
		$("#navi .navicon li a .icons").css("stroke", "black");
		$("#navi .navicon li a .heart").css("fill", "black");

		$(".navi").hover(function(){
			
		});

	}
	//Navi Transparent
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("navigation").style.top = "0";
	} else {
		document.getElementById("navigation").style.top = "-100%";
	}
	prevScrollpos = currentScrollPos;
	//Navi Hide On scroll
};





