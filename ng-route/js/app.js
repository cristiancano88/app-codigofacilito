angular.module('CustomDirective', ["ngRoute"])
.config(function($routeProvider){
    $routeProvider
    	.when("/", {
    		controller: "ReposController",
    		templateUrl: "templates/home.html"
    	})
    	.when("/repo/:nombre", {
    		controller: "RepoController",
    		templateUrl: "templates/repo.html"	
    	})
    	.otherwise("/")
});