$(document).ready(function() {

    //Hides Tweet Button and Character Count
    $('#tweet-controls').hide();

    //Textarea Doubles
    /*The Tweet button and the char counter are initially hidden. If the user clicks on the textarea, the textarea doubles in size and the char counter and Tweet button are revealed.*/
    var doubleSize = $('.tweet-compose').on('focusin', function() {
        $(this).animate({
            height: '5em'
        }, 500);
        $('#tweet-controls').show();
    });


    //Character Counter
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

    //Adds New Tweet
    /*When the user successfully inputs characters and clicks the “Tweet” button, a new tweet is created and added to the tweet stream in the main column, using the user’s fake profile image in the top left and username/fullname. */



    $('#tweet-submit').on('click', function() {
        var newTweet = $('.tweet-compose').val();
        $("#tweet-controls").hide();
        $('.tweet-compose').animate({
            height: "2.5em"
        });
        $('#stream').prepend(
            '<div class="tweet">' +
            '<div class="content">' +
            '<img class="avatar" src="img/memyself.png" />' +
            '<strong class="fullname">Talon Hughes</strong>' +
            '<span class="username"> @thughes</span>' +
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

        $('.tweet-compose').val('');
        $(this).find('.tweet-actions').hide();

        $('.stats').hide();
        $('.reply').hide();
        //Reveals Retweets, Favorites, and Time Stamp
        $('.tweet').on('click', function() {
            $(this).find('.stats').toggle('fast', 'linear');
            $(this).find('.reply').toggle('fast', 'linear');
        });

    });









});
