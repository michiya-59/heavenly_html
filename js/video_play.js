document.addEventListener('DOMContentLoaded', function() {
  var videoElements = document.querySelectorAll('video');
  videoElements.forEach(function(video) {
    video.addEventListener('play', function() {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
      }
    }, false);
  });
});