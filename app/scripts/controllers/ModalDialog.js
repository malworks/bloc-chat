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
        var $ctrl = this;

        // creates room from open modal
        $scope.confirm = function(room){
            console.log("Does this work?");
            Room.createNewRoom($ctrl.newChatRoom);
            $ctrl.newChatRoom = {}
            $uibModalInstance.close(); //standard close per uibmodal website
        };

        // closes modal window
        $scope.cancel = function(){
            $uibModalInstance.dismiss('cancel'); //standard close per uibmodal website 
        };

    }

    angular
        .module("blocChat")
        .controller("ModalDialog", ["$scope", "$uibModalInstance", "Room", ModalDialog]);
})();

