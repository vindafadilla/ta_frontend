(function() {
  'use strict';

  angular
    .module('TAforSocialMediaMarketing')
    .service('taforSMM', taforSMM);

  /** @ngInject */
  function taforSMM($resource) {

    // var vm = this;
    
    // function getDataPerDay(){
    //   return $resource('http://stats.innovathor.net/apiv1/getdataperday?starttime=:start&endtime=:end',{start: '@starttime',end:'@endtime'},{});
    // }

    // vm.getDataPerDay = getDataPerDay;

    // function getDataPerMonth(){
    //   return $resource('http://stats.innovathor.net/apiv1/getdatapermonth?starttime=:start&endtime=:end',{start: '@starttime',end:'@endtime'},{});
    // }

    // vm.getDataPerMonth = getDataPerMonth;

    // function getAllDataPerMonth(){
    //   return $resource('http://stats.innovathor.net/apiv1/getalldatapermonth?starttime=:start&endtime=:end',{start: '@starttime',end:'@endtime'},{});
    // }

    // vm.getAllDataPerMonth = getAllDataPerMonth;

  }

})();
