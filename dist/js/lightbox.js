$(document).ready(function(){
    $('#changestyle').click(function(e) {
        $('.lightbox').toggleClass('lightbox-hidden');
        
    });
    
    $('#changestyle-close').click(function(e) {
        $('.lightbox').addClass('lightbox-hidden');
        
    });
    
    $('#changestyle-close2').click(function(e) {
        $('.lightbox-advice').addClass('lightbox-hidden');
        
    });
    
    $('#changestyle-cta').click(function(e) {
        $('.lightbox').addClass('lightbox-hidden');
        $('.lightbox-advice').removeClass('lightbox-hidden');
        
    });
    
});

