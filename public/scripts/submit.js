/* eslint-disable */
$(() => {
  $('.new-tweet').on('submit', (event) => {
    event.preventDefault();
    $.post("/tweets", $('.tweet-text').serialize())
      .then((event) => {
          // stuff
          console.log('woo!');
        },
        (err) => {
          // error handling
          console.log('bleh');
        });
  });
});
