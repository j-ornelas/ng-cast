angular.module('video-player').component('videoList', {
  // TODO

  bindings: {
    onClick: '<',
    videos: '<',
    searchResults: '<',
    prevQuery: '<',
    nextPageToken: '<',
    pageStack: '<',
    stackState: '<'
  },
  controller: function() {
    this.pageBack = () => {
      console.log(this.pageStack);
      this.pageStack.pop();
      this.searchResults(this.prevQuery, this.pageStack[this.pageStack.length-1]);
    };

    this.pageForward = () => {
      this.searchResults(this.prevQuery, this.nextPageToken);
      this.pageStack.push(this.nextPageToken);
      console.log(this.pageStack);
    };
  },
  templateUrl: 'src/templates/videoList.html'
});
