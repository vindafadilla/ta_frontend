(function() {
  'use strict';

  angular
    .module('TAforSocialMediaMarketing')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController(taforSMM, moment) {
    

    // var vm = this;

    // vm.today = new Date();
    // // vm.today = new Date("2016-09-11");

    // getBadgeData(vm.today, cdrs);
    // getWeeklyStats(vm.today);

    // vm.userChartConfig = {
    //     options: {
    //         chart: {
    //             type: 'line',
    //             zoomType: 'x'
    //         }
    //     },
    //     title: {
    //        text: 'User Statistics This Week'
    //     },
    //     series: populateUserChartData(vm.today),
    //     xAxis: {
    //       type: 'category',
    //       dateTimeLabelFormats: {
    //          day: '%d %B'    //ex- 01 Jan 2016
    //       }
    //     },
    //     loading: false
    // }

    // vm.callChartConfig = {
    //     options: {
    //         chart: {
    //             type: 'line',
    //             zoomType: 'x'
    //         }
    //     },
    //     title: {
    //        text: 'Call Statistics This Week'
    //     },
    //     series: populateCallChartData(vm.today),
    //     xAxis: {
    //       type: 'category',
    //       dateTimeLabelFormats: {
    //          day: '%d %B'    //ex- 01 Jan 2016
    //       }
    //     },
    //     loading: false
    // }
    
    // vm.deviceChartConfig = {
    //       options: {
    //       chart: {
    //           type: 'column'
    //       }
    //       },
    //       title: {
    //         text: 'User Device Count'
    //       },
    //       series : [{
    //          name: 'Used by user',
    //          colorByPoint: true,
    //          data : getUserDevice(vm.today)
    //       }],
    //       xAxis: {
    //         type: 'category'
    //       },
    //       loading: false
    //   }


    // function getBadgeData(date){

    //     var starttime = moment(date).startOf('day').format("YYYYMMDDHHmmss").toString();
    //     var endtime = moment(date).endOf('day').format("YYYYMMDDHHmmss").toString();

    //     var userService = new cdrs.getDataPerDay();
    //     userService.get({start : starttime , end : endtime} , function(callback){
    //       vm.newUser = callback.statuser.inrange;
    //       vm.newVerifiedUser = callback.statuser.inrangever;
    //       vm.callAttempt = callback.statcdr.init;
    //       vm.avgCallAttempt = callback.statcdr.ring;
    //     }); 
    // }

    // function getUserDevice(date){
      
    //   var userDevice = [];
    //   var starttime = moment(date).startOf('isoweek').format("YYYYMMDDHHmmss").toString();
    //   var endtime = moment(date).endOf('isoweek').format("YYYYMMDDHHmmss").toString();

    //   userDevice.push({name : "Lenovo"}) //0
    //   userDevice.push({name : "Unknown"}) //1
    //   userDevice.push({name : "Samsung"}) //2
    //   userDevice.push({name : "Sony"}) //3
    //   userDevice.push({name : "Andromax"}) //4

    //   var service = new cdrs.getAllDataPerMonth();
    //   var days = Math.abs(moment(starttime, "YYYYMMDDHHmmss").diff(moment(endtime, "YYYYMMDDHHmmss"), 'days'))+1
    //   var samsung = 0, lenovo = 0;
    //   var unknown = 0, andromax = 0, sony = 0;
      
    //   service.query({start : starttime , end : endtime} , function(callback){
    //     for(var i=0; i< days; i++){
    //       samsung = samsung + callback[i].userdevice.totalsamsung;
    //       lenovo = lenovo + callback[i].userdevice.totallenovo;
    //       sony = sony + callback[i].userdevice.totalsony;
    //       andromax = andromax + callback[i].userdevice.totalandromax;
    //       unknown = unknown + callback[i].userdevice.totalunknown;
    //     }

    //     userDevice[0].y = lenovo; vm.lenovo = lenovo; userDevice[0].color = '#FF5722';
    //     userDevice[1].y = unknown; vm.unknown = unknown; userDevice[1].color = '#4CAF50';
    //     userDevice[2].y = samsung; vm.samsung = samsung; userDevice[2].color = '#03A9F4';
    //     userDevice[3].y = sony; vm.sony = sony; userDevice[3].color = '#009688';
    //     userDevice[4].y = andromax; vm.andromax = andromax; userDevice[4].color = '#F44336';

    //   }); 

    //   return userDevice
    // }

    // function initializeDate(date){
      
    //   var dateRange = [];
    //   var timestart = moment(date).startOf('isoweek').format("MM/DD/YYYY h:mm:ss A").toString();
      
    //   for (var d = new Date(timestart); d <= date; d.setDate(d.getDate() + 1)) {

    //     var starttime = moment(d).startOf('day').format("MM/DD/YYYY h:mm:ss A").toString();
    //     var timeformat = moment(starttime, "MM/DD/YYYY h:mm:ss A").format("DD MMM").toString();
    //     dateRange.push({name : timeformat})

    //   }

    //   return dateRange;
    // }

    // function fetchUser(date, arr, key, index, service){

    //   var starttime = moment(date).startOf('day').format("YYYYMMDDHHmmss").toString();
    //   var endtime = moment(date).endOf('day').format("YYYYMMDDHHmmss").toString();

    //   var serviceCall = service.get({start : starttime, end : endtime});
    //     serviceCall.$promise.then(function(data){
    //       if(key) { 
    //         //get user data
    //         arr[index].y = data.statuser.inrange;
    //       }
    //       else{ 
    //         //get verified user data
    //         arr[index].y = data.statuser.inrangever;
    //       }
    //   })
    // }

    // function loadUserData(date, key){

    //   var dataArray = initializeDate(date);
      
    //   var userService = new cdrs.getDataPerDay();
    //   var i=0
      
    //   var timestart = moment(date).startOf('isoweek').format("MM/DD/YYYY h:mm:ss A").toString();
    //   for (var d = new Date(timestart); d <= date; d.setDate(d.getDate() + 1)) {
    //     fetchUser(d, dataArray, key, i, userService);
    //     i++;
    //   }
    //   return dataArray;
    // }

    // function populateUserChartData(date){
    //   var user = loadUserData(date,1)
    //   var verified = loadUserData(date,0)

    //   return [
    //       {
    //           name : "New User", 
    //           data : user
    //       },
    //       {
    //           name : "New Verified User", 
    //           data : verified
    //       }
    //   ];
    // }

    // function getWeeklyStats(date){

    //   var firstDayInWeek = moment(date).startOf('isoweek').format("MM/DD/YYYY h:mm:ss A").toString();

    //   var starttime = moment(firstDayInWeek, "MM/DD/YYYY h:mm:ss A").startOf('day').format("YYYYMMDDHHmmss").toString();
    //   var endtime = moment(date).endOf('day').format("YYYYMMDDHHmmss").toString();

    //   var service = new cdrs.getAllDataPerMonth();
    //   var days = Math.abs(moment(starttime, "YYYYMMDDHHmmss").diff(moment(endtime, "YYYYMMDDHHmmss"), 'days'))+1
    //   var weekall = 0, weekver = 0;
    //   var weekinit = 0, weekring = 0, weekaccept = 0;
      
    //   service.query({start : starttime , end : endtime} , function(callback){
    //     for(var i=0; i< days; i++){
    //       weekall = weekall + callback[i].statuser.inrange;
    //       weekver = weekver + callback[i].statuser.inrangever;
    //       weekinit = weekinit + callback[i].statcdr.init;
    //       weekring = weekring + callback[i].statcdr.ring;
    //       weekaccept = weekaccept + callback[i].statcdr.accept;
    //     }

    //     vm.all = callback[days-1].statuser.all;
    //     vm.allver = callback[days-1].statuser.allver;
    //     vm.inrange = weekall;
    //     vm.inrangever = weekver;
    //     vm.attempt = weekinit;
    //     vm.incoming = weekring;
    //     vm.accept = weekaccept;

    //   }); 
     
    // }
    
    // function fetchCall(date, arr, key, index, service){

    //   var starttime = moment(date).startOf('day').format("YYYYMMDDHHmmss").toString();
    //   var endtime = moment(date).endOf('day').format("YYYYMMDDHHmmss").toString();

    //   var serviceCall = service.get({start : starttime, end : endtime});
    //     serviceCall.$promise.then(function(data){
    //       if(key === 1) { 
    //         arr[index].y = data.statcdr.init;
    //       }
    //       else if(key === 2){ 
    //         arr[index].y = data.statcdr.ring;
    //       }
    //       else { 
    //         arr[index].y = data.statcdr.accept;
    //       }
    //   })
    // }

    // function loadCallData(date, key){

    //   var dataArray = initializeDate(date);
      
    //   var callService = new cdrs.getDataPerDay();
    //   var i=0
      
    //   var timestart = moment(date).startOf('isoweek').format("MM/DD/YYYY h:mm:ss A").toString();
    //   for (var d = new Date(timestart); d <= date; d.setDate(d.getDate() + 1)) {
    //     fetchCall(d, dataArray, key, i, callService);
    //     i++;
    //   }
    //   return dataArray;
    // }

    // function populateCallChartData(date){
    //   var init = loadCallData(date,1)
    //   var ring = loadCallData(date,2)
    //   var accept = loadCallData(date,3)

    //   return [
    //       {
    //           data: init, 
    //           name: 'Call Attempt'
    //       },
    //       {
    //           data: ring, 
    //           name: 'Incoming Call'
    //       },
    //       {
    //           data: accept, 
    //           name: 'Accepted Call'
    //       }
    //   ];
    // }

  }

})();
