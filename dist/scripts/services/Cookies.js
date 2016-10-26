(function() {
  function BlocChatCookies($cookies) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
    	this.createUser = function(name) {
        this.currentUser = name
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', BlocChatCookies]);
})();