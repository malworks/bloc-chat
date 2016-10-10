(function() {
    function RoomCtrl(Room) {
  		this.rooms = Room.all;
  		this.rooms = [1, 2, 3];
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', RoomCtrl);
 })();