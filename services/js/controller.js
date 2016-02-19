angular.module('ToDoList', ["LocalStorageModule"])
        .service('ToDoService', function (localStorageService) {
            // var toDoService = {};
            this.key = 'angular-todo-list';
            
            if (localStorageService.get(this.key)) {
                this.activities = localStorageService.get(this.key);
            } else {
                this.activities = [];
            }
            
            this.add = function(newActv) {
                this.activities.push(newActv);
                this.updateLocalStorage();
            };
            
            this.updateLocalStorage = function() {
                localStorageService.set(this.key, this.activities);
            };
            this.clean = function() {
                this.activities = [];
                this.updateLocalStorage();
            };
            this.getAll = function() {
                return this.activities;
            };
            this.removeItem = function(item){
                this.activities = this.activities.filter(function(activity){
                    return activity !== item;
                });
                this.updateLocalStorage();
                return this.getAll();
            };
            
            // return this;
            
        })
        .controller('ToDoController', function ($scope, ToDoService) {
            
            $scope.todo = ToDoService.getAll();
            
            $scope.addActv = function() {
                ToDoService.add($scope.newActv);
                $scope.newActv = {};
            };
            
            $scope.removeActv = function(item) {
                $scope.todo = ToDoService.removeItem(item);
            };
            
            $scope.clean = function() {
                $scope.todo = ToDoService.clean();
            };

        });