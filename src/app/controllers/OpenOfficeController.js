(function () {

  angular
    .module('app')
    .controller('OpenOfficeController', [
      'openOfficeService',
      OpenOfficeController
    ]);

  function OpenOfficeController(openOfficeService) {

    function openDoor() {
      console.log("!daswdasd");
      openOfficeService.openOffice()
          .then(function(messages) {
            console.log("volvio");
            var y = $(field).find(".thumb");
            var x = y.attr("class");
            if (y.hasClass("thumbOpened")) {
              y.removeClass("thumbOpened");
            }
            else {
              $(".thumb").removeClass("thumbOpened");
              y.addClass("thumbOpened");
            }
          });

    }
  }

})();
