$(document).ready(function () {
    $('.card-body').hide();
    $('.accordion-card').click(function () {
        $(this).toggleClass("open");
        $(this).find('div.card-body').slideToggle('fast');
    });
});