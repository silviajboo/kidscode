$(document).ready(function() {
	$( ".btn-anim-three" ).on( "click", function() {
		$(this).toggleClass( "closed" );
		$('.nav-mobile').toggleClass( "closed" );
	});
});

$(document).ready(function() {
	$('.container-menu-options > .nav-mobile > nav > ul > li > a').click(function(e) {
		$('.nav-mobile').toggleClass( "closed" );
		$('.btn-anim-three').toggleClass( "closed" );
	});

});