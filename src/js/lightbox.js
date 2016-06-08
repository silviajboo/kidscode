$(document).ready(function(){

    //button edit account
    $('.account-edit').click(function(e) {
        $('.lightbox-account').toggleClass('lightbox-hidden');
        $('.container-profile').toggleClass("profile-disable");
        $('.container-new-profile').toggleClass("profile-disable");
        $('.container-account-edit').toggleClass("profile-disable");
        
    });
    
    $('#changestyle-close').click(function(e) {
        $('.lightbox-account').addClass('lightbox-hidden');
        $('.container-profile').toggleClass("profile-disable");
        $('.container-new-profile').toggleClass("profile-disable");
        $('.container-account-edit').toggleClass("profile-disable"); 
    });
    
    $('#changestyle-close2').click(function(e) {
        $('.lightbox-advice-account').addClass('lightbox-hidden');
        $('.container-profile').toggleClass("profile-disable");
        $('.container-new-profile').toggleClass("profile-disable");
        $('.container-account-edit').toggleClass("profile-disable"); 
 
    });
    
    $('#changestyle-cta').click(function(e) {
        $('.lightbox-account').addClass('lightbox-hidden');
        $('.lightbox-advice-account').toggleClass('lightbox-hidden');
        
    });

    //button añadir perfil
    $('.profile-btn-add').click(function(e) {
        $('.lightbox-advice-added-account').toggleClass('lightbox-hidden');
        $('.container-new-profile').toggleClass("profile-disable");
        $('.container-account-edit').toggleClass("profile-disable");
        
    });


    //Button delete 
    $('.profile-btn-delete').click(function(e) {
        $('.lightbox-delete').toggleClass('lightbox-hidden');
        $('.container-profile').toggleClass("profile-disable");
        $('.container-account-edit').toggleClass("profile-disable");
        
    });
    
    $('#changestyle-close3').click(function(e) {
        $('.lightbox-delete').addClass('lightbox-hidden');
        $('.container-profile').toggleClass("profile-disable");
        $('.container-account-edit').toggleClass("profile-disable"); 
    });
    
    $('#changestyle-close4').click(function(e) {
        $('.lightbox-advice-delete').addClass('lightbox-hidden');
        $('.container-profile').toggleClass("profile-disable");
        $('.container-account-edit').toggleClass("profile-disable"); 
 
    });
    
    $('#changestyle-cta2').click(function(e) {
        $('.lightbox-delete').addClass('lightbox-hidden');
        $('.lightbox-advice-delete').addClass('lightbox-hidden');
        $('.container-profile').toggleClass("profile-disable");
        $('.container-account-edit').toggleClass("profile-disable"); 
    });
});
    //Button login
    $('#changestyle-close').click(function(e) {
        $('.main-container-lightbox').addClass('lightbox-hidden');
        
    });

    $('#changestyle-cta-login').click(function(e) {
        $('.main-container-lightbox').toggleClass('lightbox-hidden');
        
    });


