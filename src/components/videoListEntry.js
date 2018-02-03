angular.module('video-player').component('videoListEntry', {
  // TODO
  controller: function() {
    this.clickHandle = function() {
      console.log('click!');
    };
  },

  bindings: {
    onClick: '<',
    video: '<'
  },

  templateUrl: 'src/templates/videoListEntry.html'
});
