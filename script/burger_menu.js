$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $('.menu').toggleClass('menu_active');
    $('.wrapper').toggleClass('wrapper_active');
    document.reload();
});

$('.menu-btn').on('click', function(a) {
    a.preventDefault;
    $(this).toggleClass('menu-btn_active');

});
