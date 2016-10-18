(function() {
    function RoomCtrl(Room) {
  		this.rooms = Room.all;

  		// this.createNewRoom = () => {
  		// 	this.rooms.$add( this.newChatRoom );
  		// 	this.newChatRoom = {};
  		// };
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
 })();