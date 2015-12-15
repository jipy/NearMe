app.controller('MainController', ['$scope','places','GeoLocator', function($scope,places,GeoLocator) {
    $scope.locate = function() {

    GeoLocator.locate().then(function (position) {
        var longti =  position.longitude;
	var lati =  position.latitude;
        $scope.longti = longti;
	$scope.lati = lati;
	$scope.map.center.lat = lati;
	$scope.map.center.lng = longti;
  	$scope.map.center.zoom = 16;
	}
        , function ($error) {
        $scope.longti = 0;
	$scope.lati = 0;
        }
    );
    };

    places.success(function(data) {
      	$scope.geodata = data;
      	$scope.mapMarkers = geodataToMarkers($scope.geodata);
    });
}]);
