(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref("rooms");
    var rooms = $firebaseArray(ref);

    var refMessages = firebase.database().ref("rooms");
  

    return {
      all: rooms,
      create: function(room) {
        rooms.$add({name: room});
      },
      getMessages: function(roomId) {
        var messages = $firebaseArray(refMessages.orderByChild("roomId".equalTo(roomId)))
        return messages;
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();