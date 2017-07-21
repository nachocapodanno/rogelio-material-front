(function () {

  angular
    .module('app')
    .controller('OpenOfficeController', [
      'openOfficeService', '$mdToast', '$state',
      OpenOfficeController
    ]);

  function OpenOfficeController(openOfficeService, $mdToast, $state) {
    var vm = this;

    vm.openDoor = function () {
      openOfficeService.openOffice()
          .then(function(messages) {
            console.log(messages);
            var y = $('#door');
            var x = y.attr("class");
            if (y.hasClass("thumbOpened")) {
              y.removeClass("thumbOpened");
            }
            else {
              $(".thumb").removeClass("thumbOpened");
              y.addClass("thumbOpened");
            }

            $mdToast.show(
                $mdToast.simple()
                    .content(messages.data.status.openedBy + " abrio la oficina")
                    .hideDelay(2000)
                    .position('top right')
            );

            $state.go("home.dashboard");
          });

    }

    openOfficeService.getStatus()
        .then(function(messages) {
          vm.officeStatus = messages.data.status.status;
        });
  }

})();
