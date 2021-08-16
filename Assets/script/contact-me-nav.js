$(document).ready(function () {
  console.log("ready!");

  $("#nav-btn").click(() => {
    $(".menu").removeClass("invisible");
    $(".contact").addClass("blur");
    $("footer").addClass("blur");

    $("#nav-btn").addClass("invisible");
  });

  $("#down-arrow").click(() => {
    $(".menu").removeClass("invisible");
    $(".contact").removeClass("blur");
    $("footer").removeClass("blur");
    $(".menu").addClass("invisible");

    $("#nav-btn").removeClass("invisible");
  });
});
