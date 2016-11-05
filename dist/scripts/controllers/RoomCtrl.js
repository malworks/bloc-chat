(function() {
    function RoomCtrl(Room, CurrentUser, $scope) {
  		this.rooms = Room.all;
      this.currentUser = CurrentUser.getCurrentUser();
      this.setActiveRoom = (room) => {
        this.activeRoom = room;
        this.listMessages = Room.getMessages(this.activeRoom.$id);
      
      };

      this.createUser = function(name) {
        this.currentUser = name;
      }

     

      $scope.$watch(function(){
        return CurrentUser.getCurrentUser()
      }, () => {
        console.log("Change Occurred")
        this.currentUser = CurrentUser.getCurrentUser();
      })

      this.send = Room.send;

    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'CurrentUser', '$scope', RoomCtrl]);
 })();