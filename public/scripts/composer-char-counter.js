/* eslint-disable */
$(document).ready(function () {
  // --- our code goes here ---
  $('#tweet-text').keyup(function (e) {
    e.preventDefault();
    const count = $(this).siblings('.counter');
    count.text(140 - $(this).val().length);

    if (count.text() < 0) {
      count.css('color', 'red');
    }
  });
});