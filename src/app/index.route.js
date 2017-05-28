(function() {
  'use strict';

  angular
    .module('TAforSocialMediaMarketing')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
<<<<<<< HEAD
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard',
=======
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login',
>>>>>>> c671c17b3ba781d0a40c014b7cf773271b8dd8e4
        requireLogin: false
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login',
        requireLogin: false
      })
      .state('register', {
        url: '/register',
        templateUrl: 'app/account/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'register',
        requireLogin: false
      })
      .state('success', {
        url: '/register/success',
        templateUrl: 'app/account/register/register.success.html',
        requireLogin: false
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard',
        requireLogin: false
      })
      .state('statistics', {
        url: '/statistics',
        templateUrl: 'app/statistics/statistics.html',
        controller: 'StatisticsController',
        controllerAs: 'statistics',
        requireLogin: false
      })
<<<<<<< HEAD
      .state('online-reputation', {
        url: '/online-reputation',
        templateUrl: 'app/onlineReputation/onlineReputation.html',
        controller: 'OnlineReputationController',
        controllerAs: 'reputation',
        requireLogin: false
      })
      .state('customer-needs', {
        url: '/customer-needs',
=======
      .state('onlineReputation', {
        url: '/onlineReputation',
        templateUrl: 'app/onlineReputation/onlineReputation.html',
        controller: 'OnlineReputationController',
        controllerAs: 'onlineReputation',
        requireLogin: false
      })
      .state('customerNeeds', {
        url: '/customerNeeds',
>>>>>>> c671c17b3ba781d0a40c014b7cf773271b8dd8e4
        templateUrl: 'app/customerNeeds/customerNeeds.html',
        controller: 'CustomerNeedsController',
        controllerAs: 'customerNeeds',
        requireLogin: false
      })
<<<<<<< HEAD
      .state('community-engagement', {
        url: '/community-engagement',
        templateUrl: 'app/communityEngagement/communityEngagement.html',
        controller: 'CommunityEngagementController',
        controllerAs: 'engagement',
=======
      .state('communityEngagement', {
        url: '/communityEngagement',
        templateUrl: 'app/communityEngagement/communityEngagement.html',
        controller: 'CommunityEngagementController',
        controllerAs: 'communityEngagement',
>>>>>>> c671c17b3ba781d0a40c014b7cf773271b8dd8e4
        requireLogin: false
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/settings/settings.html',
        controller: 'SettingsController',
        controllerAs: 'settings',
        requireLogin: false
      })
      .state('settings.info', {
        url: '/info',
        templateUrl: 'app/settings/settings.user.html',
        controller: 'SettingsController',
        controllerAs: 'settings',
        requireLogin: false
      })
      .state('settings.password', {
        url: '/password',
        templateUrl: 'app/settings/settings.password.html',
        controller: 'SettingsController',
        controllerAs: 'settings',
        requireLogin: false
      })
<<<<<<< HEAD

    $urlRouterProvider.otherwise('/dashboard');
=======
      .state('logout', {
        url: '/logout',
        resolve : {
          logout : function($location, $rootScope, auth){
            // 'ngInject';
            auth.logout(function(s){
              if(s === 200){
                $rootScope.loginStatus = auth.isLoggedIn();
                $location.path('/login');
              }
            })
          }
        },
        requireLogin: true
      });

    $urlRouterProvider.otherwise('/login');
>>>>>>> c671c17b3ba781d0a40c014b7cf773271b8dd8e4
  }

})();
