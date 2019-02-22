/* eslint-disable */
$(() => {
  // process on keyup within text input
  $('.tweet-text').keyup((e) => {
    e.preventDefault();
    const $count = $('.tweet-text').siblings('.counter');
    $count.text(140 - $('.tweet-text').val().length);

    // if char count < 0 color text red
    if ($count.text() < 0) {
      $count.addClass('error-count');
    } else {
      $count.removeClass('error-count');
    }
  });
});
