/* eslint-disable */
$(document).ready(function () {
  // --- our code goes here ---
  $('.tweet-text').keyup(function (e) {
    e.preventDefault();
    const $count = $(this).siblings('.counter');
    $count.text(140 - $(this).val().length);

    if ($count.text() < 0) {
      $count.css('color', 'red');
    }
  });

  // mouseover + mouseleave handling of visibility
  $('#tweet-list').on('mouseover', 'article', function () {
    // over
    $(this).animate({
      opacity: 1
    });
    console.log('here');
  });
  $('#tweet-list').on('mouseleave', 'article', function () {
    // out
    $(this).animate({
      opacity: 0.6
    });
  });
});