(function() {
  'use strict';

  angular
    .module('TAforSocialMediaMarketing')
    .service('engagements', engagements);

  /** @ngInject */
  function engagements($resource) {

    var vm = this;

    function getEngagement(){
      return $resource('http://localhost:5000/api/v1/test/engagement/overall?from=:start&to=:end', 
      {
        from : '@start',
        to : '@end'
      });
    }
    vm.getEngagement = getEngagement;
  }

})();
