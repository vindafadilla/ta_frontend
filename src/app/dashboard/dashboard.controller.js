(function() {
  'use strict';

  angular
    .module('TAforSocialMediaMarketing')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController(taforSMM, moment) {
    
    var vm = this;


    vm.sentimentConfig = {
          options: {
          chart: {
              type: 'column'
          }
          },
          title: {
            text: 'Reputation by Validation'
          },
          series : [
              {
                 name: 'Positive Sentiment',
                 color: '#56a1ec',
                 data : [60,30,40,80,95]
              },
              {
                 name: 'Negative Sentiment',
                 color: '#ed3941',
                 data : [40,70,60,20,15]
              },

          ],
          xAxis: {
            // type: 'category'
            categories: ['01 May', '02 May', '03 May', '04 May', '05 May']
          },
          loading: false
      }

  }

})();
