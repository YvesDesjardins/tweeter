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
});