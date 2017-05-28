(function() {
  'use strict';

  angular
    .module('TAforSocialMediaMarketing')
    .service('auth', auth)
    .config(['$httpProvider', function($httpProvider) {
      $httpProvider.defaults.withCredentials = true;
    }]);

  /** @ngInject */
  function auth($rootScope, $http, $q, $cookies, $resource) {
    var vm = this;
    var userIsAuthenticated = false;
    
    function authenticate(credentials, cb){

      $http({method : 'POST', url : 'http://stats.innovathor.net/apiv1/login', data:credentials}).
      success(function(data, status){
        if(status === 200){
          userIsAuthenticated = true;
          
          $cookies.put("username", data.firstname);
          $cookies.put("lastname", data.lastname);
          $cookies.put("country", data.country);
          $cookies.put("address", data.address);
          $cookies.put("phone", data.phone);
          
        }
        cb(status);
      }).
      error(function(data, status){
        userIsAuthenticated = false;
        cb(status);
      })
    }

    vm.authenticate = authenticate;

    function register(){
      return $resource('http://stats.innovathor.net/apiv1/register',{},{});
    }

    vm.register = register;

    function updateinfo(){
      return $resource('http://stats.innovathor.net/apiv1/updateuser',{},{
        update : {
          method : 'PUT'
        }
      });
    }

    vm.updateinfo = updateinfo;


     function isLoggedIn() {
      return userIsAuthenticated; 
    }

    vm.isLoggedIn = isLoggedIn;

    function checkauth() {
      return $resource('http://stats.innovathor.net/apiv1/checklogin',{},{
      });
    }


    vm.checkauth = checkauth;

    function getUserData(){
      return userData;
    }

    vm.getUserData = getUserData;

    function logout(cb){
      $http({method:'GET', url : 'http://stats.innovathor.net/apiv1/logout'}).
      success(function(data, status){
        userIsAuthenticated = false;
        $cookies.remove('token');
        $cookies.remove('username');
        $cookies.remove('lastname');
        $cookies.remove('address');
        $cookies.remove('country');
        $cookies.remove('phone');
        
        
        cb(status)
      }).
      error(function(data, status){
        userIsAuthenticated = true;
        cb(status)
      })
    }

    vm.logout = logout;

  }

})();
