(function() {
  'use strict';

  angular
    .module('TAforSocialMediaMarketing')
    .controller('CommunityEngagementController', CommunityEngagementController);

  /** @ngInject */
  function CommunityEngagementController(moment, engagements) {

    var vm = this;
    vm.time = {};
    vm.showChart = false;
    // vm.tabs = 'graph';

    vm.dateOptions = {
      formatYear : 'YYYY',
      startingDay : 1
    }

    vm.open1 = function(){
      vm.popup1.opened = true;
    }

    vm.open2 = function(){
      vm.popup2.opened = true;
    }

    vm.open3 = function(){
      vm.popup3.opened = true;
    }

    vm.setDate = function(year, month, day) {
      vm.time.starttime = new Date(year, month, day);
      vm.time.endtime = new Date(year, month, day);
    };

    vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    vm.format = vm.formats[0];
    vm.altInputFormats = ['M!/d!/yyyy'];

    vm.popup1 = {
      opened : false
    }

    vm.popup2 = {
      opened : false
    }

    vm.popup3 = {
      opened : false
    }

    vm.today = function(){
      vm.time.starttime = new Date();
      vm.time.endtime = new Date();
    }

    vm.clear = function(){
      vm.time.starttime = null;
      vm.time.endtime = null;
    }

    

    vm.submitdate = function(){
      vm.time.starttime = new Date(vm.starttime);
      vm.time.endtime = new Date(vm.endtime);

      var starttime = moment(vm.time.starttime).startOf('day').format("YYYY-MM-DDTHH:MM:SS").toString();
      var endtime = moment(vm.time.endtime).endOf('day').format("YYYY-MM-DDTHH:MM:SS").toString();

      getBadgeData(starttime,endtime)

    }

    function getBadgeData(starttime, endtime){

      var service = new engagements.getEngagement();

      service.query({from : starttime , to : endtime} , function(callback){
        vm.replies = callback[0].engagement_result.replies_count;
        vm.likes = callback[0].engagement_result.likes_count;
        vm.retweets = callback[0].engagement_result.retweets_count
        vm.followers = callback[0].engagement_result.userData.followers_count;
        vm.statuses = callback[0].engagement_result.userData.statuses_count;
      });
    }

    vm.myTweet = [
        {
            text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            retweets : 10,
            likes : 10,
            replies : 5
        },
        {
            text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            retweets : 10,
            likes : 10,
            replies : 5
        },
        {
            text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            retweets : 10,
            likes : 10,
            replies : 5
        },
        {
            text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            retweets : 10,
            likes : 10,
            replies : 5
        },
        {
            text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            retweets : 10,
            likes : 10,
            replies : 5
        }

    ];

    vm.chartOptions = getChart('line');
    vm.chartOptions2 = getChart2('line');

    // console.log(vm.chartOptions);

    function getChart(chartType){
      return {
          options: {
              chart: {
                  type: chartType,
                  zoomType: 'x'
              }
          },
          title: {
            text: 'Follower Growth'
          },
          series: [
              {
                name : "Total Followers",
                data : [100,200,150,300,400]
              }
          ],
          xAxis: {
            categories: ['01 May', '02 May', '03 May', '04 May', '05 May']
            // type: 'category',
            // dateTimeLabelFormats: {
            //    day: '%d %B'    //ex- 01 Jan 2016
            // }
          },
          loading: false
      }
    }

    function getChart2(chartType){
      return {
          options: {
              chart: {
                  type: chartType,
                  zoomType: 'x'
              }
          },
          title: {
            text: 'Engagement Rate'
          },
          series: [
              {
                name : "Engagement Rate (in percentage)",
                data : [1.8,2.9,3.6,1.2,2.2]
              }
          ],
          xAxis: {
            categories: ['01 May', '02 May', '03 May', '04 May', '05 May']
            // type: 'category',
            // dateTimeLabelFormats: {
            //    day: '%d %B'    //ex- 01 Jan 2016
            // }
          },
          loading: false
      }
    }




  }
  
})();
