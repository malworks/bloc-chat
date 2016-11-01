(function() {
  function CurrentUser($cookies) {
    var publicInterface = {};
    var currentUser = $cookies.get('blocChatCurrentUser');

    publicInterface.setCurrentUser = function(user){
      console.log("Flag 1")
      currentUser = user
      return currentUser 
    }

    publicInterface.getCurrentUser = function(){
      return currentUser
    }


    return publicInterface;
  }

  angular
    .module('blocChat')
    .factory('CurrentUser', ['$cookies', CurrentUser]);
})();