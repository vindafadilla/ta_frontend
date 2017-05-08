(function() {
  'use strict';

  angular
    .module('TAforSocialMediaMarketing')
    .controller('RegisterController', RegisterController);

  /** @ngInject */
  function RegisterController(auth, $state, $rootScope) {
    
    // var vm = this;

    // vm.auth = auth;
    // vm.cred = {};
    // vm.showAlert = false;
    // vm.$State = $state;
    // vm.$rootScope = $rootScope;
    // vm.title = "Please Enter Email and Password to Register";

    // vm.register = function(){
    //   var service = new auth.register();
    //   var serviceCall = service.save(vm.cred);
    //   serviceCall.$promise.then(
    //       function(res){
    //         $state.go('success');
    //       },
    //       function(error){
    //         if(error.status === 409){
    //            vm.alertMsg = "Account already exist ! :( ";
    //            vm.alertType = "danger";
    //            vm.showAlert = true;
    //            vm.cred = {};
    //         }
    //       }
    //     )
    // }

    // vm.closeAlert = function() {
    //   vm.showAlert = false;
    // };

  }
})();
