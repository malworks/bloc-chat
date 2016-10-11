(function() {
    function RoomCtrl(Room) {
  		this.rooms = Room.all;
  		this.rooms = ['Room 1','Room 2', 'Room 3'];
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
 })();