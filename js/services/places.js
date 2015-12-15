//use api get json data
app.factory('places', ['$http','$scope', function($http,$scope) { 
  return $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=5000&gscoord=' + $scope.lati + '%7C' + $scope.longti + '&gslimit=30&format=json&callback=JSON_CALLBACK') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);

//get coordinates
app.factory('GeoLocator', function ($q, $rootScope) {
    var locate = function () {
        var deferred = $q.defer();
        navigator.geolocation.getCurrentPosition(success, error);
        function success(position) {
            $rootScope.$apply(function () {
		deferred.resolve(position.coords);
	    });
        }
        function error(error) {
            $rootScope.$apply(function () {
		deferred.reject(error);
	    });
        }
        return deferred.promise;
    };
    return {locate : locate};
})
