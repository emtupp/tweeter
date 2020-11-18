$(document).ready(function() {
  console.log('ok');
  $("#display-tweets").mouseover(function() {
    $(".display-tweets").css("box-shadow", "5px 5px #4057a162");
    $(".display-tweets").css("font-weight", "bold");
    $(".uid").css("color", "#4057a162");
    $("#display-tweets").mouseleave(function() {
      $(".display-tweets").css("box-shadow", "none");
      $(".display-tweets").css("font-weight", "normal");
      $(".uid").css("color", "transparent");
    });
  });
});