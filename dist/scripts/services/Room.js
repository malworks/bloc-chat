(function() {
  function Room($firebaseArray, $cookies) {
    var ref = firebase.database().ref("rooms");
    var rooms = $firebaseArray(ref);

    var refMessages = firebase.database().ref("messages");

    

    return {
      all: rooms,
      getMessages: function(roomId) {

        var messages = $firebaseArray(refMessages.orderByChild("roomId").equalTo(roomId));
        console.log(messages);
        return messages;

      },
      send: function(newMessage, currentRoom) {
        var now = new Date().getTime();

        //Setup date object to send to Firebase
        var messageObject = {
          content: newMessage,
          username: $cookies.get('currentUser'),
          sentAt: now,
          roomID: currentRoom
        }
        console.log("Flag1")
        messages.$add(messageObject);
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', '$cookies', Room]);
})();