(function(){
  'use strict';

  angular
      .module('app')
      .service('openOfficeService', [
        '$http',
        openOfficeService
      ]);

  function openOfficeService($http){
    return {
      openOffice: function() {
        return $http({
          url: "http://74.207.253.57:3010/openoffice/open",
          method: "POST",
          data: {
            status: "open",
            name: "zelzo"
          }
        });
      },
      getStatus: function() {
        return $http({
          url: "http://74.207.253.57:3010/openoffice/status",
          method: "GET"
        });
      }
    }
  }

})();