angular.module('video-player').service('youTube', function($http) {
  // TODO
  
  this.getRepo = _.debounce(function(query, callback, autoplay, pageToken) {
    return $http( {
      url: 'https://www.googleapis.com/youtube/v3/search',
      method: 'GET',
      params: {
        part: 'snippet',
        q: query,
        type: 'video',
        max: 10,
        autoplay: autoplay,
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: true,
        pageToken: pageToken
      }
    }).then(function successCallback(response) {
      console.log(response);
      callback(response);
    }, function errorCallback(response) {
      console.log('error!', response);
    });
    
  },500);
});
