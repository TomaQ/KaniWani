app.factory('Review', ['$resource', function($resource){
  return $resource('/review/:id.json', {}, {
    get_review: { method: 'GET', params: {id: '@id'}, isArray: true },
    set_review: { method: 'PUT', params: {id: '@id', review_set: 'review_set'} }
  });
}]);

