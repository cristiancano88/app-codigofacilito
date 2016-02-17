angular.module('ToDoList', ["LocalStorageModule"])
        .factory('ToDoService', function (localStorageService) {
            var toDoService = {};
            toDoService.key = 'angular-todo-list';
            
            if (localStorageService.get(toDoService.key)) {
                toDoService.activities = localStorageService.get(toDoService.key);
            } else {
                toDoService.activities = [];
            }
            
            toDoService.add = function(newActv) {
                toDoService.activities.push(newActv);
            };
            
            toDoService.updateLocalStorage = function() {
                localStorageService.set(toDoService.key, toDoService.activities);
            };
            toDoService.clean = function() {
                toDoService.activities = [];
                toDoService.updateLocalStorage();
            };
            toDoService.getAll = function() {
                return toDoService.activities;
            };
            toDoService.removeItem = function(){
                toDoService.activities = toDoService.activities.filter(function(){
                    return activiti !== item;
                });
                toDoService.updateLocalStorage();
                return toDoService.getAll();
            };
            
            return toDoService();
            
        })
        .controller('ToDoController', function ($scope, ToDoService) {
            
            $scope.todo = ToDoService.getAll();
            
            $scope.addActv = function() {
                ToDoService.add(newActv);
                $scope.newActv = {};
            };
            
            $scope.removeActv = function(item) {
                $scope.todo = ToDoService.removeItem(item);
            };
            
            $scope.clean = function() {
                ToDoService.clean();
            };

        });