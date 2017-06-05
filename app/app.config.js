angular.module("app").config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            template: "<home-screen></home-screen>"
        })
        .when("/artists",{
            template: "<artist-component></artist-component>"
        })
        .when("/artist/:artistId", {
            template: "<vote-component></vote-component>"
        })
        .otherwise("/");

    $locationProvider.html5Mode(true);
}]);