angular.module('video-player').component('app', {
  // TODO

  

  controller: function(youTube) {
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
    this.setState = (result) => {
      this.videos = result.data.items;
      this.currentVideo = result.data.items[0];
    };
    
    this.searchResults = (result) => {
      youTube.getRepo(result, this.setState);
      
    };
    this.selectVideo = (video) => {
      console.log('click');
      this.currentVideo = video;
    };
  
  },

  templateUrl: 'src/templates/app.html'
});
