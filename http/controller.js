var app = angular.module('mainApp',[]);

app.controller('people',function($scope, $http){
    $http.get('database.json')
    .then(function(response){
        $scope.persons = response.data.records;
        console.log(response.data.records);
    })
});
