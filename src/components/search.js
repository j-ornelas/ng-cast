angular.module('video-player').component('search', {
  // TODO
  bindings: {
    searchResults: '<',
    autoPlayToggle: '<',
    pageStack: '<',
    stackClear: '<'
  },
  controller: function() {
    this.input = '',
    this.cssObj = {'color': 'black'};
    this.clearResult = () => {
      this.result();
      this.input = '';
    },
    this.result = () => {
      //create function on app.js that clears stack and push it down here.
      this.stackClear();
      this.searchResults(this.input);
      
    };
    this.autoPlayClick = () => {
      this.autoPlayToggle();
      this.cssObj.color = this.cssObj.color === 'red' ? 'black' : 'red';
    };
  
  },
  templateUrl: 'src/templates/search.html'
});
