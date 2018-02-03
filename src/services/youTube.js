angular.module('video-player').service('youTube', function($http) {
  // TODO
  
  this.getRepo = function(query, callback) {
    return $http( {
      url: 'https://www.googleapis.com/youtube/v3/search',
      method: 'GET',
      params: {
        part: 'snippet',
        q: query,
        type: 'video',
        maxResult: 5,
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: true
      }
    }).then(function successCallback(response) {
      callback(response);
    }, function errorCallback(response) {
      console.log('error!', response);
    });
  };
});
