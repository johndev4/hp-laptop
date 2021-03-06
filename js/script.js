$(document).ready(function() {
    $('#slider').on('input', function() {
        $('#img-cover').css('opacity', ($('input').val()/100) * 1.0);
    });

    $.ajax({
        url: 'js/hp-bf064tx.txt',
        type: 'get',
        async: true,
        cache: true,
        success: function(data) {
            $('.img-laptop-container').html(data);
            $('#img-cover').on('load', function() {
                $('.gif-loading-container').css('display', 'none');
                $('.img-laptop-container').css('display', 'block');
                $('.img-laptop-container').animate({
                    left: '10%',
                    opacity: '1'
                }, 1800);
            });
        }
    });
});