angular.module('video-player').service('youTube', function($http) {
  // TODO
  
  this.getRepo = _.debounce(function(query, callback, autoplay) {
    return $http( {
      url: 'https://www.googleapis.com/youtube/v3/search',
      method: 'GET',
      params: {
        part: 'snippet',
        q: query,
        type: 'video',
        maxResult: 5,
        autoplay: autoplay,
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: true
      }
    }).then(function successCallback(response) {
      callback(response);
    }, function errorCallback(response) {
      console.log('error!', response);
    });
    
  },500);
});
