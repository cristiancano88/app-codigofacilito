angular.module('MyfirstApp', [])
.controller('firstController',function($scope){
    $scope.nombre = "primero";
            setTimeout(function(){
                $scope.$apply(function(){
                    $scope.nombre = "Segundo";
                });
            },2000);
    
    document.querySelector("#mi-boton").addEventListener("click", function(){
        $scope.$apply(function(){
            $scope.nombre = "Tercero";
        });
    });
});