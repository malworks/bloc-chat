(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref("rooms");
    var rooms = $firebaseArray(ref);

    var createNewRoom = (room) => {
        rooms.$add(room);
      };
  

    return {
    	all: rooms,
      createNewRoom: createNewRoom
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();