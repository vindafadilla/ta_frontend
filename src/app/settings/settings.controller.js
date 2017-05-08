(function() {
  'use strict';

  angular
    .module('TAforSocialMediaMarketing')
    .controller('SettingsController', SettingsController);

  /** @ngInject */
  function SettingsController($cookies, auth) {

    // var vm = this;

    // vm.options = "info";
    // vm.cred = {};
    // vm.showAlert = false;
    // vm.passwordedit=false;
    // vm.infoedit = true;

    // vm.cred.firstname = $cookies.get("username");
    // vm.cred.lastname = $cookies.get("lastname");
    // vm.cred.country = $cookies.get("country");
    // vm.cred.address = $cookies.get("address");
    // vm.cred.phone = $cookies.get("phone");

    // vm.userinfo = function(){
    //   vm.passwordedit=false;
    //   vm.infoedit = true;
    // }

    // vm.userpassword = function(){
    //   vm.passwordedit=true;
    //   vm.infoedit = false;
    // }

    // vm.update = function(){
    //   var service = new auth.updateinfo();

    //   var serviceCall = service.update(vm.cred);
    //   serviceCall.$promise.then(
    //       function(res){
    //         vm.alertMsg = "Your info has been updated! :) ";
    //         vm.alertType = "success";
    //         vm.showAlert = true;

    //         $cookies.put("username", res.firstname);
    //         $cookies.put("lastname", res.lastname);
    //         $cookies.put("country", res.country);
    //         $cookies.put("address", res.address);
    //         $cookies.put("phone", res.phone);

    //       },
    //       function(error){
    //         vm.alertMsg = "Your info is not updated! :( ";
    //         vm.alertType = "danger";
    //         vm.showAlert = true;

    //       }
    //     )
    //   vm.username = $cookies.get("username");
    // }
    
    // vm.cred.firstname = $cookies.get("username");
    // vm.cred.lastname = $cookies.get("lastname");
    // vm.cred.country = $cookies.get("country");
    // vm.cred.address = $cookies.get("address");
    // vm.cred.phone = $cookies.get("phone");

    // vm.updatePassword = function(){
    //   var service = new auth.updateinfo();

    //   var serviceCall = service.update({password : vm.password});
    //   serviceCall.$promise.then(
    //       function(res){
    //         vm.alertMsg = "Your password has been updated! :) ";
    //         vm.alertType = "success";
    //         vm.showAlert = true;
    //       },
    //       function(error){
    //         vm.alertMsg = "Your password is not updated! :( ";
    //         vm.alertType = "danger";
    //         vm.showAlert = true;
    //       }
    //     )
    // }



    // vm.closeAlert = function() {
    //   vm.showAlert = false;
    // };

  }
})();
