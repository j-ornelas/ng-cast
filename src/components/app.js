angular.module('video-player').component('app', {
  // TODO

  

  controller: function(youTube) {
    this.videos = [];
    this.currentVideo = {};
    this.setState = (result) => {
      this.videos = result.data.items;
      this.currentVideo = result.data.items[0];
    };
    
    this.searchResults = (query) => {
      youTube.getRepo(query, this.setState);
      
    };
    this.selectVideo = (video) => {
      console.log('click');
      this.currentVideo = video;
    };
    this.searchResults('keanu reeves sad');
  },

  templateUrl: 'src/templates/app.html'
});
