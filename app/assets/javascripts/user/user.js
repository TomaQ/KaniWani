app.factory('User', ['$resource', function($resource){
  return $resource('/users/:id.json', {}, {
    update: { method: 'PUT', params: {id: '@id'} }
  });
}]);

app.factory('WaniKaniUser', ['$resource', function($resource){
  return $resource('/users/update_wanikani/:id.json', {}, {
    update_wanikani_info: { method: 'PUT', params: {id: '@id'} }
  });
}]);
