angular.module('MyfirstApp', [])
        .run(function($rootScope){
            $rootScope.nombre = "Codigo facilito";
        })
        .controller('firstController',function($scope){
            $scope.nombre = "Juanito";
        })
        .controller('secodController',function($scope){
//            $scope.nombre = "Juanito";
        });