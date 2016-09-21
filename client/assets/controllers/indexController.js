app.controller('indexController', ['$scope', 'friendsFactory','$location', '$route',
    function ($scope, friendsFactory, $location, $route){

    	friendsFactory.index(function(friends){
    		console.log(friends);
    		$scope.friends = friends;
    	})

		$scope.newFriend = function(){
			$location.url('/new');
		}

		$scope.deleteFriend = function(id){
		  friendsFactory.delete(id, function(){
		  	$route.reload();
		  });
		}

		$scope.updateFriend = function(id){
			$location.url('/edit/'+id);
		}

		$scope.showFriend = function(id){
			$location.url('/show/'+id);
		}


}])
