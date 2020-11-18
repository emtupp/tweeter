$(document).ready(function() {
  console.log('ok');
  $("#tweet").mouseover(function() {
    $(".tweet").css("box-shadow", "5px 5px #4057a162");
    $(".tweet").css("font-weight", "bold");
    $(".uid").css("color", "#4057a162");
    $("#tweet").mouseleave(function() {
      $(".tweet").css("box-shadow", "none");
      $(".tweet").css("font-weight", "normal");
      $(".uid").css("color", "transparent");
    });
  });
});