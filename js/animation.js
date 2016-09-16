$(document).ready(function() {

    $('.tweet-compose').focus(function() {
        $(this).animate({
            height: "6em"
        }, 500);
        $('#tweet-controls').show();
    });

    $('.tweet-compose').blur(function() {
        $(this).animate({
            height: "2.5em"
        }, 500);
        $('#tweet-controls').hide();
    });

    var charCount = 140;
    $('#char-count').text(charCount);
    $('.tweet-compose').keyup(function() {
        var count = $('.tweet-compose').val().length;
        var chars = charCount - count;
        $('#char-count').text(chars);
        if (chars < 0) {
            $('#char-count').css('opacity', '0.4').css('color', '#D70F0F');
            $('#tweet-submit').attr('disabled', 'disabled');
        } else {
            $("#char-count").css('opacity', '1').css('color', '#999');
            $('#tweet-submit').removeAttr('disabled');
        }
        if (chars < 10) {
            $('#char-count').css('color', '#D70F0F');
        } else {
            $('#char-count').css('color', '#999');
        }
    });



});