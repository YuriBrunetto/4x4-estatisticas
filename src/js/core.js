$(function(){

    // ROLA, MAH!
    $(".rola-mah").click(function() {
        $("html, body").animate({
            scrollTop: $(".main").offset().top
        }, 1000);
    });

    // modal stuff
    // $("#sobre").click(function() {
    //     $(".modal").modal();
    // });

    $('a[data-modal]').click(function(event) {
        $(this).modal({ fadeDuration: 250 });
        return false;
    });

});
