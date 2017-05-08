(function() {
  'use strict';

  angular
    .module('TAforSocialMediaMarketing')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log,$rootScope, $location, auth) {

    $log.debug('runBlock end');

    var onEvent = $rootScope.$on('$stateChangeStart', function(event, next, before) {
      if(next.requireLogin || before.requireLogin){
        var service = new auth.checkauth();
        service.get().$promise.then(
          function(res){},
          function(error){
            if((next.requireLogin || before.requireLogin) && error.status === 401){
              $location.path('/login');
              event.preventDefault();
            }
          }
        )
      }
    });

    $rootScope.$on('$destroy', onEvent);

  }

})();
