angular.module("artist").factory("artistService", ["$http", function ($http) {
    return {
        getAllArtists: function () {
            return $http.get("https://goat-service.herokuapp.com/artists")
        },
        getArtist: function (id) {
            return $http.get("https://goat-service.herokuapp.com/artists/" + id)
        },
        postRating: function (id, rating) {
            return $http.post("https://goat-service.herokuapp.com/rating/" + id, rating)
        }
    }
}]);
