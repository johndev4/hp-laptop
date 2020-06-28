$(document).ready(function() {

    $('#slider').on('input', function() {
        $('#img-cover').css('opacity', ($('input').val()/100) * 1.0);
    });

    $.ajax({
        url: 'js/image1.txt',
        type: 'get',
        success: function(result) {
            $('.img-container').html(result);
            $('#img-components').on('load', function() {
                $.ajax({
                    url: 'js/image2.txt',
                    type: 'get',
                    success: function(result) {
                        $('.img-container').html($('.img-container').html() + result);
                        $('#img-cover').on('load', function() {
                            $('.img-container').animate({
                                left: '10%',
                                opacity: '1'
                            }, 1800);
                        });
                    }
                });
            });
        }
    });

});