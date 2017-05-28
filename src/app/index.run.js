(function() {
  'use strict';

  angular
    .module('TAforSocialMediaMarketing')
    .run(runBlock);

  /** @ngInject */
<<<<<<< HEAD
  function runBlock($log,$rootScope, $location) {
=======
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
>>>>>>> c671c17b3ba781d0a40c014b7cf773271b8dd8e4

  }

})();
