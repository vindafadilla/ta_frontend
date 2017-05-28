(function() {
  'use strict';

  angular
    .module('TAforSocialMediaMarketing')
    .controller('OnlineReputationController', OnlineReputationController);

  /** @ngInject */
  function OnlineReputationController(taforSMM, moment) {

    var vm = this;
    // vm.time = {};
    // vm.showChart = false;
    // vm.tabs = 'graph';

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


    // vm.dateOptions = {
    //   formatYear : 'YYYY',
    //   startingDay : 1
    // }

    // vm.open1 = function(){
    //   vm.popup1.opened = true;
    // }

    // vm.open2 = function(){
    //   vm.popup2.opened = true;
    // }

    // vm.open3 = function(){
    //   vm.popup3.opened = true;
    // }

    // vm.setDate = function(year, month, day) {
    //   vm.time.starttime = new Date(year, month, day);
    //   vm.time.endtime = new Date(year, month, day);
    // };

    // vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    // vm.format = vm.formats[0];
    // vm.altInputFormats = ['M!/d!/yyyy'];

    // vm.popup1 = {
    //   opened : false
    // }

    // vm.popup2 = {
    //   opened : false
    // }

    // vm.popup3 = {
    //   opened : false
    // }

    // vm.today = function(){
    //   vm.time.starttime = new Date();
    //   vm.time.endtime = new Date();
    // }

    // vm.clear = function(){
    //   vm.time.starttime = null;
    //   vm.time.endtime = null;
    // }

    // vm.graph = function(){
    //   vm.tabs = 'graph'
    // }

    // vm.table = function(){
    //   vm.tabs = 'table'
    // }

    // vm.userLevel = [
    //     {
    //       color : '#FF5722',
    //       level : 1,
    //       value : "> 5 call/day ( < 0.2 ) "
    //     },
    //     {
    //       color : '#4CAF50',
    //       level : 2,
    //       value : "> 0.3 -=< 1 call/day ( >= 1 -< 3.3 ) "
    //     },
    //     {
    //       color : '#03A9F4',
    //       level : 3,
    //       value : "< = 0.1 call/day ( >= 10 ) "
    //     },
    //     {
    //       color : '#009688',
    //       level : 4,
    //       value : "> 1 -<= 5 call/day ( >= 0.2 -< 1 ) "
    //     },
    //     {
    //       color : '#F44336',
    //       level : 5,
    //       value : "> 0.1 -=< 0.3 call/day ( >= 3.3 -< 10 ) "
    //     }
    // ];

    // vm.device = [
    //     {
    //       color : '#FF5722',
    //       level : 1,
    //       value : "Lenovo"
    //     },
    //     {
    //       color : '#4CAF50',
    //       level : 2,
    //       value : "Unknown"
    //     },
    //     {
    //       color : '#03A9F4',
    //       level : 3,
    //       value : "Samsung"
    //     },
    //     {
    //       color : '#009688',
    //       level : 4,
    //       value : "Sony"
    //     },
    //     {
    //       color : '#F44336',
    //       level : 5,
    //       value : "Andromax"
    //     }
    // ];

    // vm.submitDate = function(){
      
    //   getBadgeData(vm.time.starttime, vm.time.endtime);
      
    //   vm.showChart = true;

    //   vm.newUserChartOptions = getChart(vm.time.starttime, vm.time.endtime, 'line', 'newuser', 'New User Statistics');
    //   vm.allUserChartOptions = getChart(vm.time.starttime, vm.time.endtime, 'line', 'alluser', 'Total User Statistics');
    //   vm.callChartOptions = getChart(vm.time.starttime, vm.time.endtime, 'line', 'call', 'Call Statistics');
  
    //   vm.pieChartConfig = {
    //       options: {
    //       chart: {
    //           type: 'column'
    //       }
    //       },
    //       title: {
    //         text: 'Average User Call Attempt Level'
    //       },
    //       series : [{
    //          name: 'User Call Attempt Average Level',
    //          colorByPoint: true,
    //          data : getAverageUserLevel(vm.time.starttime,vm.time.endtime)
    //       }],
    //       xAxis: {
    //         type: 'category'
    //       },
    //       loading: false
    //   }

    //   vm.deviceChartConfig = {
    //       options: {
    //       chart: {
    //           type: 'column'
    //       }
    //       },
    //       title: {
    //         text: 'User Device Count'
    //       },
    //       series : [{
    //          name: 'User Device',
    //          colorByPoint: true,
    //          data : getUserDevice(vm.time.starttime,vm.time.endtime)
    //       }],
    //       xAxis: {
    //         type: 'category'
    //       },
    //       loading: false
    //   }
      
      
    //   vm.tableData = loadTableData(vm.time.starttime, vm.time.endtime);
    // }

    // vm.submitMonth = function(){

    //   var start = moment(vm.month).startOf('month').toDate();
    //   var end = moment(vm.month).endOf('month').toDate();

    //   getBadgeData(start, end)

    //   vm.showChart = true;


    //   vm.newUserChartOptions = getChart(start, end, 'line', 'newuser', 'New User Statistics');
    //   vm.allUserChartOptions = getChart(start, end, 'line', 'alluser', 'Total User Statistics');
    //   vm.callChartOptions = getChart(start, end, 'line', 'call', 'Call Statistics');
      
    //   vm.pieChartConfig = {
    //       options: {
    //       chart: {
    //           type: 'column'
    //       }
    //       },
    //       title: {
    //         text: 'Average User Call Attempt Level'
    //       },
    //       series : [{
    //          name: 'User Call Attempt Average Level',
    //          colorByPoint: true,
    //          data : getAverageUserLevel(start,end)
    //       }],
    //       xAxis: {
    //         type: 'category'
    //       },
    //       loading: false
    //   }

    //   vm.deviceChartConfig = {
    //       options: {
    //       chart: {
    //           type: 'column'
    //       }
    //       },
    //       title: {
    //         text: 'User Device Count'
    //       },
    //       series : [{
    //          name: 'User Device',
    //          colorByPoint: true,
    //          data : getUserDevice(start,end)
    //       }],
    //       xAxis: {
    //         type: 'category'
    //       },
    //       loading: false
    //   }

    //   vm.tableData = loadTableData(start, end);
    // }

    

    // function getAverageUserLevel(timestart, timeend){
      
    //   var avgLevel = [];
    //   var starttime = moment(timestart).startOf('day').format("YYYYMMDDHHmmss").toString();
    //   var endtime = moment(timeend).endOf('day').format("YYYYMMDDHHmmss").toString();

    //   avgLevel.push({name : "Level 1"}) //0
    //   avgLevel.push({name : "Level 2"}) //1
    //   avgLevel.push({name : "Level 3"}) //2
    //   avgLevel.push({name : "Level 4"}) //3
    //   avgLevel.push({name : "Level 5"}) //4
    //   // avgLevel.push({name : "Level 6"})//5

    //   var service = new cdrs.getAllDataPerMonth();

    //   var days = Math.abs(moment(starttime, "YYYYMMDDHHmmss").diff(moment(endtime, "YYYYMMDDHHmmss"), 'days'))+1
    //   var gtfive = 0, zpthreetillone = 0, ltzpone=0,onetillfive=0,zponetillzpthree=0,zero=0;;
      
    //   var serviceCall = service.query({start : starttime, end : endtime});
    //   serviceCall.$promise.then(function(callback){
          
    //     for(var i=0; i< days; i++){
    //       gtfive = gtfive + callback[i].useravglevel.gtfive;
    //       zpthreetillone = zpthreetillone + callback[i].useravglevel.zpthreetillone;
    //       ltzpone = ltzpone + callback[i].useravglevel.ltzpone;
    //       onetillfive = onetillfive + callback[i].useravglevel.onetillfive;
    //       zponetillzpthree = zponetillzpthree + callback[i].useravglevel.zponetillzpthree;
    //       // zero = zero + callback[i].useravglevel.zero;
    //     }
    //     // console.log(gtfive,zpthreetillone,ltzpone,onetillfive,zponetillzpthree,zero);
    //     avgLevel[0].y = gtfive; avgLevel[0].color = '#FF5722';
    //     avgLevel[1].y = zpthreetillone; avgLevel[1].color = '#4CAF50';
    //     avgLevel[2].y = ltzpone; avgLevel[2].color = '#03A9F4';
    //     avgLevel[3].y = onetillfive; avgLevel[3].color = '#009688';
    //     avgLevel[4].y = zponetillzpthree; avgLevel[4].color = '#F44336';
    //     // avgLevel[5].y = zero; avgLevel[5].color = '#607D8B';
    //   });

    //   return avgLevel
    // }

    // function getUserDevice(timestart, timeend){
      
    //   var userDevice = [];
    //   var starttime = moment(timestart).startOf('day').format("YYYYMMDDHHmmss").toString();
    //   var endtime = moment(timeend).endOf('day').format("YYYYMMDDHHmmss").toString();

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

    // function getBadgeData(startTime, endTime){

    //   var starttime = moment(startTime).startOf('day').format("YYYYMMDDHHmmss").toString();
    //   var endtime = moment(endTime).endOf('day').format("YYYYMMDDHHmmss").toString();

    //   var service = new cdrs.getDataPerMonth();

    //   service.get({start : starttime , end : endtime} , function(callback){
    //     vm.alluser = callback.totaluser;
    //     vm.allveruser = callback.totaluserver;
    //     vm.callattempt = callback.totalca;
    //     vm.callavg = parseFloat(callback.avgca);
    //     vm.callavgperday = parseFloat(callback.avgcauser);
    //   });

    //   vm.days = Math.abs(moment(starttime, "YYYYMMDDHHmmss").diff(moment(endtime, "YYYYMMDDHHmmss"), 'days'))+1

    // }

    // function initializeDate(start, endtime){
      
    //   var dateRange = [];
      
    //   for (var d = new Date(start); d <= endtime; d.setDate(d.getDate() + 1)) {

    //     var starttime = moment(d).startOf('day').format("MM/DD/YYYY h:mm:ss A").toString();
    //     var timeformat = moment(starttime, "MM/DD/YYYY h:mm:ss A").format("DD MMM").toString();
    //     dateRange.push({name : timeformat})

    //   }
    //   return dateRange;
    // }

    // function fetchUser(date, arr, key, index, service){

    //   var starttime = moment(date).startOf('day').format("YYYYMMDDHHmmss").toString();
    //   var endtime = moment(date).endOf('day').format("YYYYMMDDHHmmss").toString();

    //   service.get({start : starttime , end : endtime} , function(data){
    //     if(key === 'user') { 
    //         arr[index].y = data.statuser.inrange;
    //       }
    //     else if(key === 'ver'){ 
    //         arr[index].y = data.statuser.inrangever;
    //       }
    //   });
    // }

    // function fetchAllUser(date, arr, key, index, service){

    //   var starttime = moment(date).startOf('day').format("YYYYMMDDHHmmss").toString();
    //   var endtime = moment(date).endOf('day').format("YYYYMMDDHHmmss").toString();

    //   service.get({start : starttime , end : endtime} , function(data){
    //     if(key === 'user') { 
    //         arr[index].y = data.statuser.all;
    //       }
    //     else if(key === 'ver'){ 
    //         arr[index].y = data.statuser.allver;
    //       }
    //   });
    // }

    // function fetchCall(date, arr, key, index, service){

    //   var starttime = moment(date).startOf('day').format("YYYYMMDDHHmmss").toString();
    //   var endtime = moment(date).endOf('day').format("YYYYMMDDHHmmss").toString();

    //   var serviceCall = service.get({start : starttime, end : endtime});
    //     serviceCall.$promise.then(function(data){
    //       if(key === 'init') { 
    //         arr[index].y = data.statcdr.init;
    //       }
    //       else if(key === 'ring'){ 
    //         arr[index].y = data.statcdr.ring;
    //       }
    //       else if(key === 'accept'){ 
    //         arr[index].y = data.statcdr.accept;
    //       }
    //   })
    // }

    // function loadChartData(start, end, key, data){
    // /*
    //   Parameter Description : 
    //   - start : start time for chart
    //   - end : end time for data
    //   - key : fill with 0 if data == call, fill with 1 for user and 2 for verified user if data == newuser/alluser
    //   - data : data type (call, newuser, alluser)
    // */

    //   // console.log(start, end)
    //   var dataArray = initializeDate(start, end);

    //   var service = new cdrs.getDataPerDay();
     
    //   var i=0
      
    //   var timestart = moment(start).startOf('day').format("MM/DD/YYYY h:mm:ss A").toString();
    //   for (var d = new Date(timestart); d <= end; d.setDate(d.getDate() + 1)) {
    //     if(data === 'newuser'){
    //       fetchUser(d, dataArray, key, i, service);
    //     }
    //     else if(data === 'alluser'){
    //       fetchAllUser(d, dataArray, key, i, service);
    //     }
    //     else if(data === 'call'){
    //       fetchCall(d, dataArray, key, i, service);
    //     }  
        
    //     i++;
    //   }
    //   return dataArray;
    // }

    // function fetchData(date, index, arr, service){

    //   var starttime = moment(date).startOf('day').format("YYYYMMDDHHmmss").toString();
    //   var endtime = moment(date).endOf('day').format("YYYYMMDDHHmmss").toString();

    //   var serviceCall = service.get({start : starttime, end : endtime});
    //     serviceCall.$promise.then(function(data){
    //       arr[index].all = data.statuser.all;
    //       arr[index].allver = data.statuser.allver;
    //       arr[index].inrange = data.statuser.inrange;
    //       arr[index].inrangever = data.statuser.inrangever;
    //       arr[index].init = data.statcdr.init;
    //       arr[index].ring = data.statcdr.ring;
    //       arr[index].accept = data.statcdr.accept;
    //   })
    // }

    // function loadTableData(start, end){
    //   var dataArray = initializeDate(start, end);

    //   var timestart = moment(start).startOf('day').format("MM/DD/YYYY h:mm:ss A").toString();
    //   var i=0;

    //   var service = new cdrs.getDataPerDay();

    //   for (var d = new Date(timestart); d <= end; d.setDate(d.getDate() + 1)) {
    //       fetchData(d, i, dataArray, service);
    //     i++;
    //   }
    //   return dataArray;
    // }

    // function populateChartData(start, end, data){
    //   if(data === 'newuser'){
    //     var user = loadChartData(start, end, 'user', data)
    //     var verified = loadChartData(start, end,'ver', data)
    //     return [
    //         {
    //             name : "New User", 
    //             data : user
    //         },
    //         {
    //             name : "New Verified User", 
    //             data : verified
    //         }
    //     ];
    //   }
    //   else if(data === 'alluser'){
    //     var alluser = loadChartData(start, end, 'user', data)
    //     var allverified = loadChartData(start, end,'ver', data)

    //     return [
    //         {
    //             name : "Total User", 
    //             data : alluser
    //         },
    //         {
    //             name : "Total Verified User", 
    //             data : allverified
    //         }
    //     ];
    //   }
    //   else if(data === 'call'){
    //     var init = loadChartData(start, end, 'init', data)
    //     var ring = loadChartData(start, end,'ring', data)
    //     var accept = loadChartData(start, end,'accept', data)

    //     return [
    //         {
    //             name : "Call Attempt", 
    //             data : init
    //         },
    //         {
    //             name : "Incoming Call", 
    //             data : ring
    //         },
    //         {
    //             name : "Accepted Call", 
    //             data : accept
    //         }
    //     ];
    //   }  
      
    // }

    
    // function getChart(start, end, chartType, data, chartTitle){
    //   /* 
    //     Parameter Description 
    //     - start : Start time for chart
    //     - end : End time for chart
    //     - chartType : determining chart type fo highcharts
    //     - data : data type for chart (newuser, alluser, call)
    //   */

    //   return {
    //       options: {
    //           chart: {
    //               type: chartType,
    //               zoomType: 'x'
    //           }
    //       },
    //       title: {
    //          text: chartTitle
    //       },
    //       series: populateChartData(start, end , data),
    //       xAxis: {
    //         type: 'category',
    //         dateTimeLabelFormats: {
    //            day: '%d %B'    //ex- 01 Jan 2016
    //         }
    //       },
    //       loading: false
    //   }
    // }

  }
  
})();
