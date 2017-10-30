var app = angular.module('apiApp', []);

app.controller('apiController', function($http) {
    var ac = this;

    ac.boruto = [];

    getItems();
    function getItems(){
        $http.get('http://jikan.me/api/anime/28755/').then(function(response){
            ac.boruto = response.data
            console.log(response.data);
        })
    }

}); // End Controller