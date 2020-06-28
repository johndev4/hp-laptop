$(document).ready(function() {
    $('#slider').on('input', function() {
        $('#img-cover').css('opacity', ($('input').val()/100) * 1.0);
    });


    $(document).ajaxSend(function() {
        
    });

    

    $(document).ajaxComplete(function() {
        
    });

    setTimeout(function() {
        $.ajax({
            url: 'js/hp-bf064tx.txt',
            type: 'get',
            async: true,
            cache: false,
            success: function(data) {
                $('.img-laptop-container').html(data);
                $('.img-laptop').on('load', function() {
                    $('.img-container').animate({
                        left: '10%',
                        opacity: '1.0'
                    }, 1800);
                });
                $('.gif-loading-container').hide();
            }
        });
    }, 0)
});