
$(document).ready(function(){
    // Lazy load init
    $('img.lazy').lazyload({});
    // enhance lazy load for bootstrap modal
    $('.modal').on('shown.bs.modal', function(){
        console.log('test');
        $(this).find('.lazy').each(function() {
            $(this).attr('src', $(this).attr('data-original'));
        });
    });

    //smooth scolling navbar's anchor
    $('#navbarSupportedContent').on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
});