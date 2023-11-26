$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});
