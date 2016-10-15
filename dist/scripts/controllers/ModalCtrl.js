(function() {
    function ModalCtrl($scope) {
      $scope.modalShown = false;
      this.toggleModal = function() {
        $scope.modalShown = !$scope.modalShown;
        console.log("Click");
      };
   	}
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', ModalCtrl]);
 })();