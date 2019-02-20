/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
/* eslint-disable */

$(document).ready(function () {
  const tweetData = [{
      "user": {
        "name": "Newton",
        "avatars": {
          "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

  function renderTweets(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    tweets.forEach(element => {
      $('#tweet-list').prepend(createTweetElement(element));
    });
  }

  function createTweetElement(data) {
    // takes some tweet object and parse
    let $tempTweet = $('<article>').addClass('tweet');
    let name = data.user.name;
    let img = data.user.avatars.small;
    let date = Date(data.created_at).toString().slice(0, 15);
    let handle = data.user.handle;
    let content = data.content.text;

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
    $('<buttons>').appendTo($tempTweet.children('footer')).text('🍕');
    $('<buttons>').appendTo($tempTweet.children('footer')).text('☃️');
    $('<buttons>').appendTo($tempTweet.children('footer')).text('🗑');

    return $tempTweet;
  };

  // call building of list
  renderTweets(tweetData);
});