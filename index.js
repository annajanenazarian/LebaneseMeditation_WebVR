// This code is to control the play-pause of the Jounieh.html video 

AFRAME.registerComponent("play-pause", {
    init: function () {
      var myVideo = document.querySelector("#grandprix");
      var videoControls = document.querySelector("#videoControls");
      this.el.addEventListener("click", function () {
        if (myVideo.paused) {
          myVideo.play();
          videoControls.setAttribute("src", "#pause");
        } else {
          myVideo.pause();
          videoControls.setAttribute("src", "#play");
        }
      });
    },
  });
  