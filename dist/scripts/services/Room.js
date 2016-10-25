(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref("rooms");
    var rooms = $firebaseArray(ref);

    var refMessages = firebase.database().ref("messages");
  

    return {
      all: rooms,
      getMessages: function(roomId) {

        // refMessages.orderByChild("roomId").equalTo(roomId)
        var messages = $firebaseArray(refMessages.orderByChild("roomId").equalTo(roomId))
        console.log(messages);
        return messages;
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();