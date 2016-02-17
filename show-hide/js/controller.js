angular.module('MyfirstApp', [])
.controller('firstController',function($scope, $http){
    $scope.posts = [];
    $scope.newPost = {};
    $scope.loading = true;
    
//    $http.get("http://jsonplaceholder.typicode.com/poss") //descomentar si se va ha probar el mensaje de "No se encontro resultados" 
    $http.get("http://jsonplaceholder.typicode.com/posts")
        .success(function(data){
            $scope.posts = data;
            $scope.loading = false;
        })
        .error(function(err){
            $scope.loading = false;
        });
});