(function() {
    function RoomCtrl(Room) {
  		this.rooms = Room.all;
      this.setActiveRoom = (room) => {
        this.activeRoom = room;
      }
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
 })();