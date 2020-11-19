$(document).ready(function() {
  $('form').on("submit", function(event) {
    if ($('#tweet-text').val().length === 0) {
      alert("Error: You can't submit an empty tweet.")
    }
    if ($('#tweet-text').val().length > 140) {
      alert("Error: You've exceeded the maximum character count for this tweet.")
    }
  });
});