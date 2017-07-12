var app = angular.module('mainApp',[]);

app.controller('people',function($scope, $http){
    debugger;
    $http.get('http://127.0.0.1/AngularJSFirtTutorial/http/database.json')
    // $http({
    //     method:"GET",
    //     url:"http://127.0.0.1/AngularJSFirtTutorial/http/database.json"
    // })
    .then(function(response){
        $scope.persons = response.data.records;
    })
});

// app.controller("people", function($scope) {
//   $scope.persons = [
//         {
//             "Name":"Sanka",
//             "Age":"26"
//         },
//         {
//             "Name":"Kasun",
//             "Age":"18"
//         },
//         {
//             "Name":"Saman",
//             "Age":"35"
//         },
//         {
//             "Name":"Alex",
//             "Age":"10"
//         }
//   ]
// });