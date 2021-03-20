$(document).scroll(function(){
	if($(window).scrollTop() <= 50){
		$('#navbar').removeClass('bghitam').addClass('bg-nontrans');
	}else if($(window).scrollTop() >= 50){
		$('#navbar').removeClass('bg-nontrans').addClass('bghitam');
	}
});