angular.module("FinalApp")
        .controller("MainController", function($scope, $resource, PostResource){
            // Post = $resource("http://jsonplaceholder.typicode.com/posts/:id", {id: "@id"}, {update: {method: "PUT"}});
            User = $resource("http://jsonplaceholder.typicode.com/users/:id", {id: "@id"});
                
            $scope.posts = PostResource.query();
            $scope.users = User.query();
            // query() -> GET / POST -> un arreglo de posts -> isArray: true
             
            $scope.removePost = function(post){
            	Post.delete({id: post.id}, function(data){
	        		console.log(data);
	        		$scope.posts = $scope.posts.filter(function(elem) {
		        		return elem.id !== post.id;
		        	});
	        	});
	        	
            };

        })
        .controller("PostController", function($scope, PostResource, $routeParams, $location){
        	// Post = $resource("http://jsonplaceholder.typicode.com/posts/:id", {id: "@id"});
        	$scope.post = PostResource.get({id: $routeParams.id});
        	$scope.title = "Editar Post";
        	$scope.savePost = function(){
        		PostResource.update({id: $scope.post.id},{data: $scope.post},function(data){
        			console.log(data);
        			$location.path("/post/"+ $scope.post.id);
        			// $location.path("/");
        		});
        	};
        })
        .controller("NewController", function($scope, PostResource, $location){
        	// Post = $resource("http://jsonplaceholder.typicode.com/posts/:id", {id: "@id"});
        	$scope.post = {};
        	$scope.title = "Crear Post";
        	$scope.savePost = function(){
        		PostResource.save({data: $scope.post},function(data){
        			console.log(data);
        			$location.path("/");
        		});
        	};
        });