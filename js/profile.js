$(document).ready(function() {
	$('.profile-photo-create').click(function(e) {
		$('.profile-photo-create').toggleClass( "profile-closed" );
		$('.profile-photo-select-avatar').toggleClass( "profile-closed" );
		$('.profile-title-create').toggleClass("profile-disable");
		$('.profile-photo-create').toggleClass("profile-disable");
		$('.profile-info-create').toggleClass("profile-disable");
		$('.profile-btn-add').toggleClass("profile-disable");
	});

});

$(document).ready(function() {
	$('.profile-photo-select-avatar--img > a > img').click(function(e) {
		$('.profile-photo-create').toggleClass( "profile-closed" );
		$('.profile-photo-select-avatar').toggleClass( "profile-closed" );
		$('.profile-photo-select--img').toggleClass( "profile-closed" );
		$('.profile-photo-select--img-selected').toggleClass( "profile-closed" );
		$('.profile-title-create').toggleClass("profile-disable");
		$('.profile-photo-create').toggleClass("profile-disable");
		$('.profile-info-create').toggleClass("profile-disable");
		$('.profile-btn-add').toggleClass("profile-disable");
	});
});

