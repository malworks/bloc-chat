(function(){
    function ModalDialog($scope, $uibModalInstance, Room){

        // creates room from open modal
        $scope.submit = function(){
            createNewRoom();
            $uibModalInstance.close(); 
        };

        var createNewRoom = function() {
            Room.all.$add( $scope.newChatRoom );
            $scope.newChatRoom = {};
        };



        // closes modal window
        $scope.cancel = function(){
            $uibModalInstance.dismiss('cancel'); 
        };

    }

    angular
        .module('blocChat')
        .controller('ModalDialog', ['$scope', '$uibModalInstance', 'Room', ModalDialog]);
})();

