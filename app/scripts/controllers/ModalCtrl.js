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
        	console.log("Open Modal");
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalDialog',
                size: 'md', 
                backdrop: 'static'
            });
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModal', ModalCtrl]);
})();