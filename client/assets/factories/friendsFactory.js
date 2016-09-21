console.log('Friend Factory');

app.factory('friendsFactory', ['$http', function($http) {

    var factory = {};

    var friends = [
        {first_name: "Miller",last_name: "Nguyen"},
        {first_name: "Jeanine",last_name: "Aarland"},
        {first_name: "Jeff",last_name: "Alexander"},
        {first_name: "Aaron",last_name: "Autsen"},
        {first_name: "Karen",last_name: "Peel"},
        {first_name: "Jason",last_name: "Zee"},
        {first_name: "Steven",last_name: "Brown"},
        {first_name: "Alice",last_name: "Wang"},
    ];
    factory.index = function(callback){
        $http.get('/friends').then(function(data){
            callback(data.data.friends);
        })
    }
    factory.create = function(new_friend,callback){
    $http.post('/friends',new_friend).then(function(data){
      if (typeof(callback) == 'function'){
          callback(data.data.friend);
      }
    })
}
    factory.delete = function(id, callback){
        $http.delete('/friends/'+id).then(function(data){
          callback(data.data.friend);
        })
      }

      factory.show = function(id,callback){
        $http.get('/friends/'+id).then(function(data){
          callback(data.data.friend);
        })
      }

      factory.edit = function(edit_friend,callback){
        $http.put('/friends/'+edit_friend._id, edit_friend).then(function(data){
          callback(data.data.friend);
        })
      }
      return factory;
    }]);
