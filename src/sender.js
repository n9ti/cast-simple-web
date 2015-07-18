/* global angular */
angular.module('myapp', ['ng-chrome-cast-channels'])
  .controller('myctrl', ['$scope', 'ChromeCastSenderChannel', function ($scope, ChromeCastSenderChannel) {
    // var cc = ChromeCastChannel
    ChromeCastSenderChannel.initialize('7F0322BF', 'urn:x-cast:com.google.cast.sample.helloworld')
    // Replace XXXXXXXX with your Application ID
    $scope.click = function () {
      ChromeCastSenderChannel.sendMessage($scope.message)
    }
  }])
