angular.module('ToDoList', ["LocalStorageModule"])
.controller('ToDoController',function($scope, localStorageService){
    if ( localStorageService.get("angular-todo-list") ) {
        $scope.todo = localStorageService.get("angular-todo-list");
    } else {
        $scope.todo = [];
    }
    /*
    {
        descripcion: "Terminar el curso de angular",
        fecha: "3-03-15 2:00pm",
    }
    */
   $scope.$watchCollection('todo', function(){
       localStorageService.set("angular-todo-list", $scope.todo);;
   });
   
//   $scope.$watch(function(){
//       return $scope.newActv;
//   }, function(newValue, oldValue){
//       console.log(newValue);
//       console.log(oldValue);
//   });
   
   $scope.addActv = function() {
       $scope.todo.push($scope.newActv);
       $scope.newActv = {};
       //la siguiente linea se comento, por se puso a trabajar con "$watchCollection"
//       localStorageService.set("angular-todo-list", $scope.todo);
   };
   
   $scope.clean = function(){
       $scope.todo = [];
       //la siguiente linea se comento, por se puso a trabajar con "$watchCollection"
//       localStorageService.set("angular-todo-list", $scope.todo);
   }
    
});