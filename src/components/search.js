angular.module('video-player').component('search', {
  // TODO
  bindings: {
    searchResults: '<',
    setState: '<'
  },
  controller: function() {
    this.input = '',
    this.result = () => {
      this.searchResults(this.input);
    };
  },
  templateUrl: 'src/templates/search.html'
});
