$(document).ready(function () {
  console.log("ready!");

  $("#nav-btn").click(() => {
    $(".menu").removeClass("invisible");
    $(".about-intro").addClass("blur");
    $(".get-to-know-me").addClass("blur");
    $(".see-my-work").addClass("blur");
    $(".card2").addClass("blur");
    $(".card").addClass("blur");
    $("footer").addClass("blur");

    $("#nav-btn").addClass("invisible");
  });

  $("#down-arrow").click(() => {
    $(".menu").removeClass("invisible");
    $(".about-intro").removeClass("blur");
    $(".get-to-know-me").removeClass("blur");
    $(".see-my-work").removeClass("blur");
    $(".card2").removeClass("blur");
    $(".card").removeClass("blur");
    $("footer").removeClass("blur");
    $(".menu").addClass("invisible");

    $("#nav-btn").removeClass("invisible");
  });
});
