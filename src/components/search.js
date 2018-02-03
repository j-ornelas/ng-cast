angular.module('video-player').component('search', {
  // TODO
  bindings: {
    searchResults: '<'
  },
  controller: function() {
    this.input = '',
    this.clearResult = () => {
      this.result();
      this.input = '';
    },
    this.result = () => {
      this.searchResults(this.input);
    };
  
  },
  templateUrl: 'src/templates/search.html'
});
