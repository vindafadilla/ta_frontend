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
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login',
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
      .state('onlineReputation', {
        url: '/onlineReputation',
        templateUrl: 'app/onlineReputation/onlineReputation.html',
        controller: 'OnlineReputationController',
        controllerAs: 'onlineReputation',
        requireLogin: false
      })
      .state('customerNeeds', {
        url: '/customerNeeds',
        templateUrl: 'app/customerNeeds/customerNeeds.html',
        controller: 'CustomerNeedsController',
        controllerAs: 'customerNeeds',
        requireLogin: false
      })
      .state('communityEngagement', {
        url: '/communityEngagement',
        templateUrl: 'app/communityEngagement/communityEngagement.html',
        controller: 'CommunityEngagementController',
        controllerAs: 'communityEngagement',
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
  }

})();
