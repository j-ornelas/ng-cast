angular.module('video-player').component('app', {
  // TODO

  

  controller: function() {
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
    this.changeVideo = (video) => {
      console.log('click');
      this.currentVideo = video;
    };
  },

  templateUrl: 'src/templates/app.html'
});
