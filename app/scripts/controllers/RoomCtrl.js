(function() {
    function RoomCtrl(Room) {
  		this.rooms = Room.all;
      
      this.setActiveRoom = (room) => {
        this.activeRoom = room;
        this.listMessages = Room.getMessages(this.activeRoom.$id);
      
      };

      this.createUser = function(name) {
        this.currentUser = name;
      }
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
 })();