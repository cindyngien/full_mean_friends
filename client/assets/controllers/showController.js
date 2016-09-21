app.controller('showController', ['$scope', 'friendsFactory','$routeParams', '$location',
    function ($scope, friendsFactory,$routeParams, $location){

        friendsFactory.show($routeParams.id, function(friend){
            $scope.friendInfo = friend;
            $scope.friendInfo.birthday = new Date(friend.birthday);
        })

        $scope.goBack = function(){
            $location.url('/');
        }
}])
