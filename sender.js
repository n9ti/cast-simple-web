/* global angular */
angular.module('myapp', ['ng-chrome-cast-channels'])
  .controller('myctrl', ['$scope', 'ChromeCastSenderChannel', function ($scope, ChromeCastSenderChannel) {
    // var cc = ChromeCastChannel
    ChromeCastSenderChannel.initialize('794B7BBF', 'urn:x-cast:com.google.cast.sample.helloworld')
    // Replace XXXXXXXX with your Application ID
    $scope.click = function () {
      ChromeCastSenderChannel.sendMessage($scope.message)
    }
  }])
