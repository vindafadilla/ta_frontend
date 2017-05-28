(function() {
  'use strict';

  angular
    .module('TAforSocialMediaMarketing')
    .directive('acmeSidebar', acmeSidebar);

  /** @ngInject */
  function acmeSidebar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/sidebar/sidebar.html',
      scope: {
          creationDate: '='
      },
      controller: SideController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SideController(moment) {
      var vm = this;

      // "vm.creationDate" is available by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
      // vm.username = $cookies.get('username');
    }
  }

})();
