/* eslint-disable */
$(document).ready(function () {
  // process on keyup within text input
  $('.tweet-text').keyup(function (e) {
    e.preventDefault();
    const $count = $(this).siblings('.counter');
    $count.text(140 - $(this).val().length);

    // if char count > 0 color text red
    if ($count.text() < 0) {
      $count.css('color', 'red');
    }
  });

  // mouseover + mouseleave handling of visibility
  $('#tweet-list').on('mouseover', '.tweet', function () {
    // over
    $(this).animate({
      opacity: 1
    });
  });
  $('#tweet-list').on('mouseleave', '.tweet', function () {
    // out
    $(this).animate({
      opacity: 0.6
    });
  });
});