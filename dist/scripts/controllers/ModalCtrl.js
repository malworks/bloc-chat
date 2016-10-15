// (function() {
//     function ModalCtrl($scope) {
//       $scope.modalShown = false;
//       this.toggleModal = function() {
//         $scope.modalShown = !$scope.modalShown;
//         console.log("Click");
//       };
//    	}
    
//     angular
//         .module('blocChat')
//         .controller('ModalCtrl', ['$scope', ModalCtrl]);
//  })();

(function() {
    function ModalCtrl($scope, $uibModal) {

        this.open = function(){
        	console.log("Click click");
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalDialog',
                size: 'md', // size per uimodal website
                backdrop: 'static' // disables closing of modal by clicking anything but the buttons
            });
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModal', ModalCtrl]);
})();