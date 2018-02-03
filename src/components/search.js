angular.module('video-player').component('search', {
  // TODO
  bindings: {
    searchResults: '<',
    autoPlayToggle: '<'
  },
  controller: function() {
    this.input = '',
    this.cssObj = {'color': 'black'};
    this.clearResult = () => {
      this.result();
      this.input = '';
    },
    this.result = () => {
      this.searchResults(this.input);
    };
    this.autoPlayClick = () => {
      this.autoPlayToggle();
      this.cssObj.color = this.cssObj.color === 'red' ? 'black' : 'red';
    };
  
  },
  templateUrl: 'src/templates/search.html'
});
