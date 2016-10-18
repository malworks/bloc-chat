// (function() {
// 	function modalDialog() {
//         return {
//             restrict: 'E',
//             scope: {
//             show: '='
//         },
//         replace: true, // Replace with the template below
//         transclude: true, // we want to insert custom content inside the directive
//         link: function(scope, element, attrs) {
//             scope.dialogStyle = {};
//             if (attrs.width)
//                 scope.dialogStyle.width = attrs.width;
//             if (attrs.height)
//                 scope.dialogStyle.height = attrs.height;
//             scope.hideModal = function() {
//                 scope.show = false;
//             };
//         },
//     templateUrl: '/templates/modal.html',
//     };
// };

// 	angular
// 	.module('blocChat')
//     .directive('modalDialog', modalDialog);
// })();

(function(){
    function ModalDialog($scope, $uibModalInstance, Room){

        // creates room from open modal
        $scope.submit = function(){
            console.log("Does this work?");
              console.log($scope.newChatRoom)
            createNewRoom();
            // $uibModalInstance.close(); 
        };

        var createNewRoom = function() {
            console.log($scope.newChatRoom)
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

