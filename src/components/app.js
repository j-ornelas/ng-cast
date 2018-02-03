angular.module('video-player').component('app', {
  // TODO

  

  controller: function(youTube) {
    this.videos = [];
    this.currentVideo = {};
    this.autoPlay = false;
    this.setState = (result) => {
      this.videos = result.data.items;
      this.currentVideo = result.data.items[0];
    };
    
    this.searchResults = (query) => {
      youTube.getRepo(query, this.setState, this.autoPlay);
      
    };
    this.selectVideo = (video) => {
      console.log('click');
      this.currentVideo = video;
    };
    this.autoPlayToggle = () => {
      this.autoPlay = !this.autoPlay;
    };
    this.searchResults('keanu reeves sad');
  },

  templateUrl: 'src/templates/app.html'
});
