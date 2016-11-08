(function() {
  function Room($firebaseArray, $cookies, $rootScope) {
    var ref = firebase.database().ref("rooms");
    var rooms = $firebaseArray(ref);
    var refMessages = firebase.database().ref("messages");
    var test = $firebaseArray(refMessages)


    

    return {
      all: rooms,
      getMessages: function(roomId) {
        var messages = $firebaseArray(refMessages.orderByChild("roomId").equalTo(roomId));

        console.log(messages);
        return messages;

      },
      send: function(message) {
        test.$add(message);
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', '$cookies', Room]);
})();