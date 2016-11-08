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

      this.send = () => {
        var message = {
          content: this.newMessage,
          username: this.currentUser,
          sentAt: new Date().getTime(),
          roomId: this.activeRoom.$id
        }

        console.log(message)

        Room.send(message);
        this.newMessage = "";
      }
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'CurrentUser', '$scope', RoomCtrl]);
 })();