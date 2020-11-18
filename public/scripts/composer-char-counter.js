$(document).ready(function() {
  $("#tweet-text").on("input", function() {
    let counter = 140 - $(this).val().length;
    $(".counter").text(counter);
    // don't use .counter, but children and parent
    // condition ()
    if (counter >= 0) {
      $(".counter").css("color", "#545149");
    } else {
      $(".counter").css("color", "red");
    }
  });
});