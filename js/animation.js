$(document).ready(function() {

    var userName = 'Talon Hughes';
    var myHandle = ' @thughes';
    $('#user-name').text(userName);
    $('#handle').text(myHandle);

    //timeago Plugin
    $("time.timeago").timeago();

    // Bootstrap Tooltips
    $(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });

    //Hides Tweet Button and Character Count
    $('#tweet-controls').css('display', 'none');

    //When the user clicks on the textarea, the textarea doubles in size and the Character Counter and Tweet button are revealed.
    var doubleSize = $('.tweet-compose').on('click', function() {
        $(this).animate({
            height: '5em'
        }, 500);
        $('#tweet-controls').css('display', 'inherit');
    });


    //Character Counter

    //As the user types the char counter decreases.
    $('.tweet-compose').on('keyup keydown keypress', function() {
        var newCount = 140 - $(this).val().length;
        $('#char-count').text(newCount);

        //If the user puts in more than 140 characters, the tweet button disables and the negative numbers fade to a lighter red.
        if (newCount < 0) {
            $('#char-count').css('opacity', '0.4').css('color', '#D70F0F');
            $('#tweet-submit').attr('disabled', true);
        } else {
            $("#char-count").css('opacity', '1').css('color', '#999');
            $('#tweet-submit').removeAttr('disabled');
        }

        //When there are 10 or less characters, the characters turn red.
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
            '<strong class="fullname">' + userName + '</strong>' +
            '<span class="username">' + myHandle + '</span>' +
            '<p class="tweet-text">' + newTweet + '</p>' +
            '<div class="tweet-actions">' +
            '<ul>' +
            '<li><span class="icon action-reply"></span> Reply</li>' +
            '<li><span class="icon action-favorite"></span> Favorite</li>' +
            '<li><span class="icon action-more"></span> More</li>' +
            '</ul>' +
            '</div>' +
            '<div class="stats-reply-container">' +
            '<div class="stats toggle">' +
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
            // '1:04 PM - 19 Sep 13' +
            $.timeago(new Date()) +
            '</div>' +
            '</div>' +
            '<div class="reply toggle">' +
            '<img class="avatar" src="img/memyself.png" />' +
            '<textarea class="tweet-compose" placeholder="Reply to @dogecream"/></textarea>' +
            '</div>' +
            '</div>' +
            '</div>');

        $('.tweet-compose').val('');
        $('#char-count').html(140);
        
    });

    //Hides Retweets, Favorites, Time Stamp, and Reply textarea.
    $('.toggle').hide();
    //Reveals Retweets, Favorites, and Time Stamp.
    $('.tweet').on('click', function() {
        $(this).find('.toggle').slideToggle();
    });

});
