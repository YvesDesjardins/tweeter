/* eslint-disable */
$(() => {
  // start new-tweet element as hidden
  $('.new-tweet').hide();

  // grabs all stored tweets and renders them
  function loadTweets() {
    $.get("/tweets", (tweets) => {
      renderTweets(tweets.reverse());
    });
  }

  // on new tweet, fetching from server as user and image generated there
  function renderNewTweet() {
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
    const date = Date(data.created_at).toString().slice(0, 15);
    const handle = [data.user.handle];
    const content = data.content.text;

    // build out the new tweet
    $('<header>').appendTo($tempTweet);
    $('<img>', {
      id: 'image',
      src: img,
      alt: 'Profile image',
    }).appendTo($tempTweet.children('header'));
    $('<name>').appendTo($tempTweet.children('header'))
      .addClass('name')
      .text(name);
    $('<user>').appendTo($tempTweet.children('header'))
      .addClass('user')
      .text(handle);

    $('<form>').appendTo($tempTweet)
      .text(content);

    $('<footer>').appendTo($tempTweet);
    $('<age>').appendTo($tempTweet.children('footer'))
      .addClass('age')
      .text(date);
    $('<input>', {
      type: 'image',
      src: '/images/flag.png',
      class: 'buttons',
    }).appendTo($tempTweet.children('footer'));
    $('<input>', {
      type: 'image',
      src: '/images/heart.png',
      class: 'buttons',
    }).appendTo($tempTweet.children('footer'));
    $('<input>', {
      type: 'image',
      src: '/images/refresh.png',
      class: 'buttons',
    }).appendTo($tempTweet.children('footer'));

    return $tempTweet;
  };

  // handles compose button clicks
  $('.compose').on('click', (event) => {
    $('.new-tweet').slideToggle('fast');
    $('.tweet-text').focus();
  })

  // handles new tweet submissions
  $('.new-tweet').on('submit', (event) => {
    const $tweet = $('.tweet-text').serialize()
    event.preventDefault();

    // tests string length
    if ($tweet.slice(5) !== '' && $tweet.slice(5).length < 140) {
      $.post("/tweets", $tweet)
        .then((tweet) => {
          // sucessful post
          $('.tweet-text').val('');
          const $count = $('.tweet-text').siblings('.counter');
          $count.text(140 - $('.tweet-text').val().length);

          renderNewTweet();
        })
        .fail((err) => {
          // error handling
          console.log(`Error: ${err}`);
        });
    } else {
      alert('Please review your message length!');
    }
  });

  loadTweets();
});
