var app = angular.module('MyfirstApp', []);

app.controller('firstController',function($scope){
	$scope.nombre = "Cristian";
        $scope.comentarios = [
            {
                comentario: "Buen tutorial",
                username: "usuarioUno"
            },
            {
                comentario: "Malisimo el tutorial",
                username: "usuarioDos"
            }
        ];
        
        $scope.nuevoComentario = function(){};
        $scope.agregarComentario = function(){
            $scope.comentarios.push($scope.nuevoComentario);
            $scope.nuevoComentario = "";
        };
});

//la explicacion de porque colocar la function en un array la dan en el video tutorial "6"
//app.controller('firstController',["$scope",function(m){
//	m.nombre = "Cristian";
//        m.comentarios = [
//            {
//                comentario: "Buen tutorial",
//                username: "usuarioUno"
//            },
//            {
//                comentario: "Malisimo el tutorial",
//                username: "usuarioDos"
//            }
//        ];
//        
//        m.nuevoComentario = function(){};
//        m.agregarComentario = function(){
//            m.comentarios.push(m.nuevoComentario);
//            m.nuevoComentario = "";
//        };
//}]);