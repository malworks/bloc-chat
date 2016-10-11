(function() {
    function RoomCtrl(Room) {
  		this.rooms = Room.all;


  		window.foo = this.rooms
  		// this.rooms = ['Room 1','Room 2', 'Room 3'];
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
 })();