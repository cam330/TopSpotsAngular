var app = angular.module( 'myApp', ['uiGmapgoogle-maps']);

app.controller('MainCtrl', function($scope, $http) {
  $http.get('topspots.json')
       .then(function(res){
          $scope.spots = res.data.topspots;           
        });

       var lng;
       var lat;
       var lngLat;

   $scope.map = { 
   	center: { latitude: 32.884932, longitude: -117.00 }, 
   	zoom: 9,
   	marker: [],
   	events: {
      click: function(mapModel, eventName, originalEventArgs) {
        var e = originalEventArgs[0];
        lat = e.latLng.lat(),lng = e.latLng.lng()
        $scope.longitude = lng;
        $scope.latitude = lat;
        lngLat = [lat,lng];
        $scope.$apply();
      }
    } 
  };

  $scope.addRow = function(){
    $scope.spots.push({'name': $scope.name, 'description' : $scope.description, 'location' : lngLat});
    $scope.name='';
    $scope.description='';
    $scope.location='';
     };
});

