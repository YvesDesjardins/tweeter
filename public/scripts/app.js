/* eslint-disable */
$(() => {
  // start new-tweet element as hidden
  $('.new-tweet').hide();
  $('.error').hide();

  // grabs all stored tweets and renders them
  function loadTweets() {
    $.get("/tweets", (tweets) => {
      renderTweets(tweets.reverse());
    });
  }

  function renderTweets(tweets) {
    // loops through tweets, builds them using createTweetElement
    // then append to tweet-list
    const $tweetsList = $('#tweet-list');
    $tweetsList.empty();
    tweets.forEach(element => {
      $tweetsList.append(createTweetElement(element));
    });
  }

  function createTweetElement(data) {
    // takes some tweet object and parse
    const $tempTweet = $('<article>').addClass('tweet');
    const name = [data.user.name];
    const img = data.user.avatars.small;
    const timeParse = new Date(data.created_at).toString().slice(16, 33);
    const dateParse = Math.round(Math.abs((data.created_at - Date.now()) / (24 * 60 * 60 * 1000)));
    const date = dateParse > 0 ? `${dateParse} days old` : `Today at ${timeParse}`;
    const handle = [data.user.handle];
    const content = data.content.text;
    console.log(timeParse);

    // build out the new tweet
    $('<header>').appendTo($tempTweet);
    $('<img>', {
      id: 'image',
      src: img,
      alt: 'Profile image',
    }).appendTo($tempTweet.children('header'));
    $('<div>').appendTo($tempTweet.children('header'))
      .addClass('name')
      .text(name);
    $('<div>').appendTo($tempTweet.children('header'))
      .addClass('user')
      .text(handle);

    $('<form>').appendTo($tempTweet)
      .text(content);

    $('<footer>').appendTo($tempTweet);
    $('<div>').appendTo($tempTweet.children('footer'))
      .addClass('age')
      .text(date);
    $('<input>', {
      type: 'image',
      src: '/images/refresh.png',
      class: 'buttons',
    }).appendTo($tempTweet.children('footer'));
    $('<input>', {
      type: 'image',
      src: '/images/heart.png',
      class: 'buttons',
    }).appendTo($tempTweet.children('footer'));
    $('<input>', {
      type: 'image',
      src: '/images/flag.png',
      class: 'buttons',
    }).appendTo($tempTweet.children('footer'));

    return $tempTweet;
  };

  // handles compose button clicks
  $('.compose').on('click', (event) => {
    $('.new-tweet').slideToggle('fast');
    $('.container').toggleClass('active');
    $('.tweet-text').focus();
  })

  // catches user pressing 'enter' key and submits form
  $('.tweet-text').keypress(function (e) {
    if (e.which === 13) {
      $('.new-tweet').submit();
    }
  });

  // handle inline button clicks on individual tweets
  $('.tweet').on('click', 'buttons', (event) => {});

  // handles new tweet submissions
  $('.new-tweet').on('submit', (event) => {
    const $tweet = $('.tweet-text').serialize()
    event.preventDefault();

    // tests string length
    if (!$('.new-tweet').is(":hidden") && $tweet.slice(5) !== '' && $tweet.slice(5).length < 140) {
      $.post("/tweets", $tweet)
        .then((tweet) => {
          // sucessful post
          $('.tweet-text').val('');
          const $count = $('.tweet-text').siblings('.counter');
          $count.text(140 - $('.tweet-text').val().length);

          $(".compose").trigger("click");
          // reload tweets
          loadTweets();
        })
        .fail((err) => {
          // error handling
          console.log(`Error: ${err}`);
        });
    } else if ($tweet.slice(5).length > 140) {
      // error message
      console.log('error 140');
      let error = $('.error');
      error.text('Please shorten your message.');
      error.fadeIn(400);
      error.delay(1000).fadeOut(400);
    } else {
      // error message
      console.log('error 0');
      let error = $('.error');
      error.text('Please fill out this field.');
      error.fadeIn(400);
      error.delay(1000).fadeOut(400);
    }
  });

  loadTweets();
});
