(function() {
    function RoomCtrl(Room) {
  		this.rooms = Room.all;
      
      this.setActiveRoom = (room) => {
        this.activeRoom = room;
        this.listMessages = Room.getMessages(this.activeRoom.$id);


      };
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
 })();