/* eslint-disable */
$(document).ready(function () {
  // --- our code goes here ---
  $('#tweet-text').keyup(function (e) {
    e.preventDefault();
    $(this).siblings('.counter').text(140 - $(this).val().length);
  });
});