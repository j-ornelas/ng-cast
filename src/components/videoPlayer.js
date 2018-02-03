angular.module('video-player').component('videoPlayer', {

  bindings: {
    currentVideo: '<',
    autoPlay: '<'
  },
  controller: function() {
    this.checkAutoPlay = () => {
      return this.autoPlay === false ? '' : '?autoplay=1';
    };
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
