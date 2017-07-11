var app = angular.module('mainApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'page.html'
    })
    .when('/hello',{
        templateUrl:'hello.html'
    })
    .otherwise({
        redirecTo:'/'
    });
});