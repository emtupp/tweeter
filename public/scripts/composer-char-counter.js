$(document).ready(function() {
  $("#tweet-text").on("input", function() {
    let counter = 140 - $(this).val().length;
    $(this).parent().children('.tweet-wordcount').children('output').text(counter);
    if (counter >= 0) {
      $(".counter").css("color", "#545149");
    } else {
      $(".counter").css("color", "red");
    }
  });
});