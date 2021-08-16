$(document).ready(function () {
  console.log("ready!");

  $("#nav-btn").click(() => {
    $(".menu").removeClass("invisible");
    $(".about-intro").addClass("blur");
    $(".get-to-know-me").addClass("blur");
    $(".see-my-work").addClass("blur");
    $(".lee").addClass("blur");
    $(".gt-bootcamp").addClass("blur");
    $("footer").addClass("blur");

    $("#nav-btn").addClass("invisible");
  });

  $("#down-arrow").click(() => {
    $(".menu").removeClass("invisible");
    $(".about-intro").removeClass("blur");
    $(".get-to-know-me").removeClass("blur");
    $(".see-my-work").removeClass("blur");
    $(".lee").removeClass("blur");
    $(".gt-bootcamp").removeClass("blur");
    $("footer").removeClass("blur");
    $(".menu").addClass("invisible");

    $("#nav-btn").removeClass("invisible");
  });
});
