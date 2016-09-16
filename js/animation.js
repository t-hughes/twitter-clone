$(document).ready(function() {

/*The Tweet button and the char counter are initially hidden. If the user clicks on the textarea, the textarea doubles in size and the char counter and Tweet button are revealed.*/
    $('.tweet-compose').on('focusin', function() {
        $(this).animate({
            height: "6em"
        }, 500);
        $('#tweet-controls').show();
    });

/*As the user types the char counter decreases. Once it hits 10 characters or less the counter turns red. If the user enters more than 140 chars, the Tweet button is disabled (and re-enabled when there are <= 140 chars)*/
$('.tweet-compose').on('keyup keydown keypress', function() {
        var newCount = 140 - $(this).val().length;
        $('#char-count').text(newCount);
        if (newCount < 0) {
            $('#char-count').css('opacity', '0.4').css('color', '#D70F0F');
            $('#tweet-submit').attr('disabled', true);
        } else {
            $("#char-count").css('opacity', '1').css('color', '#999');
            $('#tweet-submit').removeAttr('disabled');
        }
        if (newCount <= 10) {
            $('#char-count').css('color', '#D70F0F');
        } else {
            $('#char-count').css('color', '#999');
        }
    });

    /*When the user successfully inputs characters and clicks the “Tweet” button, a new tweet should be created and added to the tweet stream in the main column, using the user’s fake profile image in the top left and username/fullname. -->
    <!-- HINT: jQuery ".prepend" method*/


$('#tweet-submit').on('click', function() {
    var newTweet = $('.tweet-compose').val();
    $("#tweet-controls").hide();
    $('.tweet-compose').animate({height: "2.5em"});
    $('#stream').prepend(
        '<div class="tweet">' +
        '<div class="content">' +
        '<img class="avatar" src="img/dogecream.jpg" />' +
        '<strong class="fullname">dogecream</strong>' +
        '<span class="username">@dogecream</span>' +
        '<p class="tweet-text">' + newTweet + '</p>' +
        '<div class="tweet-actions">' +
        '<ul>' +
        '<li><span class="icon action-reply"></span> Reply</li>' +
        '<li><span class="icon action-favorite"></span> Favorite</li>' +
        '<li><span class="icon action-more"></span> More</li>' +
        '</ul>' +
        '</div>' +
        '<div class="stats-reply-container">' +
        '<div class="stats">' +
        '<div class="retweets">' +
        '<p class="num-retweets">30</p>' +
        '<p>RETWEETS</p>' +
        '</div>' +
        '<div class="favorites">' +
        '<p class="num-favorites">6</p>' +
        '<p>FAVORITES</p>' +
        '</div>' +
        '<div class="users-interact">' +
        '<div>' +
        '<img src="img/memyself.png" />' +
        '<img src="img/vklimenko.jpg" />' +
        '</div>' +
        '</div>' +
        '<div class="time">' +
        '1:04 PM - 19 Sep 13' +
        '</div>' +
        '</div>' +
        '<div class="reply">' +
        '<img class="avatar" src="img/memyself.png" />' +
        '<textarea class="tweet-compose" placeholder="Reply to @dogecream"/></textarea>' +
        '</div>' +
        '</div>' +
        '</div>');

    $('.tweet-actions ul').hide();
    $('.tweet').on('mouseenter', function() {
        $(this).find('ul').slideDown();
    });
    $('.tweet').on('mouseleave', function() {
        $(this).find('ul').slideUp();
    });

    $('.stats-reply-container').hide();
    $('.tweet').on('click', function() {
        $(this).find('.stats-reply-container').animate({height:'toggle', opacity:100});
    });
    newTweet = $('.tweet-compose').val("");
});











});
