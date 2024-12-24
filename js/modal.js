$("#myModal").on("hidden.bs.modal", function () {
  var video = $(this).find("video")[0];
  video.pause(); // Pausa el video
  video.currentTime = 0; // Resetea el video al inicio
});

$(document).on("click", function (e) {
  if (!$(e.target).closest(".modal-content").length) {
    var video = $("#myModal").find("video")[0];
    video.pause(); // Pausa el video
    video.currentTime = 0; // Resetea el video al inicio
  }
});
