angular.module("artist").controller("artistController", ["artistService", "$scope", "$location",
    function (artistService, $scope, $location) {


    artistService.getAllArtists().then(function (response) {
        $scope.artists = response.data;
    });

    $scope.artistSelected = function (id) {
        $location.path("/artist/" + id);
    }






}]);
