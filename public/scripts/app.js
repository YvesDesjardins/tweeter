/* eslint-disable */
$(() => {
  // grabs all stored tweets and renders them
  function loadTweets() {
    $.get("/tweets", (tweets) => {
      renderTweets(tweets);
    });
  }

  function renderTweets(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    tweets.forEach(element => {
      $('#tweet-list').append(createTweetElement(element));
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
      .text(name);
    $('<user>').appendTo($tempTweet.children('header'))
      .text(handle);

    $('<form>').appendTo($tempTweet)
      .text(content);

    $('<footer>').appendTo($tempTweet);
    $('<age>').appendTo($tempTweet.children('footer'))
      .text(date);
    $('<buttons>').appendTo($tempTweet.children('footer'))
      .text('🍕');
    $('<buttons>').appendTo($tempTweet.children('footer'))
      .text('☃️');
    $('<buttons>').appendTo($tempTweet.children('footer'))
      .text('🗑');

    return $tempTweet;
  };

  // handles new tweet submissions
  $('.new-tweet').on('submit', (event) => {
    const $tweet = $('.tweet-text').serialize()
    event.preventDefault();
    $.post("/tweets", $tweet)
      .then(() => {
          // stuff
          console.log($tweet);
        },
        (err) => {
          // error handling
          console.log('bleh');
        });
  });

  loadTweets();
});
