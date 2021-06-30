$(document).ready(function () {
    $('.collapse-btn').click(function () {
        $('div.card').slideToggle(200);
    })

    $('.btn-hover').mouseover(function () {
        $(this).css("background", "#095cdc",
            "cursor", "pointer");
    })

    $('.btn-hover').mouseout(function () {
        $(this).css("background-color", "#106cff",
            "cursor", "default");
    })
}) 