$(document).ready(function () {
  console.log("ready!");

  $("#nav-btn").click(() => {
    $(".menu").removeClass("invisible");
    $(".welcome").addClass("blur");
    $("footer").addClass("blur");
    $("#nav-btn").addClass("invisible");
  });

  $("#down-arrow").click(() => {
    $(".menu").addClass("invisible");
    $(".welcome").removeClass("blur");
    $("footer").removeClass("blur");
    $("#nav-btn").removeClass("invisible");
  });

  // $("#eyesOpen").mouseover(() => {
  //   $("#eyesOpen").addClass("none");
  //   $("#eyesClosed").removeClass("none")
  // });

  // $("#eyesClosed").mouseout(() => {
  //   $("#eyesOpen").removeClass("none");
  //   $("#eyesClosed").addClass("none")
  // });
});
