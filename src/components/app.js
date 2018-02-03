angular.module('video-player').component('app', {
  // TODO

  

  controller: function(youTube) {
    this.videos = [];
    this.currentVideo = {};
    this.autoPlay = false;
    this.pageStack = [];
    this.nextPageToken;
    this.prevQuery = '';
    this.setState = (result) => {
      this.videos = result.data.items;
      if (this.pageStack.length === 0) {
        this.currentVideo = result.data.items[0];
      }
      this.nextPageToken = result.data.nextPageToken;
      this.prevQuery = result.config.params.q;
    };
    
    this.stackClear = () => {
      this.pageStack = [];  
    };

    this.searchResults = (query, pageToken) => {
      youTube.getRepo(query, this.setState, this.autoPlay, pageToken);
      
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
