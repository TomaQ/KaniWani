app.factory('User', ['$resource', function($resource){
  return $resource('/users/:id.json', {}, {
    update: { method: 'PUT', params: {id: '@id'} }
  });
}]);