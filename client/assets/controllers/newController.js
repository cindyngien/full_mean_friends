app.controller('newController', ['$scope', 'friendsFactory','$location', '$route',
    function ($scope, friendsFactory,$location, $route){

		$scope.createFriend = function(){
			friendsFactory.create($scope.friendInfo,function(){
				$scope.friendInfo = {};
				$location.url('/')
			})
		}
		$scope.goBack = function(){
			$location.url('/');
		}


}])
