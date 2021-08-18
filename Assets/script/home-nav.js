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

  $("#eyesClosed").hide();
  $("#eyesOpen").show();

  $("#eyesOpen").mouseover(() => {
    $("#eyesOpen").hide();
    $("#eyesClosed").show();
  });

  $("#eyesClosed").mouseout(() => {
    $("#eyesClosed").hide();
    $("#eyesOpen").show();
  });
});
