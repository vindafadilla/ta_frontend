(function() {
  'use strict';

  angular
    .module('TAforSocialMediaMarketing')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($rootScope, $location, $state, auth) {
    

    // var vm = this;

    // vm.title = "Yay login page";

    // vm.cred = {};
    // vm.showAlert = false;

    // vm.title = "Please Enter Email and Password";
    
    // vm.login = function(){
    //   auth.authenticate({email : vm.cred.email, password : vm.cred.password}, function(status){
    //     if(status === 200){
    //     userIsAuthenticated = true;
    //       $rootScope.loginStatus = auth.isLoggedIn();
    //       $state.go('dashboard');
    //     }
    //     else if(status === 403){
    //       vm.alertMsg = "Wrong Password. Please re-enter your credentials ";
    //       vm.showAlert = true;
    //     }
    //     else{
    //       vm.alertMsg = "Wrong Email or Password. Please re-enter your credentials ";
    //       vm.showAlert = true;
    //     }
    //   });
    //   vm.cred={};
    // }

    // vm.closeAlert = function() {
    //   vm.showAlert = false;
    // };
    
  }
})();
