/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
/* eslint-disable */

$(document).ready(function () {
  const tweetData = {
    'user': {
      'name': 'Newton',
      'avatars': {
        'small': 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png',
        'regular': 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png',
        'large': 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png'
      },
      'handle': '@SirIsaac'
    },
    'content': {
      'text': 'If I have seen further it is by standing on the shoulders of giants'
    },
    'created_at': 1461116232227
  }

  function createTweetElement(data) {
    // takes some tweet object and parse
    let $tempTweet = $('<article>').addClass('tweet');
    let name = data.user.name;
    let img = data.user.avatars.small;
    let date = Date(data.created_at).toString();
    let handle = data.user.handle;
    let content = data.content.text;

    console.log(date);

    // build out the new tweet
    $('<header>').appendTo($tempTweet);
    $('<img>', {
      id: 'image',
      src: img,
      alt: 'Profile image',
    }).appendTo($tempTweet.children('header'));
    $('<name>').appendTo($tempTweet.children('header')).text(name);
    $('<user>').appendTo($tempTweet.children('header')).text(handle);

    $('<form>').appendTo($tempTweet).text(content);

    $('<footer>').appendTo($tempTweet);
    $('<age>').appendTo($tempTweet.children('footer')).text(date);
    $('<buttons>').appendTo($tempTweet.children('footer').val('🍕'));
    $('<buttons>').appendTo($tempTweet.children('footer').val('☃️'));
    $('<buttons>').appendTo($tempTweet.children('footer').val('🗑'));

    return $tempTweet;
  };

  let $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweet-list').prepend($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});