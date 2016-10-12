(function() {
    function RoomCtrl(Room) {
  		this.rooms = Room.all;
  		this.createNewRoom = () => {
  			console.log(this.newChatRoom);
  			this.rooms.$add( this.newChatRoom );
  			this.newChatRoom = {};


  		}
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
 })();