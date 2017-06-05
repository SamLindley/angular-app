angular.module("artist").controller("voteController",  ["$scope", "$location", "artistService","$routeParams",
    function ( $scope, $location, artistService, $routeParams) {



    $scope.vote = function () {
        var rating = {
        flow: $scope.flowRating,
        wordplay: $scope.wordplayRating
        };
        artistService.postRating($routeParams.artistId, rating).then(function () {
            $location.path("/artists")
        });
    };

    $scope.artistId = $routeParams.artistId;

    artistService.getArtist($routeParams.artistId).then(function (response) {
        console.log(response.data);
        $scope.artist = response.data;
    });

}]);
