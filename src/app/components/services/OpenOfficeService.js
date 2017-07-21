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
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          data: $httpParamSerializerJQLike({
            status: "open",
            name: "zelzo"
          })
        });
      }
    }
  }

})();